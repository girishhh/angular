import {Component , Input} from '@angular/core';
import {TinymceComponent} from '../tinymc.component/tinymc.component';
import { NgForm } from '@angular/forms';
import {ArticleService} from '../article.service/article.service';
import {ArticleCreateResponseHash} from '../article-create-response.hash';
import {Router} from '@angular/router';
import {ReadabilityScoreService} from '../readability-score.service/readability-score.service';
import {WidgetsComponent} from '../widgets.component/widgets.component';
import {ReadabilityScoreSharedService} from '../readability-score-shared.service/readability-score-shared.service';


@Component({
    templateUrl: './article.component.html',
    styleUrls: ['../../assets/styles/form.css']
})

export class ArticleComponent {
    private response: ArticleCreateResponseHash;
    private  article_status: string;
    constructor(private readability_shared_service: ReadabilityScoreSharedService,
    private readability_score_service: ReadabilityScoreService,
    private article_service: ArticleService,
    private router: Router) {}

    create_article(articleform: NgForm)  {
        if (articleform.form.valid) {
            this.article_service.create_article({article: Object.assign(articleform.value , {status: this.article_status} )}).
            subscribe(response => {
                this.response = response;
                if (response.status === 200) {
                    this.router.navigate(['article-list' , 'article-creation']);
                }
            });
        }
  }

  onSubmit(status: string) {
      this.article_status = status;
  }

  get_readability_scores(text) {
    this.readability_shared_service.notifyOther(text);
  }
}
