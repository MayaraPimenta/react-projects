import './Card.css'

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === 'Online') {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={`./${props.coverImg}`} alt="cover photo" className='card-img'/>

      <section className="card-section">
        <div className="section-rating">
          <img src="./star-icon.png" alt="star" />
          <p>{props.stats.rating}</p>
          <span>({props.stats.reviewCount}) • </span>
          <span> {props.location} </span>
        </div>

        <p className="section-activity">{props.title}</p>

        <p className="section-price">
          <strong>From ${props.price} </strong>
          / person
        </p>
      </section>
    </div>
  )
}