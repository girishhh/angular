import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http , Headers} from '@angular/http';

@Injectable()
export class TimeNewsService {
   private url = 'http://kre-feed_dev.kreatio.info/?q=http://feeds.bbci.co.uk/news/world/rss.xml&num=30';
   constructor(private http: Http) {}
   getArticles(): Observable<Array<any>> {
       return this.http.get(this.url).map(response => response.json().responseData.feed.entries as any);
   }
}
