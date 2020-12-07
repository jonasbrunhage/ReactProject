import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const PokemonView = () => {

    const [pokemonList, setPokemonList] = useState([])
    const [search, setSearch] = useState("")
    const [searchCharacters, setSearchCharacter] = useState("")
    const [searchedPokemon, setSearchedPokemon] = useState({})

    const fetchDataFromPokemonAPI = () => {

        Axios.get('https://pokeapi.co/api/v2/pokemon/')

            .then((response) => { setPokemonList(response.data) })

            .catch((error) => { console.log(error) })

    }
    const fetchDataFromPokemonSearch = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
            .then((response) => { setSearchedPokemon(response.data) })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        fetchDataFromPokemonAPI()
        return () => {
            alert("Bye bye")

        }

    }, [])

    useEffect(() => {
        fetchDataFromPokemonSearch()


    }, [search])

    return (
        <div>
            <h1>Pokemon View</h1>
            <input type="text" onChange={(event) => setSearchCharacter(event.target.value)} placeholder="Type in Pokemon name" />
            <button type="submit" onClick={() => setSearch(searchCharacters)}>Search</button>

            <img src={searchedPokemon?.sprites?.front_default} alt="error" />
            <h2>name: {searchedPokemon?.name}</h2>
            <h2>weight: {searchedPokemon?.weight} lb</h2>

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
