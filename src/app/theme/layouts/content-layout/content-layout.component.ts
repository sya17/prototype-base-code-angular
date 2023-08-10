import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { ComponentMap } from 'src/app/core/data/contentMapData';
import { ContentService } from 'src/app/core/service/content.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent {
  @Input() idMenuModule: string = '';
  @Input() content: string = '';
  @Input() dirContent: ComponentMap = [];

  componentRender: ComponentRef<any> | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.contentService.data$.subscribe((data) => {
      // console.log('ContentLayoutComponent', this.idMenuModule);
      // console.log('ContentLayoutComponent', data.id);
      // console.log('ContentLayoutComponent', data.name);
      // console.log('ContentLayoutComponent', this.componentRender);
      if (this.idMenuModule == data.id) {
        if (this.componentRender != null && this.componentRender != undefined) {
          // console.log('masuk destroy');
          this.componentRender.destroy();
        }
        this.content = data.name;
        this.loadDynamicComponent();
      }
    });
  }

  loadDynamicComponent(): void {
    // console.log(this.content);
    let component = this.dirContent[this.content];
    if (component !== null && component !== undefined) {
      // console.log('masuk dynamic render');
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(component);
      this.componentRender =
        this.viewContainerRef.createComponent(componentFactory);

      // Lempar Id Menu Ke Component Yang di render
      const instance = this.componentRender.instance as any;
      instance.idMenuModule = this.idMenuModule;
    }
  }
}
