import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling face with smiling eyes",
  "😂": "face with tears of joy",
  "😍": "heart eyes",
  "😁": "grinning face with smiling eyes",
  "😎": "smiling face with sunglasses",
  "😢": "crying face emoji",
  "😜": "winking face with tongue",
  "😘": "face blowing a kiss",
  "😒": "unamused face",
  "😃": "grinning face with big eyes",
  "🤔": "thinking face",
  "🤢": "nauseated face",
  "🙂": "slightly smiling face",
  "🤨": "face with raised eyebrow",
  "😗": "kissing face",
  "😐": "neutral face",
  "🙄": "face with rolling eyes",
  "😔": "pensive face",
  "⌚": "watch",
  "🍇": "grapes",
  "🍊": "tangerine",
  "🍑": "peach",
  "💫": "dizzy",
  "🏕️": "camping",
  "🏜️": "desert",
  "🗺️": "world map",
  "🛢️": "oil drum",
  "🛎️": "bellhop bell",
  "♨️": "hot springs"
};

const emojiDictionary2 = {
  "😊": "smiling face with smiling eyes",
  "🍇": "grapes",
  "😍": "heart eyes",
  "🍊": "tangerine",
  "🍑": "peach",
  "😢": "crying face emoji",
  "😜": "winking face with tongue",
  "😘": "face blowing a kiss",
  "😒": "unamused face",
  "🛢️": "oil drum",
  "🛎️": "bellhop bell",
  "♨️": "hot springs",
  "🙂": "slightly smiling face",
  "🤨": "face with raised eyebrow",
  "💫": "dizzy",
  "🏕️": "camping",
  "🏜️": "desert",
  "🗺️": "world map",
  "⌚": "watch"
};

const emojiList2 = Object.keys(emojiDictionary2);

export default function App() {
  const [message, setMessage] = useState("");
  function inputChangeHandler(event) {
    let userInput = event.target.value;
    if (emojiDictionary[userInput] === "") {
      setMessage("");
    } else if (emojiDictionary[userInput] === undefined) {
      setMessage("Sorry this emoji is not in our database");
    } else {
      setMessage(emojiDictionary[userInput]);
    }
  }

  function emojiClickHandler(item) {
    setMessage(emojiDictionary[item]);
  }
  return (
    <div className="App">
      <h1> Emoji Interpreter </h1>
      <input
        placeholder="Enter an emoji"
        style={{ padding: "0.5rem", fontSize: "1rem", width: "60%" }}
        onChange={inputChangeHandler}
      />
      <h3>{message}</h3>
      <div style={{ width: "60%", margin: "auto", marginTop: "1rem" }}>
        {emojiList2.map((value) => {
          return (
            <span
              style={{ padding: "0.5rem", fontSize: "2rem" }}
              onClick={() => emojiClickHandler(value)}
            >
              {value}
            </span>
          );
        })}
      </div>
    </div>
  );
}
