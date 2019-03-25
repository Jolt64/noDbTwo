
let id = 1;

let pets = [
  {
    id: id++,
    name: "Harriet",
    food: "sandwiches",
    type: "other",
    img: "https://images.pexels.com/photos/50701/eastern-water-dragon-lizard-reptile-wild-50701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    notes: ""
  },
  {
    id: id++,
    name: "umi",
    food: "Dog Food",
    type: "Dog",
    img: "https://images.pexels.com/photos/159541/wildlife-photography-pet-photography-dog-animal-159541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    notes: "He is a large dog"
  },
  {
    id: id++,
    name: "Louis",
    food: "desserts",
    type: "dog",
    img: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    notes: ""
  },
  {
    id: id++,
    name: "Louis",
    food: "desserts",
    type: "dog",
    notes: "",
    img: "https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: id++,
    name: "Giacomo",
    food: "seafood",
    type: "other",
    notes: "",
    img: "https://images.pexels.com/photos/159758/box-turtle-wildlife-animal-reptile-159758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: id++,
    name: "Lila",
    food: "cereals",
    type: "cat",
    notes: "",
    img: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: id++,
    name: "Amethyst",
    food: "pies",
    type: "dog",
    notes: "",
    img: "https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },  
  {
    id: id++,
    name: "Steve",
    food: "Bugs",
    type: "other",
    notes: "He needs a good heat lamp that will stay warm but not over heat ",
    img: "https://images.pexels.com/photos/407037/gecko-reptile-terrarium-lizard-407037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: id++,
    name: "Camden",
    food: "salads",
    type: "cat",
    img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    notes: ""
  },
  {
    id: id++,
    name: "Charlie",
    food: "desserts",
    type: "dog",
    notes: "",
    img: "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: id++,
    name: "Big Brown",
    food: "Grass and hay",
    type: "other",
    notes: "",
    img: "https://images.pexels.com/photos/209065/pexels-photo-209065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: id++,
    name: "greg",
    food: "Seeds",
    type: "other",
    notes: "A bit on the grumpy side",
    img: "https://images.pexels.com/photos/927500/pexels-photo-927500.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: id++,
    name: "Zachary",
    food: "soups",
    type: "other",
    notes: "",
    img: "https://images.pexels.com/photos/220919/pexels-photo-220919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: id++,
    name: "Sophie",
    food: "most anything",
    type: "cat",
    notes: "",
    img: "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];


module.exports = {
  allPets: (req, res) => {
    res.send(pets);
  },

  addPet: (req, res) => {
    const { name, food, type, notes, img} = req.body;

    let newPet = {
        id: id++,
        name,
        food,
        type,
        img,
        notes
    }
    pets.push(newPet);
    res.send(pets)
  },

  editPet: (req, res) => {
      const { id } = req.params
      const { name, food, type, notes, img} = req.body;
      let index = pets.findIndex(pet => +pet.id === +id)

      let updatePet = {
          id: +id,
          name: name || pets[index].name,
          food: food || pets[index].food,
          type: type || pets[index].type,
          img: img || pets[index].img,
          notes: notes + " : " + pets[index].notes
      }
      
      pets.splice(index, 1, updatePet)
      res.send(pets)
  },

  deletePet: (req, res) => {
    const { id } = req.params
    let index = pets.findIndex(pet => +pet.id === +id)
    pets.splice(index, 1 )
    res.send(pets)
  },

  getCats: (req, res) => {
      let allCats = pets.filter(pet => pet.type.toLowerCase() === 'cat')
      res.send(allCats)
  },

  getDogs: (req, res) => {
    let allDogs = pets.filter(pet => pet.type.toLowerCase() === 'dog')
    res.send(allDogs)
  },

  getOthers: (req, res) => {
    let allOthers = pets.filter(pet => pet.type.toLowerCase() === 'other')
    res.send(allOthers)
  },

  searchPetsByName: (req, res) => {
    const { name } = req.query
    let petsName = pets.filter(pet => pet.name.toLowerCase().includes(name.toLowerCase()))
    res.send(petsName)
  },

  searchPetsById: (req, res) => {
    const { id } = req.query
    let petsId = []
    if(id) {
      petsId = pets.filter(pet => pet.id == id)
    } else { petsId = pets}
    res.send(petsId)
  }
};
