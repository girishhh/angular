import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({    
    templateUrl: './article.list.component.html'
})

export class ArticleListComponent{
    article_creation_flag: boolean;
    constructor(private route: ActivatedRoute){}

    ngOnInit(){
        this.route.params.subscribe(params=>{
            if(params['from']=="article-creation"){
                this.article_creation_flag = true;
            }else{
                this.article_creation_flag = false;
            }
        })        
    }
}