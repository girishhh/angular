import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ReadabilityScoreSharedService{
    public notify = new Subject<any>();    
    constructor(){}

    public notifyOther(data: any) {
        if (data) {
            this.notify.next(data);
        }
    }
}