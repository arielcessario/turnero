import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MonitorComponent} from './monitor.component';

const routes: Routes = [
    {
        path: 'monitor',
        component: MonitorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MonitorRoutingModule {
}

export const routedComponents = [MonitorComponent];