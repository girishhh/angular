import {Component} from '@angular/core';
import {MenuModule,MenuItem} from 'primeng/primeng';

@Component ({
  selector: 'menus-list' ,
  templateUrl: './app.menus.html'  
})

export class AppMenus {
    private items: MenuItem[];

    ngOnInit() {
        this.items = [
                    {label: 'New', icon: 'fa-plus'},
                    {label: 'Open', icon: 'fa-download'},
                    {label: 'Undo', icon: 'fa-refresh'}
                ];
    }
}