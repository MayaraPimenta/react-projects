import './Header.scss'

export default function Header() {
  return(
    <header className="header">
      <h1 className="header__title">
        Assembly: Endgame
      </h1>

      <p className="header__text">
        Guess the word within 8 attempts!
      </p>
    </header>
  )
}