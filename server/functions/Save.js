const fs = require('fs')

const Save = (movieID) =>
{
    let status = false // On définit une variable de statut pour savoir si tout s'est bien passé
    let favoritesList = fs.readFileSync('./data.json', 'utf8') // On récupère la liste des favoris
    let favorites = JSON.parse(favoritesList).favorites // On parse la liste des favoris
    const newFavorite = { id: movieID, movie: movieID } // On crée un nouvel objet film
    favorites.push(newFavorite) // On ajoute le nouveau film à la liste des favoris
    try {
        fs.writeFileSync('./data.json', JSON.stringify({ favorites }))
        status = true // Si tout s'est bien passé, on renvoie true
    } catch (error) {
        console.log(error)
        throw error // Si une erreur survient, on la renvoie
    }
    
    return status // On renvoie le statut
}

module.exports = Save;

