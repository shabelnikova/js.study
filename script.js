
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
let movieName = prompt('Один из последних просмотренных фильмов?', '');
let movieRating = prompt('На сколько оцените его?', '');
let movieName2 = prompt('Один из последних просмотренных фильмов?', '');
let movieRating2 = prompt('На сколько оцените его?','');

personalMovieDb.movies[movieName] = movieRating;
personalMovieDb.movies[movieName2] = movieRating2;
console.log(personalMovieDb);

