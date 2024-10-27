import React ,{useState} from 'react'
import "./App.css"

const App = () => {
  const[value , setValue] = useState(0);
  return (
    <>
    <article>
      <header>COUNTER APP</header>
    </article>
    <section>
      <h1>{value}</h1>
      <div className="buttons">
        <button onClick={()=>setValue(value-1)}disabled = {value === 0}>-</button>
        <button onClick={()=>setValue(value+1)}>+</button>


      </div>
    </section>
    <footer>
      All Rights Reserved By Chalani Jayakodi
    </footer>

    </>

  )
}

export default App
