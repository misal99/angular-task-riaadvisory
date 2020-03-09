import { Component, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'section',
  template: '<ng-content></ng-content>'
})
export class SectionComponent {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
