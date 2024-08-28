import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './core/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
