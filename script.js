


// top News articles in the US//
var newsUrl ="http://newsapi.org/v2/top-headlines?country=us&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
$.ajax({
    url: newsUrl,
    method: "GET"
  }).then(function (response) {
      console.log(response);

  });



//news about the covid-19//
var covidNews= "http://newsapi.org/v2/everything?q=covid19&apiKey=d775fffd012c44ec8001a6ace97e7e1f";
$.ajax({
    url: covidNews,
    method: "GET"
  }).then(function (response) {
      console.log(response);

  });




//seattle news//
var localNews="http://newsapi.org/v2/everything?q=Seattle&apiKey=d775fffd012c44ec8001a6ace97e7e1f";


 
  $.ajax({
    url: localNews,
    method: "GET"
  }).then(function (response) {
      console.log(response);

  });





var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=AexBs82F271plW5NYllpAgocdxd0Q2Dw"

   $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response)
    });

    //meant to be user inputs
var ingredientOne = "banana"; 
var ingredientTwo = "tomato";
var ingredientThree = "milk";
var movie = 'titanic';

var queryURLmovie = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy"
var queryURLrecipes = "https://api.edamam.com/search?q=" + ingredientOne + "," + ingredientTwo + "," + ingredientThree + "&app_id=e051d977&app_key=8185235f4070e8bff9a51c85891e2ca1&from=0&to=3&calories=591-722&health=alcohol-free"



    $.ajax({
        url: queryURLrecipes, //recipe ajax
        method: "GET"
    }).then(function (response){
        console.log(response)
        console.log(response.hits[0].recipe.label); //find name of recipe
        console.log(response.hits[0].recipe.url); //goes to the recipe site
        console.log(response.hits[0].recipe.healthLabels) //health facts like nut free, vegan, etc.
    });


$.ajax({
        url: queryURLmovie, //movie ajax
        method: "GET"
    }).then(function (response){
        console.log(response.Title); //grabs title
        console.log(response.Rated); // grabs rating
        console.log(response.Plot); // grabs plot
    });

    
