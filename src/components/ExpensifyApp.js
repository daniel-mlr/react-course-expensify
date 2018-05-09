/* eslint react/prop-types: 0 */
import React, {Component} from 'react'

class ExpensifyApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleCloseModal = () => {
    this.setState(() => ({selectedOption: undefined }))
  }
  handleAddOption = (option) => {
    // quelques validations
    if (!option) {
      return 'enter valid value to add item'
    } else if ( this.state.options.indexOf(option) > -1 ) {
      return 'this option already exists'
    }
    // ajout de la nouvelle option
    this.setState((prevState) => ({ options: prevState.options.concat(option)}))
  }

  handleDeleteOptions = () => this.setState( () => ({options: []}))

  handleDeleteOption = (optionToBeRemoved) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToBeRemoved !== option )
    }))
  }

  handlePick = () => {
    const randomIx = Math.floor(Math.random() * this.state.options.length)
    // alert(this.state.options[randomIx])
    this.setState(() => ({selectedOption: this.state.options[randomIx]}))
  }

  /* life-cycle méthodes */
  componentDidMount() {
    // ('component est monté, aller chercher le data')
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) { // au cas où json serait null (on veut '' qui est le défaut)
        this.setState(() => ({ options }))
      }
    } catch(e) {
      // do nothing
      // i.e. on utilise json seulement si le data est valide
    }

  }
  componentDidUpdate(prevProps, prevState) {
    // on vérifie si les données sont changées, car la sauvegarde
    // peut faire appel à une db externe, ce qui est très couteux.
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  render() {
    return (
      <div>
        <div className="container">
        </div>
      </div>
    )
  }
}
export default ExpensifyApp
