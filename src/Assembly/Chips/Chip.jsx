import './Chip.scss'

// eslint-disable-next-line no-unused-vars
export default function Chips(props) {
  return (
    <span className={`material-symbols-outlined chip ${props.className}`}>
      favorite
    </span>
  )
}