import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http,Headers} from '@angular/http';

@Injectable()
export class EarthQuakNewsService{
    url = "http://kre-feed.mailfixx.com/?q=https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.atom";

    constructor(private http: Http){}

    getLatestArticle(): Observable<any>{
        return this.http.get(this.url).map(response => response.json().responseData.feed.entries[0] as any);
    }
}

