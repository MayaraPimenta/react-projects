import "./Form.css";
import { useState, useEffect } from "react";

export default function Meme() {
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => {
      return response.json();
    })
    .then(data => {
      setAllMemes(data.data.memes)
    })
    .catch(error => {
      console.error("Erro ao buscar dados:", error);
    });
  }, [])

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  });
  
  const [allMemes, setAllMemes] = useState([]);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length)
    
    setMeme(prevMeme => ({...prevMeme, randomImage: allMemes[randomIndex].url}));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <form className="form">
        <div>
          <label>
            Top Text
            <input
              type="text"
              placeholder="Top text"
              className="form--input"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Bottom Text
            <input
              type="text"
              placeholder="Bottom text"
              className="form--input"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="form--button" onClick={getMemeImage} type="button">
          Get a new meme image 🖼
        </button>
      </form>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
