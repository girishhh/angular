import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReadabilityScoreService{
    constructor(private http: Http){}
    url="http://localhost:3000/articles/get_readability_score";
    private headers = new Headers({'Content-Type': 'application/json'});

    getReadabilityScore(text: any): Observable<any> {
        return this.http.post(this.url,{text: text},this.headers).map(response => { return response.json().data as any} )                
    }
}