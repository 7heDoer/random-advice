import { Suspense, useEffect, useState } from 'react'
import './styles/App.css'
import pattern from './images/pattern-divider-desktop.svg'

function App() {
  const [advice, setAdvice] = useState({})

  const fetchFunc = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(advice => {
      setAdvice(advice.slip)
    })
  }

  useEffect(() => {
    fetchFunc()
  },[])

  const handleClick = (e) => {
    e.preventDefault()
    fetchFunc()
  }

  const load = <span className="loading">
    loading...
  </span>

  return (
    <div className="App">
      <div className="container">
          <h1 role="title" className="title">ADVICE #{advice.id}</h1>
          <blockquote role="advice" className="advice">
            "
            {advice.advice ? advice.advice: load}
            "
          </blockquote>
        <div aria-hidden className="separator">
          <img src={pattern} alt="" />
        </div>

        <div role="button container" className="button-container">
          <button 
            onClick={handleClick}
            className="load-btn"
          >
            click
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
