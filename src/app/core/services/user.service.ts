import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { AuthUser } from '../auth-user.model';

@Injectable()
export class UserService {

    user: AuthUser = new AuthUser();

    constructor(private apiService: ApiService, private jwtService: JwtService) {
        this.populate();
    }


    populate() {

        if (this.jwtService.isTokenExpired()) {
            this.purgeAuth();
            return;
        }

        const auth: AuthUser = JSON.parse(localStorage.getItem('user'));
        if (auth) {
            this.user = auth;
        } else {
            this.purgeAuth();
        }
    }

    setAuth(auth: AuthUser) {
        this.user = auth;
        this.jwtService.saveToken(auth.token);
        localStorage.setItem('user', JSON.stringify(auth));
    }

    purgeAuth() {
        this.user = new AuthUser();
        this.jwtService.removeToken();
        localStorage.removeItem('user');
    }

}
