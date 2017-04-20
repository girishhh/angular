import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MenuModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import {AppMenus} from '../app/menus.component/menus.component';
import {WidgetsComponent} from '../app/widgets.component/widgets.component';
import {ArticleComponent} from '../app/article.component/article.component'

@NgModule({
  declarations: [
    AppComponent,AppMenus,WidgetsComponent,ArticleComponent
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
