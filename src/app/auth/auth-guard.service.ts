import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRoute,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanLoad,
    Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

    constructor(
        private auth: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.isAuthenticated();
    }

    canLoad(route: Route) {
        return this.auth.isAuthenticated();
    }
}
