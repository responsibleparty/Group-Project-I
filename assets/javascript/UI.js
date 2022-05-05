var apiData = {
    yelp: null,
    recipePuppy: null
}
var formData = null
var currentStage = 1;

//Initialize stages
function initializeStages() {
    $(".stage2, .stage3").hide();
    initializeStage3()
}

//Function to display next stages
function nextStage() {
    $(".stage" + currentStage).hide()
    currentStage++;
    $(".stage" + currentStage).show()
}

$(".enter").on("click", function () {
    nextStage();
});

$("#submitButton").on("click", function () {
    nextStage();
});

// Data for stage 3 results
function readyForStage3() {
    if (formData.searchRestaurants && formData.searchRecipes) {
        return apiData.yelp && apiData.recipePuppy
    }
    else {
        if (formData.searchRestaurants) {
            return apiData.yelp;
        } else {
            return apiData.recipePuppy;
        }
    }
}

// Gets search data from form
function getFormData($form) {
    var searchData = $form.serializeArray();
    event.preventDefault();
    return mapDataToObject(searchData);
}

//Goes forward with search with appropriately filled out search fields
$("#searchForm input").change(function (event) {
    var formData = getFormData($("#searchForm"))
    if ((formData.searchRecipes || formData.searchRestaurants) && (formData.search && formData.search.trim !== "")) {
        $("#submitButton").prop("disabled", false)
    } else {
        $("#submitButton").prop("disabled", true)
    }
});

function initializeStage3() {
    $(".resultWrapper").hide();
}

function displayRestaurantData(results){
    for(var x = 0; x < 5; x++){
        var string =`
        <div class="resultCard">
        <img src="${results[x].image_url}" alt="${results[x].name}">
        <h5 class="card-title">${results[x].name}</h5>
        <p><b>Rating:</b> ${results[x].rating}/5</p>
        <p class="card-text"><b>Phone:</b>${results[x].display_phone} </p>
        <a href="${results[x].url}" class="btn btn-primary">Let's Go!</a>
        </div>
        </div>
        `

        // var $el = $()
        // $el.find("#restaurantName").html('<div>'+results[x].name+'</div>');
        // $el.find("#restaurantInfo").html('<div>'+results[x].location.display_address+'</div>')
        $('.restaurantResults').append(string)
    }
}

function displayRecipeData(results){
    for(var x = 0; x < 5; x++){

        var string =`
        <div class = "resultCard">
        <img src="${results[x].recipe.image}" alt="${results[x].recipe.label}">
        <h5 class="card-title"><b>${results[x].recipe.label}</b></h5>
        <p class="card-text"><b>Allergens:</b> ${results[x].recipe.cautions}</p>
        <p class="card-text"><b>Total Time:</b> ${results[x].recipe.totalTime} minutes</p>
        <a href="${results[x].recipe.url}" class="btn btn-primary">Let's Go!</a>
        </div>
        </div>
        `

        $('.recipeResults').append(string)
        //$("#recipeTitle").html('<div>'+results[x].title+'</div>');
        //$("#ingredients").html('<div>'+results[x].ingredients+'</div>');
        
    }

}

$("#searchForm").submit(function (event) {
    formData = getFormData($(this))

    if (formData.searchRecipes) {
        recipeSearch(formData.search).then(function (response) {
            //console.log(response);
            if(response.ok) {
                return response.json();
            } else {
                alert('Error: ' + response.statusText);
                return
            }
        })
        .then((data) => {
            //console.log("data_recipe: ", data);
            console.log(data);
            apiData.recipePuppy = data.hits;
            $("#recipeWrapper").show();
            displayRecipeData(data.hits);
        })

    }
    if (formData.searchRestaurants) {
        var params = {
            term: formData.search,
            location: "San Diego"
        };
        yelpSearch(params).then(function (response) {
            console.log(response.businesses);
            apiData.yelp = response.businesses;
            $("#restaurantWrapper").show();
            displayRestaurantData(response.businesses);
            

        });
    }

});


function mapDataToObject(searchData) {
    var apiData = {}
    for (x = 0; x < searchData.length; x++) {
        apiData[searchData[x].name] = searchData[x].value == "true" || searchData[x].value
    }
    return apiData;
}

initializeStages();


//Loader
var loading;
function loadingFunction() {
    loading = setTimeout(showPage, 2000);
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("restaurantResults").style.display = "block";
}
