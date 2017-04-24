import {Component} from '@angular/core';
import {TimeNewsService} from '../time-news.service/time-news.service';
import {EarthQuakNewsService} from '../earth-quak-news.service/earth-quak-news.service'


@Component({
    selector: 'widget-list',
    templateUrl: './widgets.component.html'
})

export class WidgetsComponent {       
    private lates_toi_article;
    private latest_earth_quak_article;
    constructor(private time_news_service: TimeNewsService,private earth_quak_news_service: EarthQuakNewsService){}

    ngOnInit(){
        this.time_news_service.getLatestArticle().subscribe(latest_article => {this.lates_toi_article = latest_article;});                
        this.earth_quak_news_service.getLatestArticle().subscribe(latest_article=>{this.latest_earth_quak_article = latest_article});
    }
}