import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TimesNewsTwitterService {
    private url = 'http://kre-feed.mailfixx.com/?q=https://twitrss.me/twitter_user_to_rss/?user=kreatio_wcm&num=30';
    constructor(private http: Http) {}
    getArticles(): Observable<Array<any>> {
        return this.http.get(this.url).map(response => response.json().responseData.feed.entries as any);
    }
}
