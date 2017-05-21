import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MonitorComponent} from "./monitor/monitor.component";
import {DoctorComponent} from "./doctor/doctor.component";
import {ClienteComponent} from "./cliente/cliente.component";

// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'monitor', component: MonitorComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'cliente', component: ClienteComponent },
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class Routing {
}
// export const routedComponents = [MonedaComponent];