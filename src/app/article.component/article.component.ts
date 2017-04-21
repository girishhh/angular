import {Component,Input} from '@angular/core';
import {TinymceComponent} from '../tinymc.component/tinymc.component'
import { NgForm } from '@angular/forms';
import {ArticleService} from '../article.service/article.service';
import {ResponseHash} from '../response.hash'
import {Router} from '@angular/router'


@Component({    
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent{          
    constructor(private article_service: ArticleService,private router: Router){}
    private response: ResponseHash;
    private  article_status: string;

    create_article(articleform: NgForm)  {        
        this.article_service.create_article({article: articleform.value}).subscribe(response => {
            this.response=response;
            if(response.status==200){
                this.router.navigate(['article-list']);
            }
    });        
  }

  onSubmit(status: string){
      this.article_status = status;
  }


}