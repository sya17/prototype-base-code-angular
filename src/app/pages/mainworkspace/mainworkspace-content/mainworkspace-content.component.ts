import { Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';
import { COMPONENTS } from 'src/app/constant/foundation/foundation.constant';

@Component({
  selector: 'app-mainworkspace-content',
  templateUrl: './mainworkspace-content.component.html',
  styleUrls: ['./mainworkspace-content.component.scss']
})
export class MainworkspaceContentComponent {
  @Input() inquiry: string = "";

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
  ) {
    
  }

  ngOnInit(): void {
    this.loadDynamicComponent();
  }

  loadDynamicComponent(): void {
    let component = COMPONENTS[this.inquiry];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.createComponent(componentFactory);
  }

}
