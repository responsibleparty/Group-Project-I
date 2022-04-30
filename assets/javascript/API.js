
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
    var edamamApiKey ="41a4f6322542f18a7ffbe28cb639d278";
    var edamamApiID = "d1ebf186";
        
    var baseURL = `https://api.edamam.com/search?app_id=${edamamApiID}&app_key=${edamamApiKey}&q=`;

    //Complete URl with parameter
    var dogFullUrl = baseURL + searchTerm;
    
    var dogTitle = "" ;
    var ingredients = "" ;
    var link = "" ;

    //Make ajax call
    return fetch(dogFullUrl)
    }

// 
function edamamSearch(params){

}