import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const PokemonView = () => {

    const [pokemonList, setPokemonList] = useState([])

    const fetchDataFromPokemonAPI = () => {

        Axios.get('https://pokeapi.co/api/v2/pokemon/')

            .then((response) => { setPokemonList(response.data) })

            .catch((error) => { console.log(error) })

    }
    useEffect(() => {
        fetchDataFromPokemonAPI()

    }, [])

    return (
        <div>
            <h1>Pokemon View</h1>
            <h2>Here is some examples of pokemons..</h2>
            {pokemonList?.results?.map((pokemon, index) => (
                <div key={index}>
                    <p>{pokemon.name}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}
