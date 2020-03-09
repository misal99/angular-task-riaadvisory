import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './pages/table.component/table.component';
import { SectionComponent } from './pages/section.component/section.component';
import { ViewComponent } from './pages/view.component/view.component';
import { CommonService } from './service/common.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    TableComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  entryComponents: [TableComponent]
})
export class AppModule { }
