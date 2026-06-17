let obj1 = {
  name: "Rahul"
};

let shallow = { ...obj1 };

let deep = JSON.parse(JSON.stringify(obj1));

document.write(shallow.name);
document.write("<br>");
document.write(deep.name);