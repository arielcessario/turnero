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
    selector: 'doctor-component',
    moduleId: module.id,
    templateUrl: 'doctor.component.html'
})

/**
 * TODO:
 */
export class DoctorComponent implements OnInit {
    private box: number = 0;
    private turno: number = 0;

    items: FirebaseListObservable<any[]>;
    _items: Array<any> = [];
    selected_box: number = -1;

    constructor(db: AngularFireDatabase) {
        this.items = db.list('/box/');


        this.items.subscribe(data=> {
            this._items = data;
            this.selected_box = (localStorage.getItem('currentBox')) ? localStorage.getItem('currentBox') : -1;
        })
    }

    ngOnInit() {

    }

    updateBox(value) {

        for (var i in this._items) {
            if(!this._items[i].checked){
                this.items.update(this._items[i].$key, {'checked': false});
            }
        }

        localStorage.setItem('currentBox', value);
        this.selected_box = value;
        this.items.update(value, {'checked': true});

    }

    proximo() {
        MessagingService.send({turno: 1, box: 1});
    }


}
