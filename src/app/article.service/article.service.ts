import {Injectable} from '@angular/core'
import {Http,Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {ResponseHash} from '../response.hash';

@Injectable()
export class ArticleService{
    url = "http://localhost:3000/articles"
    constructor(private http: Http){}
    private headers = new Headers({'Content-Type': 'application/json'});

    create_article(form_params): Observable<ResponseHash>{        
        return this.http.post(this.url,form_params,this.headers).map(response=>response.json() as ResponseHash);
    }

}