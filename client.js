const axios = require("axios");

const getAll = () => {
  return axios
    .get("http://localhost:3000/todo")
    .then(rawResponse => {
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const getOne = () => {
  return axios
    .get("http://localhost:3000/todo/0")
    .then(rawResponse => {
      console.log("Get One Data");
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const addNew = () => {
  return axios
    .post("http://localhost:3000/todo", {
      todo: "Add new todo",
      done: true
    })
    .then(rawResponse => {
      console.log("Add new todo");
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const deleteData = () => {
  return axios
    .delete("http://localhost:3000/todo/0")
    .then(rawResponse => {
      console.log("Delete data");
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const updateData = () => {
  return axios
    .put("http://localhost:3000/todo/0", {
      todo: "Update data",
      done: false
    })
    .then(rawResponse => {
      console.log(rawResponse.data);
    })
    .catch(error => {
      console.log(error);
    })
}

getAll();
getOne();
addNew();
getAll();
deleteData();
getAll();
updateData();
getAll();