import React from 'react'
import Form from './QuoteForm'
import axios from 'axios'

const URL = 'http://localhost:9000/api/quotes'

const initialState = {
  successMessage: '',
  errorMessage: '',
  quotes: [],
  form: {
    textInput: '',
    authorInput: '',
  }
}

export default class Quotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
    console.log('CONSTRUCTING!')
  }
  // state = initialState

  componentDidMount() {
    this.getQuotes()
    console.log('THIS HAPPENS AFTER 1ST DOM SURGERY ONLY!')
  }

  getQuotes = () => {
    axios.get(URL)
      .then(res => {
        console.log('STATE IS ABOUT TO CHANGE')
        this.setState({
          ...this.state,
          quotes: res.data.quotes,
          successMessage: res.data.message,
        })
      })
      .catch(err => {
        console.log('Something went terrible', err)
      })
  }
  addQuote = () => {
    const newQuote = { }
  }
  capitalizeAuthor = id => {
    // PATCH
  }
  destroy = id => {
    // DELETE
  }

  changeInput = (key, value) => {
    console.log('STATE IS ABOUT TO CHANGE')
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: value },
    })
  }

  render() { // traditional method syntax for functions that come with React
    // console.log('props are', this.props)
    // console.log('state is', this.state)
    console.log('RENDERING!')
    const { quotes, form } = this.state
    const { foo } = this.props
    return (
      <div>
        <h2>Quotes: {foo}</h2>
        {this.state.successMessage}
        <ul>
          {
            quotes.map((quote) => {
              const { id, text, author } = quote
              return (
                <li className='qt' key={id}>
                  {author} says {text}
                  <button onClick={evt => this.destroy(id)}>del</button>
                  <button onClick={evt => this.capitalizeAuthor(id)}>capitalize!</button>
                </li>
              )
            })
          }
        </ul>
        <Form onChange={this.changeInput} values={form} onSubmit={this.addQuote} />
      </div>
    )
  }
}
