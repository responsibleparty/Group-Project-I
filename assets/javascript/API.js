
// Build API request url for Yelp
var corsProxy = "https://cors-anywhere.herokuapp.com/";
var endpointUrl = "https://api.yelp.com/v3/businesses/search";
var fullUrl = corsProxy + endpointUrl;

// API key
var apiKey = 'pM3Hc2J0eVLLSlyBfyfK9rFeu7lE_23qlvFVja0Z4r_GZhRvmIRgRmrtkCWY3eNzJux4DOFiBffzc55p89TLHL2kP2OuPtYyLVVhotk2yim6aYIfvJd0Ol_4CFpnYnYx';

// GET Parameters To Include
var params = {
    term: "food",
    location: ""
};

var yelpName = ""
var yelpContact = {
    phone: "",
    address:""
};
var yelpRating = "";
var yelpImageUrl = "";

var userInput = "";


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


function recipeSearch(searchTerm){
    var edamamApiKey ="aced0dfaf1234951342321e11d76575d";
    var edamamApiID = "16592fbb";
        
  
    var baseURL = `https://api.edamam.com/search?app_id=${edamamApiID}&app_key=${edamamApiKey}&q=`;

    //Complete URl with parameter
    var dogFullUrl = baseURL + searchTerm;


    //Make ajax call
    return fetch(dogFullUrl)
    }

// 
function edamamSearch(params){

}