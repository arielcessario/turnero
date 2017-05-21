import {NgModule, Input}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {ReactiveFormsModule, FormsModule}    from '@angular/forms';

import {MonitorComponent} from './monitor.component'
import {SharedModule} from '../shared/shared.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        MonitorComponent
    ],
    exports: [MonitorComponent],
    providers: []
})
export class MonitorModule {

}