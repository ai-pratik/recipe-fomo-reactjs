import './App.css';
import './key';
import axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';
function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_ID = process.env.REACT_APP_API_ID;
  const YOUR_APP_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40&health=${healthLabel}`;

  async function getRecipes() {
    var result = await axios.get(url)
    setrecipes(result.data.hits)
    console.log(result.data)

  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
      <h1>Food FOMO 🥘 😋 Recipes By Pratik</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type="text"
          className="app__input"
          placeholder="Biryani..Apple..something else"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input type="submit" className="app__submit" value="Search" />
        <select className="app__healthlables">
          <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabel("vegetarian")}>Vegetarian</option>
          <option onClick={() => sethealthLabel("dairy-free")}>dairy-free</option>
          <option onClick={() => sethealthLabel("gluten-free")}>gluten-free</option>
          <option onClick={() => sethealthLabel("wheat-free")}>wheat-free</option>
          <option onClick={() => sethealthLabel("fat-free")}>fat-free</option>
          <option onClick={() => sethealthLabel("low-sugar")}>low-sugar</option>
          <option onClick={() => sethealthLabel("egg-free")}>egg-free</option>
          <option onClick={() => sethealthLabel("peanut-free")}>peanut-free</option>
          <option onClick={() => sethealthLabel("tree-nut-free")}>tree-nut-free</option>
          <option onClick={() => sethealthLabel("soy-free")}>soy-free</option>
          <option onClick={() => sethealthLabel("fish-free")}>fish-free</option>
          <option onClick={() => sethealthLabel("paleo")}>paleo</option>
          <option onClick={() => sethealthLabel("shellfish-free")}>shellfish-free</option>

        </select>
      </form>
      <div className="app__recipes">{recipes.map(recipe => {
        return <RecipeTile recipe={recipe} />
      })}</div>
    </div>
  );
}

export default App;

