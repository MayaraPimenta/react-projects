import './Key.scss'

export default function Key(props) {
  return (
    <button className={`key ${props.className}`} onClick={props.getLetter}>
      {props.value}
    </button>
  )
}