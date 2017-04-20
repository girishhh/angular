import { NgModule } from '@angular/core';

import { TinymceComponent } from './tinymc.component';

/**
 * TinymceModule
 */
@NgModule({
    declarations: [
        TinymceComponent,
    ],
    exports: [
        TinymceComponent,
    ]
})
export class TinymceModule { }