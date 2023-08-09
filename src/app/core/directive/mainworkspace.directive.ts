// import {
//   Directive,
//   EventEmitter,
//   Input,
//   Output,
//   TemplateRef,
//   ViewContainerRef,
// } from '@angular/core';
// import { IMenu } from '../data/IMenu';

// @Directive({
//   selector: '[appMainworkspace]',
// })
// export class MainworkspaceDirective {
//   tabTemplates: { menu: IMenu; templateRef: TemplateRef<any> }[] = [];

//   constructor(
//     private templateRef: TemplateRef<IMenu>,
//     private viewContainer: ViewContainerRef
//   ) {}

//   @Input() directiveData: IMenu | undefined;
//   @Output() dataEmitted: EventEmitter<any> = new EventEmitter();

//   @Input() set appDynamicTabs(tabs: IMenu[]) {
//     this.viewContainer.clear();

//     tabs.forEach((tab, index) => {
//       const templateRef = this.tabTemplates.find(
//         (template) => template.menu.name === tab.name
//       )?.templateRef;
//       const viewRef = this.viewContainer.createEmbeddedView(templateRef!, {
//         $implicit: tab,
//       });
//     });
//   }

//   addTabTemplate(menu: IMenu, templateRef: TemplateRef<any>) {
//     this.tabTemplates.push({ menu, templateRef });
//   }
// }
