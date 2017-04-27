import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BseSensexNewsService{
    constructor(private http: Http){}
    url="http://kre-feed.mailfixx.com/?q=http://www.bseindia.com/data/xml/notices.xml&num=30";

    geLatestArticle(): Observable<any>{
        return this.http.get(this.url).map(response=>response.json().responseData.feed.entries as any)
    }
}