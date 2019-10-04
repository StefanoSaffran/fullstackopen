import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  
  const handleFeedback = feedback => {
    store.dispatch({
      type: feedback
    })
  }
  return (
    <div>
      <button onClick={() => handleFeedback('GOOD')}>good</button>
      <button onClick={() => handleFeedback('OK')}>neutral</button>
      <button onClick={() => handleFeedback('BAD')}>bad</button>
      <button onClick={() => handleFeedback('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)