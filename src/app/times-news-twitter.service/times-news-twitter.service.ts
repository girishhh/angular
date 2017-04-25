import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TimesNewsTwitterService{
    constructor(private http: Http){}
    url= "http://kre-feed.mailfixx.com/?q=https://twitrss.me/twitter_user_to_rss/?user=kreatio_wcm";

    getLatestArticle(): Observable<any>{        
        return this.http.get(this.url).map(response=>response.json().responseData.feed.entries[0] as any);        
    }
}