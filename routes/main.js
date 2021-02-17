const { MainDTO } = require("../models");
const bd = require("../DAL/storage");

module.exports = (request, response) => {
    const model = new MainDTO("Список дел"
                            , bd.getTasks()
                            , bd.getStatuses());

    response.render("main", model);
}