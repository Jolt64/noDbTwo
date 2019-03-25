import React, { Component } from "react";
import Welcome from "./Welcome";
import Footer from "./Footer";
import PetOFTheDay from "./PetOFTheDay";
import AddPet from "./AddPet";
import PetCards from "./PetCards";
import Axios from "axios";

class Landing extends Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      temp: "",
      description: ""
    };
  }

  componentDidMount() {
    Axios.get("/api/allPets")
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(
          `api.openweathermap.org/data/2.5/weather?lat=${
            position.coords.latitude
          }&lon=${
            position.coords.longitude
          }&APPID=01d0188d60bb41b32fbcfcccccef6d78`
        );

        Axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${
            position.coords.latitude
          }&lon=${
            position.coords.longitude
          }&APPID=01d0188d60bb41b32fbcfcccccef6d78`
        ).then(res => {
          console.log(res);
          this.setState({
            temp: ((res.data.main.temp * 9) / 5 - 459.67).toFixed(2)
          });
          this.setState({
            description: res.data.weather[0].description
          });
        });
      });
    }
  }

  addPetHandler = pet => {
    Axios.post("/api/addPet", pet)
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
  };

  editPet = (pet, id) => {
    Axios.put(`/api/editPet/${id}`, pet)
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
  };

  deletePetHandler = id => {
    Axios.delete(`/api/deletePet/${id}`)
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
  };

  getCatsHandler = () => {
    Axios.get("/api/cats")
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
  };

  getDogsHandler = () => {
    Axios.get("/api/dogs")
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
  };

  getOtherPetsHandler = () => {
    Axios.get("/api/others")
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
  };

  getAllPetsHandler = () => {
    Axios.get("/api/allPets")
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
  };

  searchByNameHandler = search => {
    Axios.get(`/api/search/name?name=${search}`)
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
  };

  searchByIdHandler = search => {
    Axios.get(`/api/search/id?id=${search}`)
      .then(res => {
        this.setState({
          pets: res.data
        });
      })
      .catch(err => {
        console.log("Something is broken", err);
      });
  };

  render() {
    let weatherDisplay = "";
    if (this.state.temp <= 45) {
      weatherDisplay = "It is too Cold for most pets outside";
    } else if (this.state.temp <= 75) {
      weatherDisplay = "It is a great day to play outside with your pet";
    }
    return (
      <div className="App">
        <header className="App-header">
          <Welcome />
        </header>
        <section>
          <div className="AddPOTDWeather">
            <AddPet addPetHandler={this.addPetHandler} />
            <PetOFTheDay />
          </div>
          <div className="petsListHeader">
            <div className="petsListHeaderDiv">
              <p>
                It is {this.state.temp} degrees and we are seeing some{" "}
                {this.state.description}
              </p>
            </div>
            <div className="petsListHeaderButtons">
              <h1>Here are some of our friends</h1>
              <div className="typeButtonsWrapper">
                <button onClick={this.getCatsHandler}>Cats</button>
                <button onClick={this.getDogsHandler}>Dogs</button>
                <button onClick={this.getOtherPetsHandler}>Other Pets</button>
                <button onClick={this.getAllPetsHandler}>All Pets</button>
              </div>
              <div className="typeButtonsWrapper">
                <p>Search</p>
                <input
                  placeholder="Search by name"
                  onChange={e => this.searchByNameHandler(e.target.value)}
                />
                <input
                type="number"
                  placeholder="Search by id"
                  onChange={e => this.searchByIdHandler(e.target.value)}
                />
              </div>
            </div>
            <div className="petsListHeaderDiv">
              <p>{weatherDisplay}</p>
            </div>
          </div>
          <div className="petsArray">
            {this.state.pets.map(pet => {
              return (
                <PetCards
                  key={pet.id}
                  pet={pet}
                  deletePetHandler={this.deletePetHandler}
                  editPet={this.editPet}
                />
              );
            })}
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Landing;
