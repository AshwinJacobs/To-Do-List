// localStorage.removeItem('records');
let lists = JSON.parse(localStorage.getItem("records"))
  ? JSON.parse(localStorage.getItem("records"))
  : [];
lists.forEach((item) => {
  console.log(item.name);
  document.querySelector("#Display ").innerHTML += `
 <p><input type="checkbox">${item.name}</p>`;
});
function addRecord() {
  // e.preventDefault();
  lists.push({
    name: document.getElementById("name").value,
    // surname: document.getElementById("surname").value,
    // age: parseInt(document.getElementById("age").value),
  });

  localStorage.setItem("records", JSON.stringify(lists));
}
function deleteRecord(id) {
  if (id > -1) {
    lists.splice(id, 1);
    // After delete
    localStorage.setItem("records", JSON.stringify(lists));
  } else {
    console.log("Name was not found");
  }
}
// Load data
(function loadData() {
  console.table(lists);
})();
// loadData();
// Add Event listener
document.querySelector("#add").addEventListener("click", addRecord);
// delete record
document.querySelector("#delete").addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let index = lists.findIndex((item) => item.name === name);
  console.log(index);
  deleteRecord(index);
});
