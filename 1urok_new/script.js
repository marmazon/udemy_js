'use strict';

const numberOfFilms = +prompt("Скололько фильмов вы уже просмотрели?", "");

const personalMovieBD = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres: [],
    privat: false
};

for (let i = 1; i<=2; i++ ){
    const movieName = prompt("Один из последних просмотренных фильмов?", "");
    if (movieName === null || movieName == "" || movieName.length>50 ){
        i--;
        continue;
    }

    const movieRatingByUser = prompt("На сколько оцените его?", "");
    if (movieRatingByUser === null || movieRatingByUser == "" || movieRatingByUser.length>50 ){
        i--;
        continue;
    }
    personalMovieBD.movies[movieName] = movieRatingByUser;
}

if(personalMovieBD.count<10){
    console.log("Просмотрено мало фильмов.");
}else if(personalMovieBD.count>=10 && personalMovieBD.count<=30){
    console.log("Вы класный зритель!");
} else {console.log("Вы киноман!");
}
