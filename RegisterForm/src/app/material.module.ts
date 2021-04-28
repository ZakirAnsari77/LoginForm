import {NgModule} from '@angular/core';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';

@NgModule({
    imports :[
        MatToolbarModule,
        MatButtonModule,
        MatInputModule


    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule

    ]
})
export class MaterialModule {}