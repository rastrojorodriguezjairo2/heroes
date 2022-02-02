import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { of } from 'rxjs';
let HeroService = class HeroService {
    getHeroes() {
        return of(HEROES);
    }
    getHero(id) {
        return of(HEROES.find(hero => hero.id === id));
    }
    constructor() {
    }
};
HeroService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], HeroService);
export { HeroService };
//# sourceMappingURL=hero.service.js.map