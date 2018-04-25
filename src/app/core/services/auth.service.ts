import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { JwtService } from './jwt.service';
import { LoginModel } from '../../auth/login.model';
import { AuthUser } from '../auth-user.model';




@Injectable()
export class AuthService {

    constructor(private router: Router,
        private http: HttpClient,
        private apiService: ApiService,
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    login(loginModel: LoginModel): Observable<AuthUser> {

        this.resetAuth();

        return this.apiService.post('login', loginModel)
            .pipe(
                tap((user: AuthUser) => {
                    this.userService.setAuth(user);
                })
            );
    }

    logout(): void {
        this.resetAuth();
        this.router.navigate(['/login']);
    }

    isLoggedIn() {

        if (this.jwtService.isTokenExpired()) {
            this.resetAuth();
            return false;
        }

        return true;
    }


    resetAuth(): void {
        this.userService.purgeAuth();
    }

}
