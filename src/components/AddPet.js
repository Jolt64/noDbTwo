import React, { Component } from "react";

class AddPet extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      type: "",
      food: "",
      notes: "",
      img: ""
    };
  }

  handleChange(e, name) {
    this.setState({
      [name]: e.target.value
    });
  }

  handleClick = () => {
    const { name, type, food, notes, img } = this.state;

    let holder = { name, type, food, notes, img };
    this.props.addPetHandler(holder);
  };

  render() {
    return (
      <div className="newPetInputs">
        <select
          value={this.state.type}
          onChange={e => this.handleChange(e, "type")}
        >
          <option value="No thing">. Type .</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Name"
          onChange={e => this.handleChange(e, "name")}
        />
        <input
          type="text"
          placeholder="Food"
          onChange={e => this.handleChange(e, "food")}
        />
        <input
          type="text"
          placeholder="Image"
          onChange={e => this.handleChange(e, "img")}
        />
        <textarea
          className="textArea1"
          type="text"
          placeholder="Notes"
          onChange={e => this.handleChange(e, "notes")}
        />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default AddPet;
