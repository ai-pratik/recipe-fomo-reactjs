import React,{useState} from 'react'
import "./RecipeTile.css"

export default function RecipeTile({ recipe }) {
    
    return (
        <div className="RecipeTile">    
            <a href={recipe.recipe.url} target="_blank">
            <img className="recipeTile__img" src={recipe.recipe.image} />
            </a>
            <p className="recipeTile__name"> {recipe["recipe"]["label"]}</p>
        </div>
        )
    
}
