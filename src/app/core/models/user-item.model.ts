export class UserItem {
    constructor(
        public id: number = null,
        public name: string = '',
        public email: string = '',
        public active: boolean = false,
        public admin: boolean = false,
        public assignedTasksCount: number = 0,
        public completedTasksCount: number = 0
    ) {}
}
