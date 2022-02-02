import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroDetailComponent = class HeroDetailComponent {
    constructor(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    ngOnInit() {
        this.getHero();
    }
    getHero() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }
    goBack() {
        this.location.back();
    }
};
HeroDetailComponent = __decorate([
    Component({
        selector: 'app-hero-detail',
        templateUrl: './hero-detail.component.html',
        styleUrls: ['./hero-detail.component.css']
    })
], HeroDetailComponent);
export { HeroDetailComponent };
//# sourceMappingURL=hero-detail.component.js.map