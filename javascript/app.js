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

    for(var i=0; i < results.length; i++){
        if(results[i].rating === "G"){
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var emotionImage = $("<img>");
            emotionImage.attr("src", results[i].images.downsized_medium.url);

            gifDiv.append(p);
            gifDiv.append(emotionImage);

            $("#gifs-appear-here").prepend(gifDiv);

        }
    }

})

})