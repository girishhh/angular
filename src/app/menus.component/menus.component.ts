import {Component , OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component ({
  selector: 'app-menus-list' ,
  templateUrl: './menus.component.html'  ,
  styleUrls: ['./menus.component.css']
})

export class AppMenusComponent implements OnInit {private menu_items: any;
ngOnInit() {
        this.menu_items = [
                    {name: 'Setup Article' , route: '#'},
                    {name: 'Create Article' , route: 'create_article'},
                    {name: 'Analysis' , route: '#'},
                    {name: 'Versions' , route: '#'},
                    {name: 'Social' , route: '#'},
                    {name: 'SEO' , route: '#'},
                    {name: 'Asset' , route: '#'},
                    {name: 'Scraps' , route: '#'},
                    {name: 'Notifications' , route: '#'}
                ];
    }
}
