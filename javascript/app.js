alert("Welcome!");

$(function () {
    
//     // Build URL
    var topics = ["happy", "sad", "scared", "surprised","shocked", "embarrassed", "lovestruck"];    
    console.log(topics);

//     //  Render buttons Function
    function renderButtons () {
        console.log("renderButtons");
        //.empty() removes all child nodes of the set of matched elements from the DOM.
        
        $("#emotion-buttons").empty(); 
            for (i=0; i < topics.length; i++) {
//             // Dynamically add a button
            var a = $("<button>");
            console.log(a);
//             
//             // Add a class
            a.addClass("emotion");
//             // Add a data-attribute with a value of the the array emotions at index i
            a.attr("data-name", topics[i]);
//             // Providing the button's text with a value of the array emotions at index i
             
             a.text(topics[i]);
//             // Add button to HTML

            $("#emotion-buttons").append(a);
    }
}

renderButtons();


$("document").on("click", ".emotion",  function(event){

var emotion = $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=v93x59cMlpoYcdlbOnsLX9WjPiDFCVj0&q=" + emotion + "&limit=10&offset=0&rating=G&lang=en"


$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response){
    console.log(response);
    console.log(queryURL);

    var results = response.data;

    for(var i=0; i < results.length; i++){
        if(results[i].rating === "g"){
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var emotionImage = $("<img>");
            emotionImage.attr("src", results[i].images.fixed_width_still.url);

            gifDiv.append(p);
            gifDiv.append(emotionImage);

            $("#gifs-appear-here").prepend(gifDiv);

        }
    }

})


})

});


