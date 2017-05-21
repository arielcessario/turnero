import {NgModule}            from '@angular/core';
import {ReactiveFormsModule}        from '@angular/forms';
import {BrowserModule}    from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {Routing} from './app.routes';
import {AppComponent}    from './app.component';
import {CoreModule}    from './core/core.module';
import {SharedModule}    from './shared/shared.module';
import {PaginationService} from "./core/pagination.service";
import {MonitorModule} from "./monitor/monitor.module";
import {DoctorModule} from "./doctor/doctor.module";
import {ClienteModule} from "./cliente/cliente.module";

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA0L4Giv7avaHvdlqfM1ckVpm2-w2IK4SA",
        authDomain: "turnero-71fc8.firebaseapp.com",
        databaseURL: "https://turnero-71fc8.firebaseio.com",
        projectId: "turnero-71fc8",
        storageBucket: "turnero-71fc8.appspot.com",
        messagingSenderId: "689366886189"
    }
};

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        Routing,
        SharedModule,
        CoreModule,
        MonitorModule,
        DoctorModule,
        ClienteModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PaginationService]

})
export class AppModule {
}