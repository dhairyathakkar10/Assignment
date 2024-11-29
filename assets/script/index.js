var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b, _c;
var AnimalTable = /** @class */ (function () {
    function AnimalTable(data, containerId) {
        this.data = data;
        this.containerId = containerId;
        this.renderTable();
    }
    AnimalTable.prototype.renderTable = function () {
        var _this = this;
        var container = document.getElementById(this.containerId);
        if (!container)
            return;
        container.innerHTML = "\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Species</th>\n            <th>Name <button class=\"btn btn-sm btn-light\" onclick=\"sortTable('".concat(this.containerId, "', 'name')\">Sort</button></th>\n            <th>Size <button class=\"btn btn-sm btn-light\" onclick=\"sortTable('").concat(this.containerId, "', 'size')\">Sort</button></th>\n            <th>Location <button class=\"btn btn-sm btn-light\" onclick=\"sortTable('").concat(this.containerId, "', 'location')\">Sort</button></th>\n            <th>Image</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          ").concat(this.data
            .map(function (animal, index) { return "\n            <tr>\n              <td>".concat(animal.species, "</td>\n              <td class=\"").concat(_this.getNameClass(), "\">").concat(animal.name, "</td>\n              <td>").concat(animal.size, " ft</td>\n              <td>").concat(animal.location, "</td>\n              <td>\n                <img src=\"").concat(animal.image, "\" alt=\"").concat(animal.name, "\" />\n              </td>\n              <td>\n                <button class=\"btn btn-warning btn-sm\" onclick=\"editAnimal('").concat(_this.containerId, "', ").concat(index, ")\">Edit</button>\n                <button class=\"btn btn-danger btn-sm\" onclick=\"deleteAnimal('").concat(_this.containerId, "', ").concat(index, ")\">Delete</button>\n              </td>\n            </tr>\n          "); })
            .join(""), "\n        </tbody>\n      </table>\n    ");
    };
    AnimalTable.prototype.addAnimal = function (animal) {
        if (this.isDuplicate(animal)) {
            alert("Duplicate entry!");
            return;
        }
        this.data.push(animal);
        this.renderTable();
    };
    AnimalTable.prototype.editAnimal = function (index, updatedAnimal) {
        this.data[index] = updatedAnimal;
        this.renderTable();
    };
    AnimalTable.prototype.deleteAnimal = function (index) {
        this.data.splice(index, 1);
        this.renderTable();
    };
    AnimalTable.prototype.sortTable = function (column, descending) {
        this.data.sort(function (a, b) {
            var aValue = column === "size" ? parseFloat(a[column]) : a[column].toLowerCase();
            var bValue = column === "size" ? parseFloat(b[column]) : b[column].toLowerCase();
            if (aValue < bValue)
                return descending ? -1 : 1;
            if (aValue > bValue)
                return descending ? 1 : -1;
            return 0;
        });
        this.renderTable();
    };
    AnimalTable.prototype.isDuplicate = function (animal) {
        return this.data.some(function (a) { return a.name.toLowerCase() === animal.name.toLowerCase(); });
    };
    return AnimalTable;
}());
var BigCatsTable = /** @class */ (function (_super) {
    __extends(BigCatsTable, _super);
    function BigCatsTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BigCatsTable.prototype.getNameClass = function () {
        return "";
    };
    return BigCatsTable;
}(AnimalTable));
var DogsTable = /** @class */ (function (_super) {
    __extends(DogsTable, _super);
    function DogsTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogsTable.prototype.getNameClass = function () {
        return "bold";
    };
    return DogsTable;
}(AnimalTable));
var BigFishTable = /** @class */ (function (_super) {
    __extends(BigFishTable, _super);
    function BigFishTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BigFishTable.prototype.getNameClass = function () {
        return "bold-italic-blue";
    };
    return BigFishTable;
}(AnimalTable));
// Data
var bigCatsData = [
    { species: "Big Cats", name: "Tiger", size: "10", location: "Asia", image: "./assets/images/tiger.png" },
    { species: "Big Cats", name: "Lion", size: "8", location: "Africa", image: "./assets/images/lion.png" },
    { species: "Big Cats", name: "Leopard", size: "5", location: "Africa and Asia", image: "./assets/images/leopard.png" },
    { species: "Big Cats", name: "Cheetah", size: "5", location: "Africa", image: "./assets/images/cheetah.png" },
    { species: "Big Cats", name: "Caracal", size: "3", location: "Africa", image: "./assets/images/caracal.png" },
    { species: "Big Cats", name: "Jaguar", size: "5", location: "Amazon", image: "./assets/images/jaguar.png" },
];
var dogsData = [
    { species: "Dog", name: "Rottweiler", size: "2", location: "Germany", image: "./assets/images/rotwailer.png" },
    { species: "Dog", name: "German Shepherd", size: "2", location: "Germany", image: "./assets/images/german_shepherd.png" },
    { species: "Dog", name: "Labrodar", size: "5", location: "UK", image: "./assets/images/labrodar.png" },
    { species: "Dog", name: "Alabai", size: "10", location: "Turkey", image: "./assets/images/alabai.png" },
];
var bigFishData = [
    { species: "Big Fish", name: "Humpback Whale", size: "15", location: "Atlantic Ocean", image: "./assets/images/humpback_whale.png" },
    { species: "Big Fish", name: "Killer Whale", size: "12", location: "Atlantic Ocean", image: "./assets/images/killer_whale.png" },
    { species: "Big Fish", name: "Tiger Shark", size: "8", location: "Ocean", image: "./assets/images/tiger_shark.png" },
    { species: "Big Fish", name: "Hammerhead Shark", size: "20", location: "Ocean", image: "./assets/images/hammerhead_shark.png" },
];
// Instantiate tables
var bigCatsTable = new BigCatsTable(bigCatsData, "big-cats-table");
var dogsTable = new DogsTable(dogsData, "dogs-table");
var bigFishTable = new BigFishTable(bigFishData, "big-fish-table");
var selectedSpecies = null;
//Dropdown handler
var speciesElem = document.getElementById("species");
var dropdownBtn = document.getElementById("species_btn");
(_a = speciesElem === null || speciesElem === void 0 ? void 0 : speciesElem.firstElementChild) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    if (!dropdownBtn)
        return;
    dropdownBtn.innerText = "Big Cats";
    selectedSpecies = "Big Cats";
});
(_b = speciesElem === null || speciesElem === void 0 ? void 0 : speciesElem.children[1]) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (e) {
    e.preventDefault();
    if (!dropdownBtn)
        return;
    dropdownBtn.innerText = "Dog";
    selectedSpecies = "Dog";
});
(_c = speciesElem === null || speciesElem === void 0 ? void 0 : speciesElem.children[2]) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (e) {
    e.preventDefault();
    if (!dropdownBtn)
        return;
    dropdownBtn.innerText = "Big Fish";
    selectedSpecies = "Big Fish";
});
// Form handlers
var form = document.getElementById("animal-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var species = selectedSpecies || "";
    var name = document.getElementById("name").value.trim();
    var size = document.getElementById("size").value.trim();
    var location = document.getElementById("location").value.trim();
    var image = species === "Big Cats" ? "./assets/images/tiger.png" : species === "Dog" ? "./assets/images/rotwailer.png" : "./assets/images/humpback_whale.png";
    var newAnimal = { species: species, name: name, size: size, location: location, image: image };
    switch (species.toLowerCase()) {
        case "big cats":
            bigCatsTable.addAnimal(newAnimal);
            break;
        case "dog":
            dogsTable.addAnimal(newAnimal);
            break;
        case "big fish":
            bigFishTable.addAnimal(newAnimal);
            break;
        default:
            alert("Unknown species! Please use 'Big Cats', 'Dog', or 'Big Fish'");
    }
    var dropdownBtn = document.getElementById("species_btn");
    if (!dropdownBtn)
        return;
    dropdownBtn.innerText = "Select a Specie";
    form.reset();
});
// Global handlers
window.editAnimal = function (containerId, index) {
    var tableMap = {
        "big-cats-table": bigCatsTable,
        "dogs-table": dogsTable,
        "big-fish-table": bigFishTable
    };
    var table = tableMap[containerId];
    if (!table)
        return;
    var animal = table.data[index];
    document.getElementById("species").value = animal.species;
    document.getElementById("name").value = animal.name;
    document.getElementById("size").value = animal.size;
    document.getElementById("location").value = animal.location;
    table.deleteAnimal(index);
};
window.deleteAnimal = function (containerId, index) {
    var tableMap = {
        "big-cats-table": bigCatsTable,
        "dogs-table": dogsTable,
        "big-fish-table": bigFishTable
    };
    var table = tableMap[containerId];
    if (table)
        table.deleteAnimal(index);
};
window.sortTable = function (containerId, column) {
    var tableMap = {
        "big-cats-table": bigCatsTable,
        "dogs-table": dogsTable,
        "big-fish-table": bigFishTable
    };
    var table = tableMap[containerId];
    if (table)
        table.sortTable(column, false);
};
