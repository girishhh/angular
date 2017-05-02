import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ArticleCreateResponseHash} from '../article-create-response.hash';

@Injectable()
export class ArticleService {
    private url = 'http://localhost:3000/articles';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {}

    create_article(form_params): Observable<ArticleCreateResponseHash> {
        return this.http.post(this.url , form_params , this.headers).map(response => response.json() as ArticleCreateResponseHash);
    }
}
