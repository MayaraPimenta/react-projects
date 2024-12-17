import "./Status.scss";
export default function Status(props) {
  return(
    <section className="status" style={{backgroundColor: props.backgroundColor}}>
      <h3 className="status__title">
        {props.title}
      </h3>

      <p className="status__text">
        {props.text}
      </p>
    </section>
  )
}