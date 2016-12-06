var businesses = [
  { id: 1,
    name: "Ruth Chris",
    address: "2961 Michelson Dr #A, Irvine, CA 92612",
    price: "$$$$",
    distance: "6.9 mi",
    phone: "(949)252-8848",
    rating: 4.6,
    review: "Butter on the steak!",
    keywords: "steak formal dinner bar drinks expensive date full service restaurant food dessert"},

  { id: 2,
    name: "Mastro's Steakhouse",
    address: "633 Anton Blvd, Costa Mesa, CA 92626",
    price: "$$$$",
    distance: "5.2 mi",
    phone: "(714) 546-7405",
    rating: 4.2,
    review: "Great food, poor service.",
    keywords: "steak formal dinner bar drinks expensive date full service restaurant food dessert"},

  { id: 3,
    name: "Roy's Hawaiian Fusion",
    address: "453 Newport Center Dr, Newport Beach, CA 92660",
    price: "$$$$",
    distance: "5.7mi",
    phone: "(949) 640-7697",
    rating: 4.5,
    review: "My favorite place! Lobster potstickers...hello heaven!",
    keywords: "steak fish sushi lobster surf turf bar formal dinner expensive date full service restaurant food dessert"},

  { id: 4,
    name: "Cafe Rio",
    address: "253 17th St, Costa Mesa, CA 92627",
    price: "$",
    distance: "0.7 mi",
    phone: "(949) 335-6800",
    rating: 3.8,
    review: "Is there even an interview here?",
    keywords: "tacos mexican southwest burritos salads fast takeout tortillas pork chicken beef food"},

  {
    id: 5,
    name: "Pitfire Artisan Pizza",
    address: "4353 E 17th St, Costa Mesa, CA 92627",
    price: "$$",
    distance: "1.2 mi",
    phone: "(949) 313-6333",
    rating: 4.2,
    review: "Yum. Yum. Yum. Yum",
    keywords: "pizza beer pasta takeout fast salads delivery food"},

  { id: 6,
    name: "Avila's El Ranchito",
    address: "2101 Placentia Ave, Costa Mesa, CA 92627",
    price: "$$",
    distance: "0.4 mi",
    phone: "(949) 642-1142",
    rating: 3.6,
    review: "Bomb old school mexican. I think the whole family works there.",
    keywords: "mexican tacos margaritas burritos enchiladas taquitos tortillas full service mariachi restaurant food"},

  { id: 7,
    name: "McDonald's",
    address: "2300 Harbor Blvd, Costa Mesa, CA 92626",
    price: "$",
    distance: "2.3 mi",
    phone: "(949) 631-1943",
    rating: 2.6,
    review: "There's homeless people outside, stick to the drive-thru.",
    keywords: "burgers fast drive-thru takeout fries ice cream cones food dessert"},

  { id: 8,
    name: "In-N-Out",
    address: "3211 Harbor Blvd, Costa Mesa, CA 92627",
    price: "$",
    distance: "1.3 mi",
    phone: "(800) 786-1000",
    rating: 4.1,
    review: "Best faast food burger on the west coast. Don't forget to get the shakes!",
    keywords: "burgers cheeseburgers fast fries shakes drive-thru takeout friendly food"},

  { id: 9,
    name: "H2O Sushi & Izakaya",
    address: "1870 Harbor Blvd, Suite 100, Costa Mesa, CA 92627",
    price: "$$",
    distance: "0.7 mi",
    phone: "(949) 515-7400",
    rating: 3.8,
    review: "A MUST order is the spicy garlic edamame, I have had this other places but theirs was definitely the best I've had.",
    keywords: "sushi japanese nagiri sashimi sushi bar saki beer rolls teriyaki dinner restaurant food"},

  { id: 10,
    name: "Sessions West Coast Deli",
    address: "2823 Newport Blvd, Newport Beach, CA 92663",
    price: "$$",
    distance: "2.7 mi",
    phone: "(949) 220-9001",
    rating: 4.3,
    review: "But as a meat eater is shocking to hear my self say my favorite was the veggie summer zephyr.",
    keywords: "sandwiches deli toast chips takeout breakfast lunch dinner food"},

  { id: 11,
    name: "Plums Cafe and Catering",
    address: "369 E 17th St, Ste 7, Costa Mesa, CA 92627",
    price: "$$",
    distance: "1.7 mi",
    phone: "(949) 722-7586",
    rating: 4.7,
    review: "It was ok... After we sat down and started to read the reviews here at Yelp, we were afraid we were in for a long wait.",
    keywords: "breakfast brunch grits pancakes eggs french toast omlettes service restaurant coffee food dessert"},

  { id: 12,
    name: "Pancakes R Us",
    address: "329 E 17th St, Costa Mesa, CA 92627",
    price: "$$",
    distance: "1.9 mi",
    phone: "(949) 642-9424",
    rating: 3.5,
    review: "It used to be an Ihop and still has a lot of the same touches but is MUCH cleaner.",
    keywords: "breakfast brunch grits pancakes eggs french toast omlettes service restaurant coffee food"},

  { id: 13,
    name: "Sidecar Doughnuts & Coffee",
    address: "3270 E 17th St, Ste 18, Costa Mesa, CA 92627",
    price: "$$",
    distance: "1.8 mi",
    phone: "(949) 873-5424",
    rating: 4,
    review: "My favorites are: banana puddin, coconut, peach & amaretti, blueberry cheesecake, and their vanilla twist.",
    keywords: "breakfast brunch donuts coffee gourmet cronuts croissants fast takeout early food dessert"},

  { id: 14,
    name: "Pizza Hut",
    address: "261 E 17th St, Costa Mesa, CA 92627",
    price: "$$",
    distance: "1 mi",
    phone: "(949) 631-1992",
    rating: 3.1,
    review: "Never again will I order pizza from Pizza Hut - it's disgusting anyways!",
    keywords: "pizza delivery chicken wings buffalo pepsi salads breadsticks garlic bread food"},

  { id: 15,
    name: "Tandoori Fresh",
    address: "1500 Adams Ave, Ste 100A, Costa Mesa, CA 92626",
    price: "$$",
    distance: "2.4 mi",
    phone: "(714) 444-4407",
    rating: 3.8,
    review: "The lunch special is a great value for what you get (meat, vegetable, rice, naan and a drink) all for under $12.00",
    keywords: "indian pakistani halal curry restaurant naan tikka masala chicken lunch special dinner takeout food"}
]

//disabling searching by zipcode
var zipSearch = document.getElementById("place");
zipSearch.setAttribute("disabled", true);

//function for updating the rating display
function avRating (businesses, id, rating) {
  for (i = 0; i < businesses.length; i++) {
    if (businesses[i].id == id) {
      if (businesses[i].rating <= 1.24) {
        rating.setAttribute("class", "stars");
        rating.setAttribute("data-class", "one-bomb");
      }
      if (businesses[i].rating > 1.24 && businesses[i].rating <= 1.75) {
        rating.setAttribute("class", "stars");
        rating.setAttribute("data-class", "one-five-bomb");
      }
      if (businesses[i].rating > 1.75 && businesses[i].rating <= 2.25) {
        rating.setAttribute("class", "stars");
        rating.setAttribute("data-class", "two-bomb");
      }
      if (businesses[i].rating > 2.25 && businesses[i].rating <= 2.75) {
        rating.setAttribute("class", "stars");
        rating.setAttribute("data-class", "two-five-bomb");
      }
      if (businesses[i].rating > 2.75 && businesses[i].rating <= 3.25) {
        rating.setAttribute("class", "stars");
        rating.setAttribute("data-class", "three-bomb");
      }
      if (businesses[i].rating > 3.25 && businesses[i].rating <= 3.75) {
        rating.setAttribute("class", "stars");
        rating.setAttribute("data-class", "three-five-bomb");
      }
      if (businesses[i].rating > 3.75 && businesses[i].rating <= 4.25) {
        rating.setAttribute("class", "stars");
        rating.setAttribute("data-class", "four-bomb");
      }
      if (businesses[i].rating > 4.25 && businesses[i].rating <= 4.75) {
        rating.setAttribute("class", "stars");
        rating.setAttribute("data-class", "four-five-bomb");
      }
      if (businesses[i].rating > 4.75) {
        rating.setAttribute("class", "stars");
        rating.setAttribute("data-class", "five-bomb");
      }
    }
  }
}

//declaring i for for loops
var i;

//loading each object in the businesses array on the search page
//puting it inside a new div called business
window.onload = pageLoad();
function pageLoad() {
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
    rating.setAttribute("id", businesses[i].id);
    var id = businesses[i].id
    avRating(businesses, id, rating);
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
}

//begin search code
//function to clear the list div when search submit button is fired
function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

//declaring content div which holds all content
var content = document.querySelector(".content");

//when going to home page when home icon is clicked
/*var home = document.querySelector(".home")
home.addEventListener("click", function(e) {
  var clickEvent = e.target.className.indexOf("home");
  if (clickEvent !== -1) {
    empty(content);
    pageLoad();
  }
  return
});
*/

//declaring function to search for matching text
function searchItems(allItems, searchVal) {
  var matchingItems = [];
  for (var i = 0; i < allItems.length; i++) {
    var item = allItems[i];
    var itemText = (item.name + item.address + item.phone + item.rating + item.price + item.review + item.distance + item.keywords).replace(/[^a-zA-Z0-9]/g, '');
    var isMatch = itemText.toLowerCase().indexOf(searchVal.toLowerCase()) > -1;
    if (isMatch) {
      matchingItems.push(item);
    }
  }
  return matchingItems;
}

//declaring function for capturing search input on search button click, clearing the list div,
//appending item to results div
function listener() {
  var list = document.getElementById("list");
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
  function checkSearch() {
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
term.addEventListener("keypress", function(e) {
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
  var id = businesses[i].id
  avRating(businesses, id, rating);
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
function loadBusiness(businesses, id) {
  empty(content)
  for (i = 0; i < businesses.length; i++) {
    if (businesses[i].id == id) {
      var results = renderBusiness(businesses[i]);
      content.appendChild(results);
    }
  }
}

//event listener for click on any businesses
var businessBox = document.getElementById("list");

businessBox.addEventListener("click", function(e) {
  var id = e.target.getAttribute("id");
  var businessClick = e.target.className.indexOf("business");
  if (businessClick !== -1) {
   loadBusiness(businesses, id);
  }

  var nameClick = e.target.className.indexOf("name");
  if (nameClick !== -1) {
   loadBusiness(businesses, id);
  }

  var ratingClick = e.target.className.indexOf("rating" );
  if (ratingClick !== -1) {
   loadBusiness(businesses, id);
  }

  var distanceClick = e.target.className.indexOf("distance");
  if (distanceClick !== -1) {
   loadBusiness(businesses, id);
  }

  var priceClick = e.target.className.indexOf("price");
  if (priceClick !== -1) {
   loadBusiness(businesses, id);
  }

  var addressClick = e.target.className.indexOf("address");
  if (addressClick !== -1) {
   loadBusiness(businesses, id);
  }

  var phoneClick = e.target.className.indexOf("phone");
  if (phoneClick !== -1) {
   loadBusiness(businesses, id);
  }

  var reviewClick = e.target.className.indexOf("review");
  if (reviewClick !== -1) {
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

function renderBusiness(item) {
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

  var ratingBox = document.createElement("div");
  ratingBox.setAttribute("class", "stars-sub");
  ratingBox.setAttribute("id", item.id);
  content.appendChild(ratingBox);

  var rating = document.createElement("div");
  rating.setAttribute("class", "stars");
  rating.setAttribute("id", item.id);
  var id = item.id
  avRating(businesses, id, rating);
  ratingBox.appendChild(rating);

  var price = document.createElement("span");
  price.setAttribute("class", "cost");
  price.setAttribute("id", item.id);
  price.textContent = item.price;
  ratingBox.appendChild(price);

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
  call.setAttribute("href", "tel:" + phone.value); //not sure how to set this telephone link
  call.textContent = "Call " + item.phone;
  callBox.appendChild(call);

  var reviewHeader = document.createElement("div");
  reviewHeader.setAttribute("class", "feedback-header");
  reviewHeader.setAttribute("id", item.id);
  reviewHeader.textContent = "Reviews:";
  content.appendChild(reviewHeader);

  var reviewContent = document.createElement("div");
  reviewHeader.setAttribute("class", "feedback-box");
  reviewHeader.setAttribute("id", item.id);
  content.appendChild(reviewContent);

  var favReview = document.createElement("div");
  favReview.setAttribute("class", "fav-feedback");
  favReview.setAttribute("id", item.id);
  favReview.textContent = "Favorite review:"
  content.appendChild(favReview);

  var review = document.createElement("div");
  review.setAttribute("class", "feedback");
  review.setAttribute("id", item.id);
  review.textContent = '"' + item.review + '"';
  favReview.appendChild(review);

  var recentReviews = document.createElement("div");
  recentReviews.setAttribute("class", "recent-feedback");
  recentReviews.setAttribute("id", item.id);
  recentReviews.textContent = "Recent reviews:";
  review.appendChild(recentReviews);

  return content;
}

//ADDING A REVIEW
//function to load review page
function loadReview(businesses, id) {
  for (i = 0; i < businesses.length; i++) {
    if (businesses[i].id == id) {
      var results = renderReview(businesses[i]);
      var write = document.querySelector(".stars-sub")
      write.appendChild(results);
    }
  }
}

//event listener to laod review page
content.addEventListener("click", function(e) {
  var clickEvent = e.target.className.indexOf("write");
  if (clickEvent !== -1) {
    emptyConfirm();
    var write = document.querySelector(".write");
    var image = document.querySelector(".biz-image");
    var local = document.querySelector(".local");
    local.setAttribute("class", "local-rev");
    write.setAttribute("class", "write-hidden");
    image.setAttribute("class", "image-hidden");
    var id = e.target.getAttribute("id");
    loadReview(businesses, id);
  }
});

function renderReview(item) {

  var content = document.createElement("div");
  content.setAttribute("class", "feedback-content");
  content.setAttribute("id", item.id);

  var quickRate = document.createElement("div");
  quickRate.setAttribute("class", "quick-rate");
  quickRate.textContent = "How bomb is this place?:";
  content.appendChild(quickRate);

  var close = document.createElement("span");
  close.setAttribute("class", "close");
  close.setAttribute("id", item.id);
  close.textContent = "Close"
  content.appendChild(close);

  var post = document.createElement("span");
  post.setAttribute("class", "disabled");
  post.setAttribute("id", item.id);
  post.textContent = "Post";
  content.appendChild(post);

  var ratingBox = document.createElement("div");
  ratingBox.setAttribute("class", "box");
  ratingBox.setAttribute("id", item.id);
  content.appendChild(ratingBox);

  var bombBox = document.createElement("div");
  bombBox.setAttribute("class", "bomb-box");
  ratingBox.appendChild(bombBox);

  var bomb1 = document.createElement("i");
  bomb1.setAttribute("class", "fa fa-bomb 1");
  bomb1.setAttribute("aria-hidden", "true");
  bomb1.setAttribute("id", "bomb-1");
  bomb1.setAttribute("data-id", item.id);
  bombBox.appendChild(bomb1);

  var bomb2 = document.createElement("i");
  bomb2.setAttribute("class", "fa fa-bomb 2");
  bomb2.setAttribute("aria-hidden", "true");
  bomb2.setAttribute("id", "bomb-2");
  bomb2.setAttribute("data-id", item.id);
  bombBox.appendChild(bomb2);

  var bomb3 = document.createElement("i");
  bomb3.setAttribute("class", "fa fa-bomb 3");
  bomb3.setAttribute("aria-hidden", "true");
  bomb3.setAttribute("id", "bomb-3");
  bomb3.setAttribute("data-id", item.id);
  bombBox.appendChild(bomb3);

  var bomb4 = document.createElement("i");
  bomb4.setAttribute("class", "fa fa-bomb 4");
  bomb4.setAttribute("aria-hidden", "true");
  bomb4.setAttribute("id", "bomb-4");
  bomb4.setAttribute("data-id", item.id);
  bombBox.appendChild(bomb4);

  var bomb5 = document.createElement("i");
  bomb5.setAttribute("class", "fa fa-bomb 5");
  bomb5.setAttribute("aria-hidden", "true");
  bomb5.setAttribute("id", "bomb-5");
  bomb5.setAttribute("data-id", item.id);
  bombBox.appendChild(bomb5);

  var reviewBox = document.createElement("div");
  reviewBox.setAttribute("class", "box-2");
  reviewBox.setAttribute("id", item.id);
  content.appendChild(reviewBox);

  var reviewText = document.createElement("input");
  reviewText.setAttribute("id", "feedback-text");
  reviewText.setAttribute("placeholder", "Write your feedback here...");
  reviewText.setAttribute("type", "text");
  reviewBox.appendChild(reviewText);

  return content;
}

//function to revert if user clicks close
function emptyClose() {
  removeInputs();
  var write = document.querySelector(".write-hidden");
  var image = document.querySelector(".image-hidden");
  var local = document.querySelector(".local-rev");
  write.setAttribute("class", "write");
  local.setAttribute("class", "local");
  var writeVisible = document.querySelector(".write");
  writeVisible.textContent = "Write a review";
  image.setAttribute("class", "biz-image");
}

//new data array
var reviews = [
  { revid: 1,
    bombs: 4,
    review: "1 - This place exists and is a business. That is all."},
  { revid: 2,
    bombs: 4,
    review: "2 - This place exists and is a business. That is all."},
  { revid: 3,
    bombs: 4,
    review: "3 - This place exists and is a business. That is all."},
  { revid: 4,
    bombs: 4,
    review: "4 - This place exists and is a business. That is all."},
  { revid: 5,
    bombs: 4,
    review: "5 - This place exists and is a business. That is all."},
  { revid: 6,
    bombs: 4,
    review: "6 - This place exists and is a business. That is all."},
  { revid: 7,
    bombs: 4,
    review: "7 - This place exists and is a business. That is all."},
  { revid: 8,
    bombs: 4,
    review: "8 - This place exists and is a business. That is all."},
  { revid: 9,
    bombs: 4,
    review: "9 - This place exists and is a business. That is all."},
  { revid: 10,
    bombs: 4,
    review: "10 - This place exists and is a business. That is all."},
  { revid: 11,
    bombs: 4,
    review: "11 - This place exists and is a business. That is all."},
  { revid: 12,
    bombs: 4,
    review: "12 - This place exists and is a business. That is all."},
  { revid: 13,
    bombs: 4,
    review: "13 - This place exists and is a business. That is all."},
  { revid: 14,
    bombs: 4,
    review: "14 - This place exists and is a business. That is all."},
  { revid: 15,
    bombs: 4,
    review: "15 - This place exists and is a business. That is all."}
]

//bomb-rating a business
function bombSave (reviews) {
  var feedback = document.querySelector(".recent-feedback");
  var setId = feedback.getAttribute("id");
  var reviewVal = document.getElementById("feedback-text").value;
  var bomb1 = document.getElementById("bomb-1");
  var bomb2 = document.getElementById("bomb-2");
  var bomb3 = document.getElementById("bomb-3");
  var bomb4 = document.getElementById("bomb-4");
  var bomb5 = document.getElementById("bomb-5");
  var bombVal;
  if (!bomb5 && bomb4) {
    bombVal = 1
    reviews.push({revid: setId, bombs: bombVal, review: reviewVal});
  }
  if (!bomb4 && bomb3) {
    bombVal = 2
    reviews.push({revid: setId, bombs: bombVal, review: reviewVal});
  }
  if (!bomb3 && bomb2) {
    bombVal = 3
    reviews.push({revid: setId, bombs: bombVal, review: reviewVal});
  }
  if (!bomb2 && bomb1) {
    bombVal = 4
    reviews.push({revid: setId, bombs: bombVal, review: reviewVal});
  }
  if (!bomb1) {
    bombVal = 5
    reviews.push({revid: setId, bombs: bombVal, review: reviewVal});
  }
}

//function is no value is entered
function noReview() {
  var reviewBox = document.querySelector(".box-2");
  var reviewWarn = document.createElement("div")
  reviewWarn.setAttribute("id", "feedback-warning");
  reviewWarn.textContent= "Must enter a review.";
  reviewBox.appendChild(reviewWarn);
}

function checkLength() {
  var lengthWarn = document.createElement("div");
  var textBox = document.querySelector(".box-2");
  lengthWarn.setAttribute("id", "length");
  lengthWarn.textContent = "Your review must be at least 10 charatcters."
  textBox.appendChild(lengthWarn);
}

function removeWarnings() {
  var reviewWarning = document.getElementById("feedback-warning");
  var lengthWarning = document.getElementById("length");
  if (reviewWarning) {
    reviewWarning.parentNode.removeChild(reviewWarning);
  }
  else if (lengthWarning) {
    lengthWarning.parentNode.removeChild(lengthWarning);
  }
  else {
    return
  }
}

//removing review box when rendering review
function removeInputs() {
  var feedbackContent = document.querySelector(".feedback-content");
  if (feedbackContent) {
    feedbackContent.parentNode.removeChild(feedbackContent);
  }
  else {
    return;
  }
}

//function to empty confirmation text
function emptyConfirm() {
  var confirmContent = document.querySelector(".write");
  if (!confirmContent.firstChild) {
    return;
  }
  else {
    confirmContent.removeChild(confirmContent.firstChild);
  }
}

//displaying data on business detail page
function renderFeedback() {
  //capture most recent review and timestamp it
  var currentReview = reviews[reviews.length - 1].review;
  var stamp = timeStamp();

  //display new feedback
  var newFeedback = document.createElement("div");
  newFeedback.setAttribute("class", "new-feedback");
  newFeedback.textContent = '"' + currentReview + '"';
  var feedback = document.querySelector(".recent-feedback");
  feedback.parentNode.insertBefore(newFeedback, feedback.nextSibling);
  var bombs = document.createElement("span");
  recentRating(reviews, bombs)
  newFeedback.appendChild(bombs)
  var stampDisplay = document.createElement("span");
  stampDisplay.setAttribute("class", "stamp")
  stampDisplay.textContent = stamp;
  newFeedback.appendChild(stampDisplay);

  //empty add review content and go back to business detail
  removeInputs();
  var write = document.querySelector(".write-hidden");
  var image = document.querySelector(".image-hidden");
  write.setAttribute("class", "write");
  image.setAttribute("class", "biz-image");
  var writeReview = document.querySelector(".write");
  writeReview.textContent = "Write a review";

  //'review added' confirmation notice
  var reviewConfirm = document.createElement("span");
  reviewConfirm.setAttribute("class", "confirm");
  reviewConfirm.textContent = "Review Added!";
  writeReview.appendChild(reviewConfirm);
}

//timestamp function
function timeStamp() {
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes() ];
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
  return date.join("/") + " " + time.join(":") + " " + suffix;
}

//event listener for bombs
content.addEventListener("click", function(e) {
  if (e.target.id.indexOf("bomb-1") !== -1) {
    var bomb1 = document.getElementById("bomb-1");
    bomb1.setAttribute("id", "bomb-click-1");
    var bomb2 = document.getElementById("bomb-2");
    bomb2.setAttribute("id", "bomb-click-2");
    var bomb3 = document.getElementById("bomb-3");
    bomb3.setAttribute("id", "bomb-click-3");
    var bomb4 = document.getElementById("bomb-4");
    bomb4.setAttribute("id", "bomb-click-4");
    var bomb5 = document.getElementById("bomb-5");
    bomb5.setAttribute("id", "bomb-click-5");
    var post = document.querySelector(".disabled");
    post.setAttribute("class", "post");
  }

  if (e.target.id.indexOf("bomb-2") !== -1) {
    var bomb2 = document.getElementById("bomb-2");
    bomb2.setAttribute("id", "bomb-click-2");
    var bomb3 = document.getElementById("bomb-3");
    bomb3.setAttribute("id", "bomb-click-3");
    var bomb4 = document.getElementById("bomb-4");
    bomb4.setAttribute("id", "bomb-click-4");
    var bomb5 = document.getElementById("bomb-5");
    bomb5.setAttribute("id", "bomb-click-5");
    var post = document.querySelector(".disabled");
    post.setAttribute("class", "post");
  }

  if (e.target.id.indexOf("bomb-3") !== -1) {
    var bomb3 = document.getElementById("bomb-3");
    bomb3.setAttribute("id", "bomb-click-3");
    var bomb4 = document.getElementById("bomb-4");
    bomb4.setAttribute("id", "bomb-click-4");
    var bomb5 = document.getElementById("bomb-5");
    bomb5.setAttribute("id", "bomb-click-5");
    var post = document.querySelector(".disabled");
    post.setAttribute("class", "post");
  }

  if (e.target.id.indexOf("bomb-4") !== -1) {
    var bomb4 = document.getElementById("bomb-4");
    bomb4.setAttribute("id", "bomb-click-4");
    var bomb5 = document.getElementById("bomb-5");
    bomb5.setAttribute("id", "bomb-click-5");
    var post = document.querySelector(".disabled");
    post.setAttribute("class", "post");
  }

  if (e.target.id.indexOf("bomb-5") !== -1) {
    var bomb5 = document.getElementById("bomb-5");
    bomb5.setAttribute("id", "bomb-click-5");
    var post = document.querySelector(".disabled");
    post.setAttribute("class", "post");
  }
})

//event listener for close button
content.addEventListener("click", function(e) {
  var clickEvent = e.target.className.indexOf("close");
  if (clickEvent !== -1) {
    emptyClose();
  }
  return;
});

//event listener for post button
content.addEventListener("click", function(e) {
  var clickEvent = e.target.className.indexOf("post");
  if (clickEvent === -1) {
    return;
  }

  removeWarnings();
  var reviewVal = document.getElementById("feedback-text").value;
  if (reviewVal.length === 0) {
    noReview(); return;
  }
  else if (reviewVal.length < 10) {
    checkLength(); return;
  }
  else {
    var local = document.querySelector(".local-rev");
    local.setAttribute("class", "local");
    var id = e.target.getAttribute("id");
    bombSave(reviews, id);
    renderFeedback();
    updateAverage(id, businesses, averageReview(businessReviews(id)));
  }
});

//updating total business rating as average of individual ratings
function businessReviews(id) {
  var matches = [];
  for (var i = 0; i < reviews.length; i++ ) {
    if (reviews[i].revid == id) {
      matches.push(reviews[i]);
    }
  }
  return matches;
}

function averageReview(reviews) {
  var accumlation = 0;
  for (var i = 0; i < reviews.length; i++) {
    accumlation += reviews[i].bombs;
  }
  var average = accumlation / reviews.length;
  return average;
}

function updateAverage(id, businesses, rating) {
  for (var i = 0; i < businesses.length; i++) {
    if (businesses[i].id == id) {
      businesses[i].rating = rating;
      var bombDisplay = document.querySelector(".stars");
      ratingDisplay (rating, bombDisplay);
    }
  }
}

function recentRating (reviews, rating) {
  var bombs = reviews[reviews.length - 1].bombs;
  if (bombs <= 1.24) {
    rating.setAttribute("data-class", "one-bomb");
  }
  if (bombs > 1.24 && bombs <= 1.75) {
    rating.setAttribute("data-class", "one-five-bomb");
  }
  if (bombs > 1.75 && bombs <= 2.25) {
    rating.setAttribute("data-class", "two-bomb");
  }
  if (bombs > 2.25 && bombs <= 2.75) {
    rating.setAttribute("data-class", "two-five-bomb");
  }
  if (bombs > 2.75 && bombs <= 3.25) {
    rating.setAttribute("data-class", "three-bomb");
  }
  if (bombs > 3.25 && bombs <= 3.75) {
    rating.setAttribute("data-class", "three-five-bomb");
  }
  if (bombs > 3.75 && bombs <= 4.25) {
    rating.setAttribute("data-class", "four-bomb");
  }
  if (bombs > 4.25 && bombs <= 4.75) {
    rating.setAttribute("data-class", "four-five-bomb");
  }
  if (bombs > 4.75) {
    rating.setAttribute("data-class", "five-bomb");
  }
}

function ratingDisplay (rating, bombDisplay) {
  if (rating <= 1.24) {
    bombDisplay.setAttribute("class", "stars");
    bombDisplay.setAttribute("data-class", "one-bomb");
  }
  if (rating > 1.24 && rating <= 1.75) {
    bombDisplay.setAttribute("class", "stars");
    bombDisplay.setAttribute("data-class", "one-five-bomb");
  }
  if (rating > 1.75 && rating <= 2.25) {
    bombDisplay.setAttribute("class", "stars");
    bombDisplay.setAttribute("data-class", "two-bomb");
  }
  if (rating > 2.25 && rating <= 2.75) {
    bombDisplay.setAttribute("class", "stars");
    bombDisplay.setAttribute("data-class", "two-five-bomb");
  }
  if (rating > 2.75 && rating <= 3.25) {
    bombDisplay.setAttribute("class", "stars");
    bombDisplay.setAttribute("data-class", "three-bomb");
  }
  if (rating > 3.25 && rating <= 3.75) {
    bombDisplay.setAttribute("class", "stars");
    bombDisplay.setAttribute("data-class", "three-five-bomb");
  }
  if (rating > 3.75 && rating <= 4.25) {
    bombDisplay.setAttribute("class", "stars");
    bombDisplay.setAttribute("data-class", "four-bomb");
  }
  if (rating > 4.25 && rating <= 4.75) {
    bombDisplay.setAttribute("class", "stars");
    bombDisplay.setAttribute("data-class", "four-five-bomb");
  }
  if (rating > 4.75) {
    bombDisplay.setAttribute("class", "stars");
    bombDisplay.setAttribute("data-class", "five-bomb");
  }
}
