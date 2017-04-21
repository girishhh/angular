import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {AppMenus} from '../app/menus.component/menus.component';
import {WidgetsComponent} from '../app/widgets.component/widgets.component';
import {ArticleComponent} from '../app/article.component/article.component';
import {MenuModule,ButtonModule ,InputTextareaModule,InputTextModule,PanelModule} from 'primeng/primeng';
import {TinymceModule} from '../app/tinymc.component/tinymc.module';
import {RouterModule,Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes: Routes= [
  {path: 'create_article',component: ArticleComponent}  ,
  {path: '#',redirectTo: ''}  
];

@NgModule({
  declarations: [
    AppComponent,AppMenus,WidgetsComponent,ArticleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TinymceModule,
    PanelModule,
    BrowserAnimationsModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
