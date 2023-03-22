// App.js

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [items, setItems] = useState([]);

  // Fetch all items on mount
  useEffect(() => {
    axios
      .get("/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { text, number };
    axios
      .post("/items", newItem)
      .then((res) => {
        setItems([...items, res.data]);
        setText("");
        setNumber("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          Number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.text}, {item.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;