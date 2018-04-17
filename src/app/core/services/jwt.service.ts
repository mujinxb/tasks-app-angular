import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';



const helper = new JwtHelperService();

@Injectable()
export class JwtService {

    constructor() { }

    getToken() {
        return localStorage.getItem('token');
    }

    saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    isTokenExpired() {
        const token: string = this.getToken();

        if (!token) {
            return true;
        }

        return helper.isTokenExpired(token);
    }

}
