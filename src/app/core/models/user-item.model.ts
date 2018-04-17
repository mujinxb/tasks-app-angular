export class UserItem {
    constructor(
        public id: number = null,
        public name: string = '',
        public active: boolean = false,
        public assignedTasks: number = 0,
        public completedTasks: number = 0
    ) {}
}
