import {
    Component,
    OnInit,
    ElementRef,
    ViewChild, Input, AfterViewInit
}      from '@angular/core';
import {MessagingService} from "../core/messaging.service";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {AngularFireDatabase} from "angularfire2/database/database";

@Component({
    selector: 'monitor-component',
    moduleId: module.id,
    templateUrl: 'monitor.component.html'
})

/**
 * TODO:
 */
export class MonitorComponent implements OnInit {
    private box: number = 0;
    private turno: number = 0;

    items: FirebaseListObservable<any[]>;
    constructor(db: AngularFireDatabase) {
        this.items = db.list('/turnos/', {
            query: {
                orderByChild: 'status',
                equalTo: 0
            }
        });

        this.items.subscribe(data=>{
            console.log(data);
        })
    }


    ngOnInit() {

        MessagingService.listen().subscribe(data=> {
            this.box = data.box;
            this.turno = data.turno;
        });
    }


}
