import {Injectable} from '@angular/core';
import {Observable, Observer, BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class MessagingService {
    static message: BehaviorSubject<any> = new BehaviorSubject({});

    constructor() {

    }

    static send(data) {
        console.log(data);
        MessagingService.message.next(data)
    }

    static listen() {
        let subs = MessagingService.message;
        return subs;
    }

}
