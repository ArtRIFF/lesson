"use strict";
const numberOfFilms=+prompt('Сколько фильмов посмотрел?');
const personalMovieDB = {
count:numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};

 const a=prompt('Последний фильм?');
 const b=prompt('На сколько оцените  фильм?');
 const c=prompt('Последний фильм?');
 const d=prompt('На сколько оцените  фильм?');

 personalMovieDB.movies[a]=b;
 personalMovieDB.movies[c]=d;
 console.log(personalMovieDB);