import React from 'react'
import '../Card.css'
const cards=[
  {id:1,tittle: "card-1",content:"content- 1"},
  {id:2,tittle: "card-2",content:"content- 2"},
  {id:3,tittle: "card-3",content:"content- 3"},
  {id:4,tittle: "card-4",content:"content- 4"},
]
function App() {
  return (
    <>
    <h1>{5*4}</h1>
      <div className='card-container'>
          {cards.map((card)=>{
            return(
              <div key={card.id} className='card'>
                <h1>{card.tittle}</h1>
                <p>{card.content}</p>
                </div>
            )
          })}
      </div>
    </>
  )
}

export default App
