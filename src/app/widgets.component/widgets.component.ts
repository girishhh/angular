import {Component,ChangeDetectorRef,Input} from '@angular/core';
import {TimeNewsService} from '../time-news.service/time-news.service';
import {EarthQuakNewsService} from '../earth-quak-news.service/earth-quak-news.service';
import {TimesNewsTwitterService} from '../times-news-twitter.service/times-news-twitter.service';
import {BseSensexNewsService} from '../bse-sensex-news.service/bse-sensex-news.service';
import {ReadabilityScoreService} from '../readability-score.service/readability-score.service';
import {ReadabilityScoreSharedService} from '../readability-score-shared.service/readability-score-shared.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'widget-list',
    templateUrl: './widgets.component.html' ,    
})

export class WidgetsComponent {       
    private hindustan_news_articles=[];
    private earth_quak_articles=[];
    private times_twitter_articles=[];
    private bse_articles=[];       
    public readabilityscore: string;      
    private readabiity_score_subscription: Subscription;    

    constructor(private readability_shared_service: ReadabilityScoreSharedService,private readability_score_service: ReadabilityScoreService,private time_news_service: TimeNewsService,private earth_quak_news_service: EarthQuakNewsService,private times_twitter_service: TimesNewsTwitterService,private bse_sensex_service: BseSensexNewsService,private change_detector: ChangeDetectorRef){        
    }

    ngOnInit(){        
        this.time_news_service.getLatestArticle().subscribe(articles => {this.hindustan_news_articles = articles});                
        this.earth_quak_news_service.getLatestArticle().subscribe(articles=>{this.earth_quak_articles=articles;});
        this.times_twitter_service.getLatestArticle().subscribe(articles=>{this.times_twitter_articles = articles;});
        this.bse_sensex_service.geLatestArticle().subscribe(articles=>{this.bse_articles=articles;});            

        this.readabiity_score_subscription = this.readability_shared_service.notifyObservable$.subscribe((text) => {            
            this.readability_score_service.getReadabilityScore(text).subscribe(readability_score=>{this.readabilityscore = readability_score;}) 
        });
    }

     ngOnDestroy() {
        this.readabiity_score_subscription.unsubscribe();
      }    
}