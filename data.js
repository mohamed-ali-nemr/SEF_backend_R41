const fs = require("fs");

const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("data1.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

const saveAllData = (allData) => {
  fs.writeFileSync("data1.json", JSON.stringify(allData));
};

const addPerson = (id, fname, lname, city, age) => {
  const allData = loadInfo();
  if (allData.find((person) => person.id === id)) {
    console.log("❌ This ID already exists.");
    return;
  }

  if (allData.length >= 10) {
    console.log("❌ You can only add 10 people.");
    return;
  }

  allData.push({ id, fname, lname, city, age });
  saveAllData(allData);
  console.log("✅ Person added successfully.");
};

const deleteData = (id) => {
  const allData = loadInfo();
  const filtered = allData.filter((person) => person.id !== id);
  if (filtered.length === allData.length) {
    console.log("❌ ID not found.");
  } else {
    saveAllData(filtered);
    console.log("✅ Person deleted.");
  }
};

const deleteAll = () => {
  saveAllData([]);
  console.log("✅ All people have been deleted.");
};

const readData = (id) => {
  const allData = loadInfo();
  const person = allData.find((p) => p.id === id);
  if (person) {
    console.log("🧾 Person Info:", person);
  } else {
    console.log("❌ ID not found.");
  }
};

const listData = () => {
  const allData = loadInfo();
  if (allData.length === 0) {
    console.log("⚠️ No data found.");
  } else {
    allData.forEach((p) => {
      console.log(`👤 ${p.fname} ${p.lname} - 🏙️ ${p.city}`);
    });
  }
};

module.exports = {
  addPerson,
  deleteData,
  deleteAll,
  readData,
  listData,
};
