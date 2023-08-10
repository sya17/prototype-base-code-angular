import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { ComponentMap } from 'src/app/core/data/contentMapData';
import { ContentService } from 'src/app/core/service/content.service';
import { AlertSnackbarService } from 'src/app/core/utils/alert-snackbar.service';

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
  componentFactoryRenderSummon: ComponentFactory<any> | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private contentService: ContentService,
    private alertSnackbar: AlertSnackbarService,
  ) {}

  ngOnInit(): void {
    this.contentService.data$.subscribe((data) => {
      if (this.idMenuModule == data.id) {
        if (this.componentRender != null && this.componentRender != undefined) {
          this.componentRender.destroy();
        }
        this.content = data.name;
        this.loadDynamicComponent();
      }
    });
  }

  loadDynamicComponent(): void {
    let component = this.dirContent[this.content];
    if (component !== null && component !== undefined) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.componentFactoryRenderSummon = componentFactory;
        this.componentRender = this.viewContainerRef.createComponent(componentFactory);
      }else{
        this.componentRender = this.viewContainerRef.createComponent(this.componentFactoryRenderSummon!);
        this.alertSnackbar.alert('center', 'top', 'the module has not been registered');
    }
    if(this.componentRender != null && this.componentRender != undefined){
      // Lempar Id Menu Ke Component Yang di render
      const instance = this.componentRender.instance as any;
      instance.idMenuModule = this.idMenuModule;
    }
  }
}
