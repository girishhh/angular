import {Component} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component ({
  selector: 'menus-list' ,
  templateUrl: './menus.component.html'  
})

export class AppMenus {
    private items: MenuItem[];

    ngOnInit() {
        this.items = [
                    {label: 'Setup Article'},
                    {label: 'Create Article'},
                    {label: 'Analysis'},
                    {label: 'Versions'},
                    {label: 'Social'},
                    {label: 'SEO'},
                    {label: 'Asset'},
                    {label: 'Scraps'},
                    {label: 'Notifications'}
                ];
    }
}