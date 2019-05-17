import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { ControllerComponent } from './controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    TableComponent,
    ModalComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
