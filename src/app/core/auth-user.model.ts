export class AuthUser {

    constructor(
        public id: number = null,
        public name: string = '',
        public token: string = '',
        public isAuthenticated: boolean = false,
        public isAdmin: boolean = false
    ) {}
}
