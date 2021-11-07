import React from 'react'

class Pet extends React.Component {

  state = {
    isAdopted: this.props.pet.isAdopted
  }

  petGender = () => {
    if (this.props.pet.gender === "male"){
      return '♂'
    } else { return '♀'}
  }

  buttonSwitch = () => {
    if (this.state.isAdopted === true) {
      return (<button className="ui disabled button">Already adopted</button>)
    } else {
      return (<button id={this.props.pet.id} onClick={this.props.onAdoptPet} className="ui primary button">Adopt pet</button>)
    }
  }
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.petGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.buttonSwitch()}
        </div>
      </div>
    )
  }
}

export default Pet

//<button className="ui disabled button">Already adopted</button>
//<button className="ui primary button">Adopt pet</button>
