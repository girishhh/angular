import {Component} from '@angular/core';
import {TimeNewsService} from '../time-news.service/time-news.service';
import {EarthQuakNewsService} from '../earth-quak-news.service/earth-quak-news.service';
import {TimesNewsTwitterService} from '../times-news-twitter.service/times-news-twitter.service';
import {BseSensexNewsService} from '../bse-sensex-news.service/bse-sensex-news.service'


@Component({
    selector: 'widget-list',
    templateUrl: './widgets.component.html'
})

export class WidgetsComponent {       
    private lates_toi_article;
    private latest_earth_quak_article;
    private lates_times_twitter_article;
    private latest_bse_article;
    constructor(private time_news_service: TimeNewsService,private earth_quak_news_service: EarthQuakNewsService,private times_twitter_service: TimesNewsTwitterService,private bse_sensex_service: BseSensexNewsService){}

    ngOnInit(){
        this.time_news_service.getLatestArticle().subscribe(latest_article => {this.lates_toi_article = latest_article;});                
        this.earth_quak_news_service.getLatestArticle().subscribe(latest_article=>{this.latest_earth_quak_article = latest_article;});
        this.times_twitter_service.getLatestArticle().subscribe(latest_article=>{this.lates_times_twitter_article = latest_article;})
        this.bse_sensex_service.geLatestArticle().subscribe(latest_article=>{this.latest_bse_article = latest_article;})
    }
}