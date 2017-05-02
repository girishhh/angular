import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ReadabilityScoreHash} from '../redability-score-hash';

@Injectable()
export class ReadabilityScoreService {
    url = 'http://localhost:3000/articles/get_readability_score';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {}
    getReadabilityScore(text: string): Observable<ReadabilityScoreHash> {
        return this.http.post(this.url , {text: text} , this.headers).map(response => { return response.json().data as any; });
    }
}
