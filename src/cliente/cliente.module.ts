import {NgModule, Input}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {ReactiveFormsModule, FormsModule}    from '@angular/forms';

import {ClienteComponent} from './cliente.component'
import {SharedModule} from '../shared/shared.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        ClienteComponent
    ],
    exports: [ClienteComponent],
    providers: []
})
export class ClienteModule {

}