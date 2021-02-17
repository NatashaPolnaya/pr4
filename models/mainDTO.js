exports.MainDTO = class {
    constructor(title, tasks, statuses, editItem){
        this.title = title || '';
        this.tasks = tasks || [];
        this.statuses = statuses || [];
        this.editItem = editItem || null;
    }
}