import React, { Component } from "react";
import EditPet from "./EditPets";

class PetCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: true
    };
  }

  editChangeHandler = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    const { name, img, type, food, notes, id } = this.props.pet;
    return this.state.edit ? (
      <div className="petsList">
        <h2>{name}</h2>
        <img src={img} alt="Pet" width="100" />
        <h3>{type}</h3>
        <p>Food {food}</p>
        <p className="notesBox">Notes: {notes}</p>
        <div className="petCardButtons">
          <button onClick={this.editChangeHandler}>Edit</button>
          <button onClick={() => this.props.deletePetHandler(id)}>Rehome</button>
        </div>
      </div>
    ) : (
      <div className="editPetsList">
        <h2>{name}</h2>
        <img src={img} alt="Pet" width="150" />
        <EditPet 
        editChangeHandler={this.editChangeHandler}
        editPet={this.props.editPet} 
        pet={this.props.pet}
        />
      </div>
    );
  }
}
export default PetCards;
