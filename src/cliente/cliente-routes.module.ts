import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClienteComponent} from './cliente.component';

const routes: Routes = [
    {
        path: 'cliente',
        component: ClienteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule {
}

export const routedComponents = [ClienteComponent];