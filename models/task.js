const {Identity} = require("./");

exports.Task = class Task{
    constructor(title, start, end, status){
        let dateNow = new Date().toISOString().split('T')[0];

        this.title = title || '';
        this.startDate = start || dateNow;
        this.endDate = end || dateNow;
        this.status = status || null;
        this.id = Identity.ID++;
    }        
}