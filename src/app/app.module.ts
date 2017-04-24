import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ArticleListComponent} from './article.list.component/article.list.component';
import {AppMenus} from '../app/menus.component/menus.component';
import {WidgetsComponent} from '../app/widgets.component/widgets.component';
import {ArticleComponent} from '../app/article.component/article.component';
import {MenuModule,ButtonModule ,InputTextareaModule,InputTextModule,PanelModule} from 'primeng/primeng';
import {TinymceModule} from '../app/tinymc.component/tinymc.module';
import {RouterModule,Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ArticleService} from './article.service/article.service';
import {TimeNewsService} from './time-news.service/time-news.service';
import {EarthQuakNewsService} from './earth-quak-news.service/earth-quak-news.service';
import {TimesNewsTwitterService} from './times-news-twitter.service/times-news-twitter.service';
import {BseSensexNewsService} from './bse-sensex-news.service/bse-sensex-news.service';

const routes: Routes= [
  {path: 'create_article',component: ArticleComponent}  ,
  {path: 'article-list',component: ArticleListComponent},
  {path: '#',redirectTo: ''},  
  {path: 'article-list/:from',component: ArticleListComponent}
];

@NgModule({
  declarations: [
    AppComponent,AppMenus,WidgetsComponent,ArticleComponent,ArticleListComponent
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
  providers: [ArticleService,TimeNewsService,EarthQuakNewsService,TimesNewsTwitterService,BseSensexNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
