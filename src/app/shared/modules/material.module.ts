import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDialogModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDialogModule
    ]
})
export class MaterialModule { }