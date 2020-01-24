import React, { Component } from 'react'


class Form extends Component {


    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
        
      }
    
    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name] : value
        })
    } 


   constructor(props){

        super(props)

        this.inialState = {

                name : '',
                job : ''
        }

        this.state = this.inialState

   }

render(){
    const { name, job } = this.state;




    return (
        <form>
          <label for="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange} />
          <label for="job">Funcao</label>
          <input
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange} />
            <input type="button" value="Enviar" onClick={this.submitForm} />

        </form>
      );

}


}
export default Form;




