type Animal = {
  species: string;
  name: string;
  size: string;
  location: string;
  image: string;
};

abstract class AnimalTable {
  data: Animal[];
  protected containerId: string;

  constructor(data: Animal[], containerId: string) {
    this.data = data;
    this.containerId = containerId;
    this.renderTable();
  }

  abstract getNameClass(): string;

  renderTable() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    container.innerHTML = `
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Species</th>
            <th>Name <button class="btn btn-sm btn-light" onclick="sortTable('${this.containerId}', 'name')">Sort</button></th>
            <th>Size <button class="btn btn-sm btn-light" onclick="sortTable('${this.containerId}', 'size')">Sort</button></th>
            <th>Location <button class="btn btn-sm btn-light" onclick="sortTable('${this.containerId}', 'location')">Sort</button></th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${this.data
            .map(
              (animal, index) => `
            <tr>
              <td>${animal.species}</td>
              <td class="${this.getNameClass()}">${animal.name}</td>
              <td>${animal.size} ft</td>
              <td>${animal.location}</td>
              <td>
                <img src="${animal.image}" alt="${animal.name}" />
              </td>
              <td>
                <button class="btn btn-warning btn-sm" onclick="editAnimal('${this.containerId}', ${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteAnimal('${this.containerId}', ${index})">Delete</button>
              </td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  addAnimal(animal: Animal) {
    if (this.isDuplicate(animal)) {
      alert("Duplicate entry!");
      return;
    }
    this.data.push(animal);
    this.renderTable();
  }

  editAnimal(index: number, updatedAnimal: Animal) {
    this.data[index] = updatedAnimal;
    this.renderTable();
  }

  deleteAnimal(index: number) {
    this.data.splice(index, 1);
    this.renderTable();
  }

  sortTable(column: keyof Animal, descending: boolean) {
    this.data.sort((a, b) => {
      const aValue = column === "size" ? parseFloat(a[column]) : a[column].toLowerCase();
      const bValue = column === "size" ? parseFloat(b[column]) : b[column].toLowerCase();

      if (aValue < bValue) return descending ? -1 : 1;
      if (aValue > bValue) return descending ? 1 : -1;
      return 0;
    });
    this.renderTable();
  }

  isDuplicate(animal: Animal): boolean {
    return this.data.some((a) => a.name.toLowerCase() === animal.name.toLowerCase());
  }
}

class BigCatsTable extends AnimalTable {
  getNameClass(): string {
    return "bold";
  }
}

class DogsTable extends AnimalTable {
  getNameClass(): string {
    return "bold";
  }
}

class BigFishTable extends AnimalTable {
  getNameClass(): string {
    return "bold-italic-blue";
  }
}

// Data
const bigCatsData: Animal[] = [
  { species: "Big Cats", name: "Tiger", size: "10", location: "Asia", image: "./assets/images/tiger.png" },
  { species: "Big Cats", name: "Lion", size: "8", location: "Africa", image: "./assets/images/lion.png" },
  { species: "Big Cats", name: "Leopard", size: "5", location: "Africa and Asia", image: "./assets/images/leopard.png" },
  { species: "Big Cats", name: "Cheetah", size: "5", location: "Africa", image: "./assets/images/cheetah.png" },
  { species: "Big Cats", name: "Caracal", size: "3", location: "Africa", image: "./assets/images/caracal.png" },
  { species: "Big Cats", name: "Jaguar", size: "5", location: "Amazon", image: "./assets/images/jaguar.png" },
];

const dogsData: Animal[] = [
  { species: "Dog", name: "Rottweiler", size: "2", location: "Germany", image: "./assets/images/rotwailer.png" },
  { species: "Dog", name: "German Shepherd", size: "2", location: "Germany", image: "./assets/images/german_shepherd.png" },
  { species: "Dog", name: "Labrodar", size: "5", location: "UK", image: "./assets/images/labrodar.png" },
  { species: "Dog", name: "Alabai", size: "10", location: "Turkey", image: "./assets/images/alabai.png" },
];

const bigFishData: Animal[] = [
  { species: "Big Fish", name: "Humpback Whale", size: "15", location: "Atlantic Ocean", image: "./assets/images/hammerhead_shark.png" },
  { species: "Big Fish", name: "Killer Whale", size: "12", location: "Atlantic Ocean", image: "./assets/images/killer_whale.png" },
  { species: "Big Fish", name: "Tiger Shark", size: "8", location: "Ocean", image: "./assets/images/tiger_shark.png" },
  { species: "Big Fish", name: "Hammerhead Shark", size: "20", location: "Ocean", image: "./assets/images/hammerhead_shark.png" },
];

// Instantiate tables
const bigCatsTable = new BigCatsTable(bigCatsData, "big-cats-table");
const dogsTable = new DogsTable(dogsData, "dogs-table");
const bigFishTable = new BigFishTable(bigFishData, "big-fish-table");
let selectedSpecies: string | null = null;

//Dropdown handler
const speciesElem = document.getElementById("species");
speciesElem?.firstElementChild?.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementById("species_btn")) {
    document.getElementById("species_btn").innerText = "Big Cats";
  }
  selectedSpecies = "Big Cats";
});
speciesElem?.children[1]?.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementById("species_btn")) {
    document.getElementById("species_btn").innerText = "Dog";
  }
  selectedSpecies = "Dog";
});
speciesElem?.children[2]?.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementById("species_btn")) {
    document.getElementById("species_btn").innerText = "Big Fish";
  }
  selectedSpecies = "Big Fish";
});

// Form handlers
const form = document.getElementById("animal-form") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const species = selectedSpecies || "";
  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const size = (document.getElementById("size") as HTMLInputElement).value.trim();
  const location = (document.getElementById("location") as HTMLInputElement).value.trim();
  const image = species === "Big Cats" ? "./assets/images/tiger.png" : species === "Dog" ? "./assets/images/rotwailer.png" : "./assets/images/hammerhead_shark.png";

  const newAnimal: Animal = { species, name, size, location, image };

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
  if (document.getElementById("species_btn")) {
    document.getElementById("species_btn").innerText = "Select a Specie";
  }
  form.reset();
});

// Global handlers
(window as any).editAnimal = (containerId: string, index: number) => {
  const tableMap: { [key: string]: AnimalTable } = {
    "big-cats-table": bigCatsTable,
    "dogs-table": dogsTable,
    "big-fish-table": bigFishTable,
  };
  const table = tableMap[containerId];
  if (!table) return;

  const animal = table.data[index];
  (document.getElementById("species") as HTMLInputElement).value = animal.species;
  (document.getElementById("name") as HTMLInputElement).value = animal.name;
  (document.getElementById("size") as HTMLInputElement).value = animal.size;
  (document.getElementById("location") as HTMLInputElement).value = animal.location;

  table.deleteAnimal(index);
};

(window as any).deleteAnimal = (containerId: string, index: number) => {
  const tableMap: { [key: string]: AnimalTable } = {
    "big-cats-table": bigCatsTable,
    "dogs-table": dogsTable,
    "big-fish-table": bigFishTable,
  };
  const table = tableMap[containerId];
  if (table) table.deleteAnimal(index);
};

(window as any).sortTable = (containerId: string, column: keyof Animal) => {
  const tableMap: { [key: string]: AnimalTable } = {
    "big-cats-table": bigCatsTable,
    "dogs-table": dogsTable,
    "big-fish-table": bigFishTable,
  };
  const table = tableMap[containerId];
  if (table) table.sortTable(column, false);
};
