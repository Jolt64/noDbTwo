import React, { Component } from 'react';
import Axios from 'axios';


class PetOFTheDay extends Component {
    constructor() {
        super()

        this.state = {
            pets: [],
            pet: [
                {
                    id: 1,
                    name: "umi",
                    type: "Dog",
                    food: "Dog Food",
                    notes: "He is a large dog",
                    img: "https://images.pexels.com/photos/159541/wildlife-photography-pet-photography-dog-animal-159541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  }
            ]
        }

    }

    updatePetOfTheDay = () => {
        let index = Math.floor(Math.random() * Math.floor(this.state.pets.length));
        this.setState({
            pet: this.state.pets[index]
        })
        setTimeout(() => {
            this.updatePetOfTheDay()
        }, 10000);
    }

    componentDidMount() {
        Axios.get('/api/allPets').then(res => {
            this.setState({
                pets: res.data
            })
            this.updatePetOfTheDay()
        }).catch(err => {
            console.log('Something is broken', err)            
        })
    }


  render() {
      const { img, type, name} = this.state.pet
    return (
        <div className="petOfTheDayDiv">
            <h2>Our pet of the moment is {name}!</h2>
            <img src={img} alt="Pet of the day" width="200"></img>
            <h2>{type}</h2>
        </div>

    );
  }
}

export default PetOFTheDay;
