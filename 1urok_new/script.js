'use strict';

let numberOfFilms;

numberOfFilms = prompt("Скололько фильмов вы уже просмотрели?");

let personalMovieBD =
{
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres: {},
    privat: false
};

for (let i = 1; i<=2; i++ ){
    const movieName = prompt("Один из последних просмотренных фильмов?");
    const movieRatingByUser = prompt("На сколько оцените его?");
    personalMovieBD.movies[movieName] = movieRatingByUser;
}