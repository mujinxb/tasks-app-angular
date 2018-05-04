export class Task {
    constructor(
        public id: number = null,
        public title: string = '',
        public description: string = '',
        public completed = null,
        public assigned_at = null,
        public completed_at = null,
        public created_at = {},
        public updated_at = {}
    ) {}
}
