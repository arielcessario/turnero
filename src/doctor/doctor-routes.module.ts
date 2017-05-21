import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DoctorComponent} from './doctor.component';

const routes: Routes = [
    {
        path: 'doctor',
        component: DoctorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DoctorRoutingModule {
}

export const routedComponents = [DoctorComponent];