import './Die.css'

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }
  
  return (
    <button
      className="die"
      style={styles}
      onClick={props.hold}
    >
      <p className="die__content">
        {props.value}
      </p>
    </button>
  )
}