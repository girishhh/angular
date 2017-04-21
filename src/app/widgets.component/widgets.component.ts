import {Component} from '@angular/core';
//import {MenuItem} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
    selector: 'widget-list',
    templateUrl: './widgets.component.html'
})

export class WidgetsComponent {
    ngOnInit(){}

   // private widget_items: MenuItem[];

    // ngOnInit(){
    //     this.widget_items = [
    //                 {label: 'Readability Scores'},
    //                 {label: 'Latest Earthquak'},
    //                 {label: 'BSE Sensex'},
    //                 {label: '@Times Now Tweeter Feed'},
    //                 {label: 'Hindustan Times Top News'}                    
    //             ];
    // }
}