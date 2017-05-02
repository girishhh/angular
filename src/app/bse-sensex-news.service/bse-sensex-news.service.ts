import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BseSensexNewsService {
    private url = 'http://kre-feed.mailfixx.com/?q=http://www.bseindia.com/data/xml/notices.xml&num=30';
    constructor(private http: Http) {}

    getArticles(): Observable<Array<any>> {
        return this.http.get(this.url).map(response => response.json().responseData.feed.entries as any);
    }
}
