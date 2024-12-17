import './Letter.scss'

export default function Letter(props) {
  return (
    <span className="letter">
      {props.value}
    </span>
  )
}