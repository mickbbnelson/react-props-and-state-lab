import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updateFilter = (event) => {
    this.setState({filters: {
      type: event.target.value
    }
    })
  }

  findPets = () => {
    if (this.state.filters.type === "all") {
    fetch("/api/pets")
    .then(r => r.json())
    .then(data => this.setState({
      pets: data
    }))
  } else if (this.state.filters.type === "cat") {
    fetch("/api/pets?type=cat")
    .then(r => r.json())
    .then(data => this.setState({
      pets: data
    }))
  } else if (this.state.filters.type === "dog") {
    fetch("/api/pets?type=dog")
    .then(r => r.json())
    .then(data => this.setState({
      pets: data
    }))
  } else if (this.state.filters.type === "micropig") {
    fetch("/api/pets?type=micropig")
    .then(r => r.json())
    .then(data => this.setState({
      pets: data
    }))
  }
}

onAdoptPet = (e) => {
  const foundPet = this.state.pets.find((pet) => 
    {
      if (pet.id === e.target.id) {
      return pet
    }})
  foundPet.isAdopted = true
}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateFilter} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
