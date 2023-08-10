import { Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';
import { COMPONENTS } from 'src/app/constant/foundation/foundation.constant';
import { ComponentMap } from 'src/app/core/data/contentMapData';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {
  @Input() content: string = '';
  @Input() dirContent: ComponentMap = [];


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    // console.log(this.content);
    // console.log(this.dirContent);
    this.loadDynamicComponent();
  }

  loadDynamicComponent(): void {
    let component = this.dirContent[this.content];
    // console.log(component);
    if (component !== undefined) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(component);
      this.viewContainerRef.createComponent(componentFactory);
    }
  }
}
