var businesses = [
  { id: 1,
    name: "Ruth Chris",
    address: "2961 Michelson Dr #A, Irvine, CA 92612",
    price: "$$$$",
    distance: "6.9 mi",
    phone: "(949)252-8848",
    rating: "rating: 4",
    review: "Butter on the steak!"},

  { id: 2,
    name: "Mastro's Steakhouse",
    address: "633 Anton Blvd, Costa Mesa, CA 92626",
    price: "$$$$",
    distance: "5.2 mi",
    phone: "(714) 546-7405",
    rating: "rating: 4",
    review: "Great food, poor service."},

  { id: 3,
    name: "Roy's Hawaiian Fusion",
    address: "453 Newport Center Dr, Newport Beach, CA 92660",
    price: "$$$$",
    distance: "5.7mi",
    phone: "(949) 640-7697",
    rating: "rating: 4",
    review: "My favorite place! Lobster potstickers...hello heaven!"},

  { id: 4,
    name: "Cafe Rio",
    address: "253 17th St, Costa Mesa, CA 92627",
    price: "$",
    distance: "0.7 mi",
    phone: "(949) 335-6800",
    rating: "rating: 3",
    review: "Is there even an interview here?"},

  {
    id: 5,
    name: "Pitfire Artisan Pizza",
    address: "4353 E 17th St, Costa Mesa, CA 92627",
    price: "$$",
    distance: "1.2 mi",
    phone: "(949) 313-6333",
    rating: "rating: 4",
    review: "Yum. Yum. Yum. Yum"},

  { id: 6,
    name: "Avila's El Ranchito",
    address: "2101 Placentia Ave, Costa Mesa, CA 92627",
    price: "$$",
    distance: "0.4 mi",
    phone: "(949) 642-1142",
    rating: "rating: 4",
    review: "Bomb old school mexican. I think the whole family works there." },

  { id: 7,
    name: "McDonald's",
    address: "2300 Harbor Blvd, Costa Mesa, CA 92626",
    price: "$",
    distance: "2.3 mi",
    phone: "(949) 631-1943",
    rating: "rating: 2",
    review: "There's homeless people outside, stick to the drive-thru."}
]

//disabling searching by zipcode
var zipSearch = document.getElementById("place");
zipSearch.setAttribute("disabled", true);

//loading each object in the businesses array on the search page
//puting it inside a new div called business
for (var i = 0; i < businesses.length; i++) {
  var business = document.createElement("div");
  business.setAttribute("class", "business");
  business.setAttribute("id", businesses[i].id);

  var businessName = document.createElement("span");
  businessName.setAttribute("class", "name");
  businessName.setAttribute("id", businesses[i].id);
  businessName.textContent = businesses[i].name;
  business.appendChild(businessName);

  var rating = document.createElement("span");
  rating.setAttribute("class", "rating");
  rating.setAttribute("id", businesses[i].id);
  rating.textContent = businesses[i].rating;
  business.appendChild(rating);

  var distance = document.createElement("span");
  distance.setAttribute("class", "distance");
  distance.setAttribute("id", businesses[i].id);
  distance.textContent = businesses[i].distance;
  business.appendChild(distance);

  var price = document.createElement("span");
  price.setAttribute("class", "price");
  price.setAttribute("id", businesses[i].id);
  price.textContent = businesses[i].price;
  business.appendChild(price);

  var address = document.createElement("div");
  address.setAttribute("class", "address");
  address.setAttribute("id", businesses[i].id);
  address.textContent = businesses[i].address;
  business.appendChild(address);

  var phone = document.createElement("div");
  phone.setAttribute("class", "phone");
  phone.setAttribute("id", businesses[i].id);
  phone.textContent = businesses[i].phone;
  business.appendChild(phone);

  var review = document.createElement("div");
  review.setAttribute("class", "review");
  review.setAttribute("id", businesses[i].id);
  review.textContent = businesses[i].review;
  business.appendChild(review);

  var list = document.getElementById("list");
  list.appendChild(business);
}

//begin search code
//function to clear the list div when search submit button is fired
function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

//declaring function to search for matching text
function searchItems (allItems, searchVal) {
  var matchingItems = [];
  for (var i = 0; i < allItems.length; i++) {
    var item = allItems[i];
    var itemText = item.name + item.address + item.phone + item.rating + item.price + item.review + item.distance;
    var isMatch = itemText.toLowerCase().indexOf(searchVal.toLowerCase()) > -1;
    if (isMatch) {
      matchingItems.push(item);
    }
  }
  return matchingItems;
}

//declaring function for capturing search input on search button click, clearing the list div,
//appending item to results div
function listener () {
  empty(list);
  var searchVal = term.value;
  if (!searchVal.trim()) return;
  var matchingItems = searchItems (businesses, searchVal);
  if (matchingItems.length === 0) {
    var noMatch = document.createElement("div");
    noMatch.setAttribute("id", "no-match");
    noMatch.textContent = "No results found.";
    var results = document.getElementById("list");
    results.appendChild(noMatch);
  }
  for (var i = 0; i < matchingItems.length; i++) {
    var item = renderItem (matchingItems[i]);
    list.appendChild(item);
    }
  term.select();

  //changing the results list title when submit is fired
  function checkSearch () {
    var zip = document.getElementById("zip").textContent;
    var changeZipDisplay = document.getElementById("results");
    changeZipDisplay.textContent = "Search results for " + "'" + searchVal + "'" + " in " + zip;
  }
  checkSearch();
}

//setting up listeners for listener function
var search = document.getElementById("search");
search.addEventListener("click", listener);

//listener for the enter button
var term = document.getElementById("biz-search");
term.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      listener();
    }
  })
term.select();

//assigning classes to all search results
//then appending then to the DOM
function renderItem(item) {

  var biz = document.createElement("div");
  biz.setAttribute("class", "business");
  biz.setAttribute("id", item.id);

  var businessName = document.createElement("span");
  businessName.setAttribute("class", "name");
  businessName.setAttribute("id", item.id);
  businessName.textContent = item.name;
  biz.appendChild(businessName);

  var rating = document.createElement("span");
  rating.setAttribute("class", "rating");
  rating.setAttribute("id", item.id);
  rating.textContent = item.rating;
  biz.appendChild(rating);

  var distance = document.createElement("span");
  distance.setAttribute("class", "distance");
  distance.setAttribute("id", item.id);
  distance.textContent = item.distance;
  biz.appendChild(distance);

  var price = document.createElement("span");
  price.setAttribute("class", "price");
  price.setAttribute("id", item.id);
  price.textContent = item.price;
  biz.appendChild(price);

  var address = document.createElement("div");
  address.setAttribute("class", "address");
  address.textContent = item.address;
  biz.appendChild(address);

  var phone = document.createElement("div");
  phone.setAttribute("class", "phone");
  phone.setAttribute("id", item.id);
  phone.textContent = item.phone;
  biz.appendChild(phone);

  var review = document.createElement("div");
  review.setAttribute("class", "review");
  review.setAttribute("id", item.id);
  review.textContent = item.review;
  biz.appendChild(review);

  return biz;
}

//user can click on business from results to view it
var content = document.querySelector(".content");

function loadBusiness (businesses, id) {
  empty(content);
  for (i = 0; i < businesses.length; i++) {
    if (businesses[i].id == id) {
      var results = renderBusiness(businesses[i]);
      content.appendChild(results);
    }
  }
}

//event listener for click on any businesses
content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("business");
  if (clickEvent !== -1) {
    var id = e.target.getAttribute("id");
    loadBusiness(businesses, id);
  }
});

content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("name");
  if (clickEvent !== -1) {
    var id = e.target.getAttribute("id");
    loadBusiness(businesses, id);
  }
});

content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("rating");
  if (clickEvent !== -1) {
    var id = e.target.getAttribute("id");
    loadBusiness(businesses, id);
  }
});

content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("distance");
  if (clickEvent !== -1) {
    var id = e.target.getAttribute("id");
    loadBusiness(businesses, id);
  }
});

content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("price");
  if (clickEvent !== -1) {
    var id = e.target.getAttribute("id");
    loadBusiness(businesses, id);
  }
});

content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("address");
  if (clickEvent !== -1) {
    var id = e.target.getAttribute("id");
    loadBusiness(businesses, id);
  }
});

content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("phone");
  if (clickEvent !== -1) {
    var id = e.target.getAttribute("id");
    loadBusiness(businesses, id);
  }
});

content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("review");
  if (clickEvent !== -1) {
    var id = e.target.getAttribute("id");
    loadBusiness(businesses, id);
  }
});
/*
<div class="profile-content">
  <div class="biz-name">
    <span class="biz-distance"></span>
  </div>
  <div class="biz-rating">
    <span class="biz-price">
  </div>
  <div class="write-review">
  </div>
  <div class="biz-image">
  </div>
  <div class="biz-address">
  </div>
  <div class="biz-directions">
  </div>
  <div class="biz-call">
  </div>
  <div class="biz-review">
  </div>
</div>
*/

function renderBusiness (item) {
  var content = document.createElement("div");
  content.setAttribute("class", "profile-content");
  content.setAttribute("id", "biz-" + item.id);

  var businessName = document.createElement("div");
  businessName.setAttribute("class", "title");
  businessName.setAttribute("id", item.id);
  businessName.textContent = item.name;
  content.appendChild(businessName);

  var distance = document.createElement("span");
  distance.setAttribute("class", "miles");
  distance.setAttribute("id", item.id);
  distance.textContent = item.distance;
  businessName.appendChild(distance);

  var rating = document.createElement("div");
  rating.setAttribute("class", "stars");
  rating.setAttribute("id", item.id);
  rating.textContent = item.rating;
  content.appendChild(rating);

  var price = document.createElement("span");
  price.setAttribute("class", "cost");
  price.setAttribute("id", item.id);
  price.textContent = item.price;
  rating.appendChild(price);

  var writeReview = document.createElement("div");
  writeReview.setAttribute("class", "write");
  writeReview.setAttribute("id", item.id);
  writeReview.textContent = "Write a review";
  content.appendChild(writeReview);

  var image = document.createElement("div");
  image.setAttribute("class", "biz-image");
  image.setAttribute("id", "image-" + item.id);
  content.appendChild(image);

  var address = document.createElement("div");
  address.setAttribute("class", "local");
  address.setAttribute("id", item.id);
  address.textContent = item.address;
  content.appendChild(address);

  var directionsHeader = document.createElement("div");
  directionsHeader.setAttribute("class", "biz-directions-header");
  directionsHeader.setAttribute("id", item.id);
  directionsHeader.textContent = "Directions:";
  content.appendChild(directionsHeader);

  var directionsBox = document.createElement("div");
  directionsBox.setAttribute("class", "biz-directions");
  directionsBox.setAttribute("id", item.id);
  content.appendChild(directionsBox);

  var directions = document.createElement("a");
  directions.setAttribute("href", "http://maps.google.com");
  directions.setAttribute("class", "directions");
  directions.setAttribute("id", item.id);
  directions.textContent = "Get directions";
  directionsBox.appendChild(directions);

  var callHeader = document.createElement("div");
  callHeader.setAttribute("class", "biz-call-header");
  callHeader.setAttribute("id", item.id);
  callHeader.textContent = "Call the business:";
  content.appendChild(callHeader);

  var callBox = document.createElement("div");
  callBox.setAttribute("class", "biz-call");
  callBox.setAttribute("id", item.id);
  content.appendChild(callBox);

  var call = document.createElement("a");
  call.setAttribute("class", "call");
  call.setAttribute("id", item.id);
  var phone = parseInt(item.phone.replace(/[^0-9]/g, ''), 10);
  console.log(phone);
  call.setAttribute("href", "tel:phone"); //not sure how to set this telephone link
  call.textContent = "Call " + item.phone;
  callBox.appendChild(call);

  var reviewHeader = document.createElement("div");
  reviewHeader.setAttribute("class", "feedback-header");
  reviewHeader.setAttribute("id", item.id);
  reviewHeader.textContent = "Reviews:";
  content.appendChild(reviewHeader);

  var review = document.createElement("div");
  review.setAttribute("class", "feedback");
  review.setAttribute("id", item.id);
  review.textContent = '"' + item.review + '"';
  content.appendChild(review);

  return content;
}

//ADDING A REVIEW
//function to load review page
function loadReview (businesses, id) {
  for (i = 0; i < businesses.length; i++) {
    if (businesses[i].id == id) {
      var results = renderReview(businesses[i]);
      var write = document.querySelector(".stars")
      write.appendChild(results);
    }
  }
}

//event listener to laod review page
content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("write");
  if (clickEvent !== -1) {
    var write = document.querySelector(".write");
    var image = document.querySelector(".biz-image");
    write.setAttribute("class", "write-hidden");
    image.setAttribute("class", "image-hidden");
    var id = e.target.getAttribute("id");
    loadReview(businesses, id);
  }
});

/*
html setup
*/

function renderReview (item) {

  var content = document.createElement("div");
  content.setAttribute("class", "feedback-content");
  content.setAttribute("id", item.id);

  var close = document.createElement("span");
  close.setAttribute("class", "close");
  close.setAttribute("id", item.id);
  close.textContent = "Close"
  content.appendChild(close);

  var postTitle = document.createElement("span");
  postTitle.setAttribute("class", "post-title");
  postTitle.setAttribute("id", item.id);
  postTitle.textContent = "Post a Review";
  content.appendChild(postTitle);

  var post = document.createElement("span");
  post.setAttribute("class", "post");
  post.setAttribute("id", item.id);
  post.textContent = "Post";
  content.appendChild(post);

  var ratingBox = document.createElement("div");
  ratingBox.setAttribute("class", "box");
  ratingBox.setAttribute("id", item.id);
  content.appendChild(ratingBox);

  var enterRating = document.createElement("input");
  enterRating.setAttribute("type", "text");
  enterRating.setAttribute("placeholder", "Enter a review, value: 1 - 5");
  enterRating.setAttribute("id", "enter-feedback");
  enterRating.textContent = "Enter a rating";
  ratingBox.appendChild(enterRating);

  var reviewBox = document.createElement("div");
  reviewBox.setAttribute("class", "box-2");
  reviewBox.setAttribute("id", item.id);
  content.appendChild(reviewBox);

  var reviewText = document.createElement("input");
  reviewText.setAttribute("id", "feedback-text");
  reviewText.setAttribute("placeholder", "Enter your review here..");
  reviewText.setAttribute("type", "text");
  reviewBox.appendChild(reviewText);

  return content;
}

//function to revert if user clicks close
function emptyClose () {
  var content = document.querySelector(".feedback-content")
  empty(content)
  var write = document.querySelector(".write-hidden");
  var image = document.querySelector(".image-hidden");
  write.setAttribute("class", "write");
  image.setAttribute("class", "biz-image");
}

//event listener for close button
content.addEventListener("click", function (e) {
  var clickEvent = e.target.className.indexOf("close");
  if (clickEvent !== -1) {
    emptyClose();
  }
  return
});

//new data array
var reviews = []

//function is no value is entered
function noReview () {
  var reviewBox = document.getElementById("feedback-text");
  var reviewWarn = document.createElement("div")
  reviewWarn.setAttribute("id", "feedback-warning");
  reviewWarn.textContent= "Must enter a review.";
  reviewBox.appendChild(reviewWarn);
}

function noRating () {
  var ratingWarn = document.createElement("span");
  var ratingBox = document.querySelector(".box")
  ratingWarn.setAttribute("class", "star-warning");
  ratingWarn.textContent = "Must enter a rating.";
  ratingBox.appendChild(ratingWarn);
}

function checkLength () {
  var lengthWarn = document.createElement("span");
  var textBox = document.querySelector(".box-2");
  lengthWarn.setAttribute("class", "length");
  lengthWarn.textContent = "Your review must be at least 10 charatcters."
  textBox.appendChild(lengthWarn);
}

//function if rating is not the requested value
function ratingLength () {
  var ratingWarn = document.createElement("span");
  var ratingBox = document.querySelector(".box")
  ratingWarn.setAttribute("class", "star-warning");
  ratingWarn.textContent = "Rating must be 1 - 5";
  ratingBox.appendChild(ratingWarn);
}

//event listener for post button
content.addEventListener("click", function (e) {
  console.log(e)
  var clickEvent = e.target.className.indexOf("post");
  if (clickEvent === -1) {
    return;
  }

  var ratingVal = parseInt(document.getElementById("enter-feedback").value);
  var reviewVal = document.getElementById("feedback-text").value;
  console.log(ratingVal);
  console.log(reviewVal);
  console.log(reviewVal.length);
  console.log(ratingVal.length);
  if (ratingVal.length && reviewVal.length === 0) {
    noRating();
    noReview();
  }
  else if (isNaN(ratingVal)) {
    noRating();
  }
  else if (ratingVal !== 1 || 2 || 3 || 5) {
    ratingLength();
  }
  else if (reviewVal.length == 0) {
    noReview();
  }
  else if (reviewVal.length < 10) {
    checkLength();
  }
  else {
    renderFeedback();
  }
  return
});

//appending input to data model

//displaying data on business detail page
function renderFeedback () {
  //push values to the reviews array
  var feedback = document.querySelector(".feedback");
  var setId = feedback.getAttribute("id")
  var ratingVal = document.getElementById("enter-feedback").value;
  var reviewVal = document.getElementById("feedback-text").value;
  reviews.push({id: setId, rating: ratingVal, review: reviewVal});
  console.log(reviews);

  //loop through new reviews array and display all reviews
  for (i = 0; i < reviews.length; i++) {
    if (setId === reviews[i].id) {
      var currentReview = reviews[reviews.length -1].review;
      console.log(currentReview);
      var newFeedback = document.createElement("div")
      newFeedback.setAttribute("class", "new-feedback");
      newFeedback.textContent = currentReview;
      feedback.appendChild(newFeedback);
    }
  }
  //empty add review content and go back to business detail
  var content = document.querySelector(".feedback-content")
  empty(content)
  var write = document.querySelector(".write-hidden");
  var image = document.querySelector(".image-hidden");
  write.setAttribute("class", "write");
  image.setAttribute("class", "biz-image");
}
