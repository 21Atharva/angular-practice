import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { MapfilterComponent } from './mapfilter/mapfilter.component';
import { Sib1Component } from './sib1/sib1.component';
import { Sib2Component } from './sib2/sib2.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { ReversPipePipe } from './revers-pipe.pipe';
import { DynamicLoadComponent } from './dynamic-load/dynamic-load.component';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ParentComponent,
    ChildComponent,
    MapfilterComponent,
    Sib1Component,
    Sib2Component,
    ApiIntegrationComponent,
    ReversPipePipe,
    DynamicLoadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
