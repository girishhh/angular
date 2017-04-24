import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http,Headers} from '@angular/http';


@Injectable()
export class TimeNewsService{
   private api_key = "8dd8bcb1d3014845a82a7a2bb1d23d7f";
   private url = "https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=" + this.api_key;          

   constructor(private http: Http){}
   

   getLatestArticle(): Observable<any>{                              
       return this.http.get(this.url).map(response=>response.json().articles[0] as any);
   }
}