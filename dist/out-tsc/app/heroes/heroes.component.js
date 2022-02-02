import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroesComponent = class HeroesComponent {
    constructor(heroService) {
        this.heroService = heroService;
    }
    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
};
HeroesComponent = __decorate([
    Component({
        selector: 'app-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css'],
    })
], HeroesComponent);
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map