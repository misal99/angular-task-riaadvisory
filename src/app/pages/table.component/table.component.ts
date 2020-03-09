import { Component, Input, OnChanges, Output, EventEmitter, ViewChild, forwardRef } from '@angular/core';
import { ViewComponent } from '../view.component/view.component';
import { CommonService } from '../comon.service';

@Component({
  selector: 'table-view',
  templateUrl: 'table.component.html',

})
export class TableComponent {
  @Input() items: any;
  @Input() label: string;
  public disabled: boolean;
  @Output() addComponentClick = new EventEmitter();

  constructor(private service: CommonService) {}

  onClick(data, child) {
    const key = this.getKeys(child)[0];
    this.disabled = true;
    this.addComponentClick.emit({data, key});
  }

  getKeys(child) {
    const key = Object.keys(child);
    return key;
  }

}
