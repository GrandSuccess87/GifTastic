$(document).ready(function(){
    
    // Build URL
    var topics = ["HAPPY", "SCARED", "SAD", "SHY","ANXIOUS", "EMBARRASSED", "LONELY", "CONFIDENT", "MISCHEVIOUS"];    
    console.log(topics);

    //  Render buttons Function
    function renderButtons () {
        console.log("renderButtons");

        //.empty() removes all child nodes of the set of matched elements from the DOM.
        $("#emotion-buttons").empty(); 
            for (i=0; i < topics.length; i++) {
                
             // Dynamically add a button
            var a = $("<button>");
            console.log(a);
             
             // Add a class
            a.addClass("emotion");

             // Add a data-attribute with a value of the the array emotions at index i
            a.attr("data-name", topics[i]);

             // Providing the button's text with a value of the array emotions at index i
             a.text(topics[i]);

             // Add button to HTML
            $("#emotion-buttons").append(a);
        }
    }

        $("#add-image").on("click", function(event){
            event.preventDefault();
            var newImage = $("#image-input").val().trim();
            topics.push(newImage);
            console.log(newImage);

            renderButtons();
        })

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

        $("#gifs-appear-here").empty();

        for(var i=0; i < results.length; i++){


            if(results[i].rating === "g"){
                
                var gifDiv = $("<div class='item'>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var emotionImage = $("<img>");
                emotionImage.addClass("gif");
                emotionImage.attr("src", results[i].images.original_still.url)
                emotionImage.attr("data-animate", results[i].images.original.url)
                emotionImage.attr("data-still", results[i].images.original_still.url)
                emotionImage.attr("data-state", "still");

                gifDiv.append(p);
                gifDiv.append(emotionImage);
                $("#gifs-appear-here").prepend(gifDiv);
            }
        } 
    })

    $("#gifs-appear-here").on("click", ".gif", function(){

        if($(this).attr("data-state") === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }});
    })
});