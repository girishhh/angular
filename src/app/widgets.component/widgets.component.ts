import {Component,ChangeDetectorRef,Input} from '@angular/core';
import {TimeNewsService} from '../time-news.service/time-news.service';
import {EarthQuakNewsService} from '../earth-quak-news.service/earth-quak-news.service';
import {TimesNewsTwitterService} from '../times-news-twitter.service/times-news-twitter.service';
import {BseSensexNewsService} from '../bse-sensex-news.service/bse-sensex-news.service';
import {ReadabilityScoreService} from '../readability-score.service/readability-score.service';
import {ReadabilityScoreSharedService} from '../readability-score-shared.service/readability-score-shared.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {TimerObservable} from "rxjs/observable/TimerObservable";



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
        this.readabiity_score_subscription = this.readability_shared_service.notify.subscribe((text) => {            
            this.readability_score_service.getReadabilityScore(text).subscribe(readability_score=>{this.readabilityscore = readability_score;}) 
        });        

        let timer = TimerObservable.create(0, 10000);

        timer.subscribe(t => {
            this.fetch_bse_articles();
            this.fetch_times_news_articles();
            this.fetch_earth_quik_articles();
            this.fetch_times_twitter_articles();
        });

        
    }

    fetch_times_twitter_articles(){
        this.times_twitter_service.getLatestArticle().subscribe(articles=>{this.times_twitter_articles = articles;});
    }


    fetch_earth_quik_articles(){
        this.earth_quak_news_service.getLatestArticle().subscribe(articles=>{this.earth_quak_articles=articles;});
    }


    fetch_times_news_articles(){
        this.time_news_service.getLatestArticle().subscribe(articles => {this.hindustan_news_articles = articles});                
    }

    fetch_bse_articles(){        
        this.bse_sensex_service.geLatestArticle().subscribe(articles=>{this.bse_articles=articles;});            
    }
    

     ngOnDestroy() {
        this.readabiity_score_subscription.unsubscribe();
      }    
}