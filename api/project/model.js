const db = require("../../data/dbConfig");

const getAll = async function () {
  return await db("projects");
};
const insert = async function (id) {
  const createdItem = await db("projects").insert(id);
  return await db("projects").where("resource_id", createdItem);
};

module.exports = {
  getAll,
  insert,
};
