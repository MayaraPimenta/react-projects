import './Card.css'
import Card from './Card.jsx'
import data from '../../../data.js'

export default function CardContainer() {
  const arr = data.map(item => {
    return <Card
      key={item.id}
      {...item}
    />
  })

  return (
    <div className="card-container">
      {arr}
    </div>
  )
}