alert("Welcome!");

$("button").on("click", function(){

var emotion = $(this).attr("data-emotion");

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=v93x59cMlpoYcdlbOnsLX9WjPiDFCVj0&q=" + emotion + "&limit=10&offset=0&rating=G&lang=en"


$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response){
    console.log(response);

    var results = response.data;




})













})