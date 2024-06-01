import React from "react";

export default function Meme() {
    // Initialize state for meme data.
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg",
    });

    // Initialize state for storing all memes fetched from the API.
    const [allMemes, setAllMemes] = React.useState([]);

    return (
        <main>
            <form className="form">
                <input 
                    type = "text" 
                    placeholder = "Top text"
                    className = "form--input"
                />

                <input 
                    type = "text" 
                    placeholder = "Bottom text"
                    className = "form--input"
                />

                <button
                    className = "form--button"
                >
                        Get a new meme image 🖼️
                </button>
             </form>
        </main>
    )
}
