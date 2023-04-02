const db = require("../../data/dbConfig");

const getAll = async function () {
  const tasksAll = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description");
  return tasksAll.map((item) => {
    delete item.project_id;
    return {
      ...item,
      task_completed: item.task_completed === 1,
    };
  });
};
const insert = async function (id) {
  let createdItem = await db("tasks").insert(id);
  let item = createdItem[0];
  let added = await db("tasks").where("task_id", item);
  let nAdd = added[0];
  nAdd["task_completed"] = nAdd.task_completed === 1;
  return nAdd;
};
module.exports = {
  getAll,
  insert,
};
