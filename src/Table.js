import React , {Component} from 'react'


const TableHeader = () => {
    return (

      <thead>

        <tr>
          <th>Tipo</th>
          <th>Descricao</th>
          <th>Acao</th>

        </tr>
      </thead>
    )
  }
const TableBody = props  => {
    const rows = props.characterData.map((row, index) => {

    return (
        <tr key={index}>
        <td>{row.nome}</td>
        <td>{row.descricao}</td>
        <td>
    <button onClick={() => props.removeCharacter(index)}>Remover</button>
  </td>
      </tr>
      
      
     
    )
})
return <tbody>{rows}</tbody>

  }


  class Table extends Component {
    render() {

        const { characterData ,removeCharacter} = this.props

      return (
        <table  >
          <TableHeader />
          <TableBody  characterData={characterData}  removeCharacter = {removeCharacter}/>
        </table>
      )
    }
  }

export default Table