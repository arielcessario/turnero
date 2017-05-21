import {Component, OnInit}      from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'nav-component',
    templateUrl: 'nav.component.html',
    moduleId: module.id
})
export class NavComponent implements OnInit {
    // hero: Hero;

    routes: string[];
    titulo: string = '';


    constructor(private router: Router) {
        this.routes = ['monitor', 'cliente', 'doctor'];

        this.router.events.subscribe(data=>{
            this.titulo = data['url'].replace('/','');
        })

    }

    isSelected(path) {
        // if(path === this.location.path()){
        //     return true;
        // }
        // else if(path.length > 0){
        //     return this.location.path().indexOf(path) > -1;
        // }
    }

    gotoDetail(link): void {
        // console.log('entra');
        // let link = ['/detail', hero.id];
        this.router.navigate([link]);
    }

    ngOnInit() {
        // (+) converts string 'id' to a number
        // let id = +this.route.snapshot.params['id'];

        // this.service.getHero(id)
        //     .then((hero: Hero) => this.hero = hero);
    }

}
