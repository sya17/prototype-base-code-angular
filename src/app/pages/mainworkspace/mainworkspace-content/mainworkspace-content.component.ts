import {
  Component,
  ComponentFactoryResolver,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { COMPONENTS } from 'src/app/constant/foundation/foundation.constant';

@Component({
  selector: 'app-mainworkspace-content',
  templateUrl: './mainworkspace-content.component.html',
  styleUrls: ['./mainworkspace-content.component.scss'],
})
export class MainworkspaceContentComponent {
  @Input() inquiry: string = '';
  @Input() id: string = '';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.loadDynamicComponent();
  }

  loadDynamicComponent(): void {
    let component = COMPONENTS[this.inquiry];
    if (component !== undefined) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef =
        this.viewContainerRef.createComponent(componentFactory);

      // Lempar Id Menu Ke Component Yang di render
      const instance = componentRef.instance as any;
      instance.idMenu = this.id;
    }
  }
}
