export class Task {
    constructor(
        public id: number = null,
        public title: string = '',
        public description: string = '',
        public created_at = {},
        public updated_at = {}
    ) {}
}
