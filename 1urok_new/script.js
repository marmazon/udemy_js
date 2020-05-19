'use strict';

let numberOfFilms;

start();

const personalMovieBD = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres: [],
    privat: false
};


rememberMyFilms();
detectPersonalLevel();
showMyDB();



function start() {
   numberOfFilms = prompt("Скололько фильмов вы уже просмотрели?", "");
   while (numberOfFilms=='' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("Скололько фильмов вы уже просмотрели?", "");
   }
}

function rememberMyFilms() {
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
}

function detectPersonalLevel(){
    if(personalMovieBD.count>=0 && personalMovieBD.count<10){
        console.log("Просмотрено мало фильмов.");
    }else if(personalMovieBD.count>=10 && personalMovieBD.count<=30){
        console.log("Вы классический зритель!");
    } else if(personalMovieBD.count>30){
        console.log("Вы киноман!");}
    else{
        console.log("Ошибка");
    }
}

function showMyDB() {
    if(!personalMovieBD.privat){
        console.log(personalMovieBD);
    }
}
writeYourGenres();
function writeYourGenres() {
    for (let i=0; i<=2; i++){
        personalMovieBD.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`); 
    }
}
