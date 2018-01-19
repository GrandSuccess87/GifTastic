alert("Welcome!");

$(document).ready(function(){
    
//     // Build URL
    var topics = ["happy", "sad", "scared", "surprised","shocked", "embarrassed", "lovestruck", "confident", "mischevious"];    
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


$(document).on("click", ".emotion",  function(event){

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
            emotionImage.addClass("gif");
            emotionImage.attr("src", results[i].images.fixed_width_still.url);

            gifDiv.append(p);
            gifDiv.append(emotionImage);

            $("#gifs-appear-here").prepend(gifDiv);

        }
    }

})

})


    $(".gif").on("click", function(stillandanimate){
        console.log("stillandanimate");

        var results = response.data;
        console.log(results);

        var image = $("<img>");

        var still = results[i].images.fixed_width_still.url;
        console.log(still);

        var animate = results[i].images.original.url;
        console.log(animate);

        var emotion = $(this).attr("data-name");
        console.log(emotion);

        var state = $(this).attr("data-state");
        console.log(state);

        var dataStill = $(this).attr("data-still");
        console.log(dataStill);

        var dataAnimate = $(this).attr("data-animate");
        console.log(dataAnimate);
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=v93x59cMlpoYcdlbOnsLX9WjPiDFCVj0&q=" + emotion + "&limit=10&offset=0&rating=G&lang=en"
        console.log(queryURL);        

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        .then(function(){
           
            if(state === results[i].images.fixed_width_still.url){
                $(this).attr("src", $(this).attr(animate));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr(still));
                $(this).attr("data-state", "still");

            }
        });
       
    
        });

    });



         // var still = results[i].images.original_still.url;
        // console.log(still);

        // var animate = results[i].images.original.url;
        // console.log(animate);

        // var state = $(this).attr(still);
        // console.log(state);

        // if(state === still){
        // $(this).attr("src", $(this).attr(still));
        // } else {
        // $(this).attr("src", $(this).attr(animate));
        // // $(this).attr("data-state", "still");

        // var gif = $("<img>");
        //response.data[i].images.original_still.url

        //gif.attr("src",response.data[i].images.original_still.url )

        //for (let i=0; i < response.data.length; i++){
    //     $(".gifs-container").append("<img
    //     class="gif"

    // var gif = $("<img>");
    //     gif.attr("class", "gif")
    //     gif.attr(src", response.data[i].images.original_still.url);
    //     gif.attr("data-animate", response.data[i].images.original.url}
    //     gif.attr(data-still", response.data[i].images.original_still.url}
    //     gif.attr("data-state", "still");
    
    //$(".gifs-container").append(gif);
// }   
    
    // });

    // $(".gifts-container").on("click", ".gif", function(){
    // if($(this).attr("data-state") === "still"){

    //     $(this).attr("src", $(this).attr("data-animate"))
    //     $(this).attr("src", "data-state", "animate");
    
    // }


    // })



