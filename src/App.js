import React , {Component} from 'react'
import Table from './Table'
import Form from './Form'


class App extends Component {

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
      }

      componentDidMount() {
        fetch('https://sanguemozapi.herokuapp.com/api/sangue')
        .then(res => res.json())
        .then((data) => {
          this.setState({ characters: data })
          console.log( "data"+ data)

        })
        .catch(console.log)
      }
    


      

    state = {
        characters : [
           
        ]

    }

    

    removeCharacter = index => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }

  render() {

    const { characters } = this.state

    return (
        <div className="container">
        <Table characterData={characters}   removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>

      </div>
    )
  }
}

export default App
