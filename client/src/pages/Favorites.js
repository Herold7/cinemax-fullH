import React, { useEffect, useState } from "react";
import Movies from '../components/Movies';

const Favorites = () => {
    // Ici c'est la liste des favoris
    const [favorites, setFavorites] = useState([]);
    // Ce sont les resultats de chaque tour de la boucle OMDB
    const [movies, setMovies] = useState([]);
    const API = "http://www.omdbapi.com/?apikey=e67c008d"

    /**
         * Ici on fetch l'api express avec le contenu du fichier JSON (data.json)
         * Ensuite nous mettons notre state favorites à jour avec les données de l'api
         * Attention la sturcture de base du fetch étant un tableau principal, il faut
         * cibler le contenu qui se trouve dans celui-ci (data.favorites)
         */
    const fetchFavorites = async () => {
        try {
            const response = await fetch('http://localhost:3002/api/favorites')
            const data = await response.json()
            if(data.favorites) {
                setFavorites(data.favorites)
            }
        } catch (error) {
            console.log('Une erreur est survenue lors de la récupération des favoris :' + error)
        }
    }
    
    const fetchMovies = async () => {
        const moviesArray = [] // Déclaration d'un tableau vide pour y mettre les objets "movies"
        try {
            /**
             * On initialise une boucle "for of" afin de s'assurer que chaque
             * tour de la boucle soit terminé avant de passer au suivant sans
             * problème
             */
            for (const item of favorites) {
                const response = await fetch(API + "&i=" + item.movie) // Cette fois on fetch OMDB
                const data = await response.json()
                moviesArray.push({ imdbID: data.imdbID, Title: data.Title, Poster: data.Poster })
                if (moviesArray.length > 0) { // On vérifie que le tableau n'est pas vide
                    setMovies(moviesArray) // On ajoute les données à la `const` movies
                }
            }
        } catch (error) {
            console.log('Une erreur est survenue lors de la récupération des films :' + error)
        }
    }

    // On lance la récupération des favoris dans le JSON
    useEffect(() => {
        fetchFavorites()
    }, [])

    /** 
     * On lance la récupération des films dans l'API OMDB
     * Seulement lorsque le state favorites est mis à jour
     */
    useEffect(() => {
        fetchMovies()
    }, [favorites])


    return (
        <>
            <h1>Favorites</h1>
            <div>
                <Movies movies={movies} />
            </div>
        </>
    )
}

export default Favorites;