import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatMenuModule
    ]
})

export class MaterialModule { }