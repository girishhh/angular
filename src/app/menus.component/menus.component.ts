import {Component} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component ({
  selector: 'menus-list' ,
  templateUrl: './menus.component.html'  
})

export class AppMenus {
    
    private items: MenuItem[];      
     private activeItem: MenuItem;       

    ngOnInit() {
        this.items = [
                    {label: 'Setup Article',routerLink: [''] },
                    {label: 'Create Article',routerLink: ['create_article']},
                    {label: 'Analysis',routerLink: ['']},
                    {label: 'Versions',routerLink: ['']},
                    {label: 'Social',routerLink: ['']},
                    {label: 'SEO',routerLink: ['']},
                    {label: 'Asset',routerLink: ['']},
                    {label: 'Scraps',routerLink: ['']},
                    {label: 'Notifications',routerLink: ['']}
                ];                
    }    
}