import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MenuModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import {AppMenus} from '../app/menus.component/menus.component'

@NgModule({
  declarations: [
    AppComponent,AppMenus
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
