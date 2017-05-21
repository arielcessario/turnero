import { Component, OnInit } from '@angular/core';

import { FireFactoryService } from './providers/fire.provider';
import {AngularFireDatabase} from "angularfire2/database";


// import { FireCacheProvider } from './fire.provider';


@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	moduleId: module.id,
	// providers: [FireFactoryService]
})
export class AppComponent implements OnInit {

	ngOnInit() {
	}

	constructor(af: AngularFireDatabase) {

		FireFactoryService.init(af);

		}


	}

