const yargs = require("yargs");
const data = require("./data");

// Add Person
yargs.command({
  command: "add",
  describe: "Add a new person",
  builder: {
    id: { demandOption: true, type: "string" },
    fname: { demandOption: true, type: "string" },
    lname: { demandOption: true, type: "string" },
    city: { demandOption: true, type: "string" },
    age: { demandOption: true, type: "number" },
  },
  handler: (x) => {
    data.addPerson(x.id, x.fname, x.lname, x.city, x.age);
  },
});

// Delete Person by ID
yargs.command({
  command: "delete",
  describe: "Delete a person by ID",
  builder: {
    id: { demandOption: true, type: "string" },
  },
  handler: (x) => {
    data.deleteData(x.id);
  },
});

// Delete All
yargs.command({
  command: "deleteAll",
  describe: "Delete all people",
  handler: () => {
    data.deleteAll();
  },
});

// Read Person
yargs.command({
  command: "read",
  describe: "Read a person by ID",
  builder: {
    id: { demandOption: true, type: "string" },
  },
  handler: (x) => {
    data.readData(x.id);
  },
});

// List All People
yargs.command({
  command: "list",
  describe: "List all full names and cities",
  handler: () => {
    data.listData();
  },
});

yargs.parse();
