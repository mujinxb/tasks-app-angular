export class EditUserModel {
    constructor(
        public name: string = '',
        public email: string = '',
        public password: string = '',
        public active: boolean = true,
        public admin: boolean = false
    ) { }
}
