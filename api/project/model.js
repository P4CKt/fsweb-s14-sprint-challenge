const db = require("../../data/dbConfig");

const getAll = async function () {
  const projects = await db("projects");
  return projects.map((item) => {
    return {
      ...item,
      project_completed: !item.project_completed ? false : true,
    };
  });
};
const insert = async function (id) {
  let createdItem = await db("projects").insert(id);
  let item = createdItem[0];
  let added = await db("projects").where("project_id", item);
  let nAdd = added[0];
  nAdd["project_completed"] = !nAdd.project_completed ? false : true;
  return nAdd;
};

module.exports = {
  getAll,
  insert,
};
