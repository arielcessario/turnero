import {
    Component,
    OnInit,
    ElementRef,
    ViewChild, Input, AfterViewInit
}      from '@angular/core';
import {MessagingService} from "../core/messaging.service";

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

    constructor() {
    }


    ngOnInit() {


    }

    proximo() {
        MessagingService.send({turno: 1, box: 1});
    }


}
