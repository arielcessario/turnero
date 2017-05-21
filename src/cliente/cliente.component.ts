import {
    Component,
    OnInit,
    ElementRef,
    ViewChild, Input, AfterViewInit
}      from '@angular/core';
import {MessagingService} from "../core/messaging.service";
import {FirebaseListObservable, AngularFireDatabase} from "angularfire2/database";

@Component({
    selector: 'cliente-component',
    moduleId: module.id,
    templateUrl: 'cliente.component.html'
})

/**
 * TODO:
 */
export class ClienteComponent implements OnInit {
    private box: number = 0;
    private turno: number = 0;

    items: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase) {
        this.items = this.db.list('/turnos', {
            query: {
                limitToLast: 1,
            }
        });

        this.items.subscribe(data=> {
            console.log(data);
            if(data.length == 1){
                this.turno = data[0].numero + 1;
            }
        });
    }


    ngOnInit() {


    }

    solicitar() {




        this.items.push({numero: this.turno, status: 0});

        MessagingService.send({turno: 1, box: 1});

    }


}
