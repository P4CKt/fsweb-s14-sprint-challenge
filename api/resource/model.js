// `Resource` modeli buraya
const db = require("../../data/dbConfig");

const getAll = async function () {
  return await db("resources");
};
const insert = async function (id) {
  const createdItemId = await db("resources").insert(id);
  const added = await db("resources").where("resource_id", createdItemId[0]);
  return added[0];
};

module.exports = {
  getAll,
  insert,
};
