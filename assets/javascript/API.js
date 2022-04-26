
// Build API request url for Yelp
var corsProxy = "https://cors-anywhere.herokuapp.com/";
var endpointUrl = "https://api.yelp.com/v3/businesses/search";
var fullUrl = corsProxy + endpointUrl;

// API key
var apiKey = 'A6gmtllBxdAgu_ikQkG56eG9de48BNQVoLuwbxlnVlA-qySFfFokZCkAipK930RvAJF3NdjErxOOTVb2FoIvvW-_3NMsQyPhE6kpOUlvy8TVaUDw-VNvVFVMRlZBXHYx';

// GET parameters to include
/*var params = {
    term: "food",
    location: "San Diego"
};

var yelpName = ""
var yelpContact = {
    phone: "",
    address:""
};
var yelpRating = "";
var yelpImageUrl = "";

var userInput = "";
*/

// Make API request for Yelp
function yelpSearch(params){
    return $.ajax ({
        url: fullUrl,
        data: params,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                'Authorization',
                'Bearer ' + apiKey
        )}
    })
}


// API for Recipe Puppy
function recipeSearch(searchTerm){
        
    var baseURL = "http://www.recipepuppy.com/api/?q=";

    //Complete URl with parameter
    var dogFullUrl = corsProxy + baseURL + searchTerm;
    
    var dogTitle = "" ;
    var ingredients = "" ;
    var link = "" ;

    //Make ajax call
    return $.ajax({
        url: dogFullUrl,
        method: "GET"
    }) 
    }

