import React from 'react'
import Form from './QuoteForm'

let idx = 0
const getIdx = () => ++idx

const quotes = [
  { id: getIdx(), author: 'Gabe', text: 'have fun with this' },
  { id: getIdx(), author: 'Paul', text: 'use Postman' },
  { id: getIdx(), author: 'Anne', text: 'test your endpoints' },
]

const initialState = {
  // other slices of state
  errorMessage: '',
  quotes,
  form: {
    text: '',
    author: '',
  }
}

export default class Quotes extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = initialState
  // }
  state = initialState

  destroy = evt => { // arrow syntax for "custom" functions that we build
    console.log('state', this.state)
    console.log('clicking!')
  }

  render() {  // traditional method syntax for functions that come with React
    console.log('props are', this.props)
    console.log('state is', this.state)
    // const quotes = this.state.quotes
    // const foo = this.props.foo
    const { quotes } = this.state
    const { foo } = this.props
    return (
      <div>
        <h2>Quotes: {foo}</h2>
        <ul>
          {
            quotes.map((quote) => {
              const { id, text, author} = quote
              return (
                <li className='qt' key={id}>{author} says {text} <button onClick={this.destroy}>del</button></li>
              )
            })
          }
        </ul>
        <Form />
      </div>
    )
  }
}
