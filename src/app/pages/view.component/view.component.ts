import { Component, AfterViewInit, ViewChildren, QueryList, ComponentFactoryResolver, ComponentFactory, OnInit, Input } from '@angular/core';
import { TableComponent } from '../table.component/table.component';
import { SectionComponent } from '../section.component/section.component';
import { CommonService } from '../comon.service';

@Component({
  selector: 'app-view',
  templateUrl: 'view.component.html'
})
export class ViewComponent implements AfterViewInit, OnInit {
  @ViewChildren(SectionComponent) sections: QueryList<SectionComponent>;
  activeSections: SectionComponent[];
  textComponentFactory: ComponentFactory<TableComponent>;

  initialKeys: string[];

  @Input() inputJson = {
    nodeOne: 'string',
    nodeTwo: 'Date',
    nodeThree: 'number',
    nodeFour: [
      { elementOne: 'string' },
      { elementTwo: 'number' },
      { elementThree: 'Date' },
      {
        elementFour: [
          { elementFive: 'Date' },
          { elementSix: [
            { elementSubOne: 'string' },
            { elementSubTwo: 'Date' },
            { elementSubThree: 'number' },
          ] }
        ]
      }
    ],
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: CommonService,
  ) { }

  ngOnInit() {
    this.initialKeys = Object.keys(this.inputJson);
    this.textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TableComponent);

  }

  ngAfterViewInit() {
    this.activeSections = this.sections.reduce((result, section, index) => {
      result.push(section);
      return result;
    }, []);
  }

  onAddComponentClick(data) {
    this.activeSections.forEach((section) => {
      const component = section.viewContainerRef.createComponent(this.textComponentFactory);
      component.instance.items = data.data;
      component.instance.label = data.key;
      component.instance.addComponentClick.subscribe(record => {
        this.onAddComponentClick(record);
      });
    });
  }

}
