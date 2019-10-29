export let movies = [
    {
        id: 0,
        name: "Avengers: Endgame",
        score: 95
       
    },
    {
        id: 1,
        name: "Joker",
        score: 94

    },
    {
        id: 2,
        name: "parasite",
        score: 99     
    },
    {
        id: 3,
        name: "SpiderMan: Home Comming",
        score: 79       
    },
];

export const getMovies = () => movies;

export const getById = id => {
    const filtermovies = movies.filter(movie => movie.id === id);
    return filtermovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}