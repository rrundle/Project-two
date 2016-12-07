//businesses array
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
    review: "My favorites are: banana puddin', coconut, peach & amaretti, blueberry cheesecake, and their vanilla twist.",
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

//reviews array
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

//disabling searching by zipcode
var zipSearch = document.getElementById("place");
zipSearch.setAttribute("disabled", true);

//declaring content div which holds all content
var content = document.querySelector(".content");

//FUNCTIONS

//loading each object in the businesses array on the search page
function pageLoad(businesses) {
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

//function for updating the rating display
function avRating (businesses, id, rating) {
  for (var i = 0; i < businesses.length; i++) {
    if (businesses[i].id == id) {
      rating.setAttribute("class", "stars");
      if (businesses[i].rating <= 1.24) {
        rating.setAttribute("data-class", "one-bomb");
      }
      if (businesses[i].rating > 1.24 && businesses[i].rating <= 1.75) {
        rating.setAttribute("data-class", "one-five-bomb");
      }
      if (businesses[i].rating > 1.75 && businesses[i].rating <= 2.25) {
        rating.setAttribute("data-class", "two-bomb");
      }
      if (businesses[i].rating > 2.25 && businesses[i].rating <= 2.75) {
        rating.setAttribute("data-class", "two-five-bomb");
      }
      if (businesses[i].rating > 2.75 && businesses[i].rating <= 3.25) {
        rating.setAttribute("data-class", "three-bomb");
      }
      if (businesses[i].rating > 3.25 && businesses[i].rating <= 3.75) {
        rating.setAttribute("data-class", "three-five-bomb");
      }
      if (businesses[i].rating > 3.75 && businesses[i].rating <= 4.25) {
        rating.setAttribute("data-class", "four-bomb");
      }
      if (businesses[i].rating > 4.25 && businesses[i].rating <= 4.75) {
        rating.setAttribute("data-class", "four-five-bomb");
      }
      if (businesses[i].rating > 4.75) {
        rating.setAttribute("data-class", "five-bomb");
      }
    }
  }
}

//function to empty elements
function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

//function to search for matching text
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

//function for capturing search input on search button click, clearing the list div,
//appending item to results div
function searchResults(searchVal) {
  var list = document.getElementById("list");
  searchVal = term.value;
  empty(list);
  if (!searchVal.trim()) return;
  var matchingItems = searchItems (businesses, searchVal);
  if (matchingItems.length === 0) {
    var noMatch = document.createElement("div");
    noResults(noMatch);
  }
  else {
    var changeZipDisplay = document.getElementById("results");
    changeZipDisplay.textContent = "Search results for " + '"' + searchVal + '"' + " in " + "92627";
    for (var i = 0; i < matchingItems.length; i++) {
      var item = renderItem (matchingItems[i]);
      list.appendChild(item);
    }
  }
  term.select();
}

//function for no match in search results
function noResults(noMatch) {
  noMatch.setAttribute("id", "no-match");
  noMatch.textContent = "No results found.";
  var results = document.getElementById("list");
  results.appendChild(noMatch);
}

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
  rating.setAttribute("id", item.id);
  var id = businesses.id;
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
  for (var i = 0; i < businesses.length; i++) {
    if (businesses[i].id == id) {
      var results = renderBusiness(businesses[i]);
      content.appendChild(results);
    }
  }
}

//function to render business detail page
function renderBusiness(item) {
  var content = document.createElement("div");
  content.setAttribute("class", "profile-content");
  content.setAttribute("id", "biz-" + item.id);

  var businessName = document.createElement("div");
  businessName.setAttribute("class", "title");
  businessName.textContent = item.name;
  content.appendChild(businessName);

  var distance = document.createElement("span");
  distance.setAttribute("class", "miles");
  distance.textContent = item.distance;
  businessName.appendChild(distance);

  var ratingBox = document.createElement("div");
  ratingBox.setAttribute("class", "stars-sub");
  content.appendChild(ratingBox);

  var rating = document.createElement("div");
  rating.setAttribute("class", "stars");
  var id = item.id
  avRating(businesses, id, rating);
  ratingBox.appendChild(rating);

  var price = document.createElement("span");
  price.setAttribute("class", "cost");
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
  address.textContent = item.address;
  content.appendChild(address);

  var directionsHeader = document.createElement("div");
  directionsHeader.setAttribute("class", "biz-directions-header");
  directionsHeader.textContent = "Directions:";
  content.appendChild(directionsHeader);

  var directionsBox = document.createElement("div");
  directionsBox.setAttribute("class", "biz-directions");
  content.appendChild(directionsBox);

  var directions = document.createElement("a");
  directions.setAttribute("href", "http://maps.google.com");
  directions.setAttribute("class", "directions");
  directions.textContent = "Get directions";
  directionsBox.appendChild(directions);

  var callHeader = document.createElement("div");
  callHeader.setAttribute("class", "biz-call-header");
  callHeader.textContent = "Call the business:";
  content.appendChild(callHeader);

  var callBox = document.createElement("div");
  callBox.setAttribute("class", "biz-call");
  content.appendChild(callBox);

  var call = document.createElement("a");
  call.setAttribute("class", "call");
  var phone = (item.phone.replace(/[^0-9]/g, ''), 10);
  call.setAttribute("href", "tel:" + phone);
  call.textContent = "Call " + item.phone;
  callBox.appendChild(call);

  var reviewHeader = document.createElement("div");
  reviewHeader.setAttribute("class", "feedback-header");
  reviewHeader.textContent = "Reviews:";
  content.appendChild(reviewHeader);

  var reviewContent = document.createElement("div");
  reviewHeader.setAttribute("class", "feedback-box");
  content.appendChild(reviewContent);

  var favReview = document.createElement("div");
  favReview.setAttribute("class", "fav-feedback");
  favReview.textContent = "Favorite review:"
  content.appendChild(favReview);

  var review = document.createElement("div");
  review.setAttribute("class", "feedback");
  review.textContent = '"' + item.review + '"';
  favReview.appendChild(review);

  var recentReviews = document.createElement("div");
  recentReviews.setAttribute("class", "recent-feedback");
  recentReviews.setAttribute("id", item.id);
  recentReviews.textContent = "Recent reviews:";
  review.appendChild(recentReviews);

  return content;
}

//adding a review
//function to load review page
function loadReview(businesses) {
    var result = renderReview(businesses);
    var write = document.querySelector(".stars-sub")
    write.appendChild(result);
}

//function to render review content
function renderReview(id) {
  var setId = document.querySelector(".recent-feedback");
  id = setId.getAttribute("id");
  var content = document.createElement("div");
  content.setAttribute("class", "feedback-content");

  var quickRate = document.createElement("div");
  quickRate.setAttribute("class", "quick-rate");
  quickRate.textContent = "How bomb is this place?:";
  content.appendChild(quickRate);

  var close = document.createElement("span");
  close.setAttribute("class", "close");
  close.textContent = "Cancel"
  content.appendChild(close);

  var post = document.createElement("span");
  post.setAttribute("class", "disabled");
  post.setAttribute("id", id);
  post.textContent = "Post";
  content.appendChild(post);

  var ratingBox = document.createElement("div");
  ratingBox.setAttribute("class", "box");
  content.appendChild(ratingBox);

  var bombBox = document.createElement("div");
  bombBox.setAttribute("class", "bomb-box");
  ratingBox.appendChild(bombBox);

  var bomb1 = document.createElement("i");
  bomb1.setAttribute("class", "fa fa-bomb 1");
  bomb1.setAttribute("data-class", "bombs");
  bomb1.setAttribute("aria-hidden", "true");
  bomb1.setAttribute("id", "bomb-1");
  bomb1.setAttribute("data-id", id);
  bombBox.appendChild(bomb1);

  var bomb2 = document.createElement("i");
  bomb2.setAttribute("class", "fa fa-bomb 2");
  bomb2.setAttribute("data-class", "bombs");
  bomb2.setAttribute("aria-hidden", "true");
  bomb2.setAttribute("id", "bomb-2");
  bomb2.setAttribute("data-id", id);
  bombBox.appendChild(bomb2);

  var bomb3 = document.createElement("i");
  bomb3.setAttribute("class", "fa fa-bomb 3");
  bomb3.setAttribute("data-class", "bombs");
  bomb3.setAttribute("aria-hidden", "true");
  bomb3.setAttribute("id", "bomb-3");
  bomb3.setAttribute("data-id", id);
  bombBox.appendChild(bomb3);

  var bomb4 = document.createElement("i");
  bomb4.setAttribute("class", "fa fa-bomb 4");
  bomb4.setAttribute("data-class", "bombs");
  bomb4.setAttribute("aria-hidden", "true");
  bomb4.setAttribute("id", "bomb-4");
  bomb4.setAttribute("data-id", id);
  bombBox.appendChild(bomb4);

  var bomb5 = document.createElement("i");
  bomb5.setAttribute("class", "fa fa-bomb 5");
  bomb5.setAttribute("data-class", "bombs");
  bomb5.setAttribute("aria-hidden", "true");
  bomb5.setAttribute("id", "bomb-5");
  bomb5.setAttribute("data-id", id);
  bombBox.appendChild(bomb5);

  var reviewBox = document.createElement("div");
  reviewBox.setAttribute("class", "box-2");
  content.appendChild(reviewBox);

  var reviewText = document.createElement("input");
  reviewText.setAttribute("id", "feedback-text");
  reviewText.setAttribute("placeholder", "Write your review here...");
  reviewText.setAttribute("type", "text");
  reviewBox.appendChild(reviewText);

  return content;
}

//function to revert if user clicks cancel
function emptyCancel(feedbackContent) {
  removeInputs(feedbackContent);
  var write = document.querySelector(".write-hidden");
  var image = document.querySelector(".image-hidden");
  var local = document.querySelector(".local-rev");
  write.setAttribute("class", "write");
  local.setAttribute("class", "local");
  var writeVisible = document.querySelector(".write");
  writeVisible.textContent = "Write a review";
  image.setAttribute("class", "biz-image");
}

//assigning values to bombs clicked and pushing to reviews array
function bombSave(reviews) {
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

//function if no review value is entered
function noReview(warning) {
  warning.setAttribute("id", "feedback-warning");
  warning.textContent= "Must enter a review.";
}
//function to notify of short review
function checkLength(length) {
  length.setAttribute("id", "length");
  length.textContent = "Nice try, your review must be at least 10 charatcters."
}

//remove warning text
function removeWarnings(review, length) {
  if (review) {
    review.parentNode.removeChild(review);
  }
  else if (length) {
    length.parentNode.removeChild(length);
  }
}

//removing review box when rendering review
function removeInputs(feedback) {
  if (feedback) {
    feedback.parentNode.removeChild(feedback);
  }
}

//empty confirmation text
function emptyConfirm(text) {
  if (!text.firstChild) {
    return;
  }
  else {
    text.removeChild(text.firstChild);
  }
}

//displaying time stamp
function stampDisplay(time) {
  var now = new Date();
  var stamp = timeStamp(now);
  time.setAttribute("class", "stamp")
  time.textContent = stamp;
  return (time);
}

//displaying data on business detail page
function renderFeedback(currentReview) {
  //display new feedback
  var reviewBox = document.createElement("div");
  reviewBox.setAttribute("class", "new-feedback");
  reviewBox.textContent = '"' + currentReview + '"';
  var feedback = document.querySelector(".recent-feedback");
  feedback.parentNode.insertBefore(reviewBox, feedback.nextSibling);

  //display rating
  var bombs = document.createElement("span");
  var review = reviews[reviews.length - 1].bombs;
  bombs.setAttribute("class", "new-bombs");
  ratingDisplay(review, bombs);
  reviewBox.appendChild(bombs);

  //display timestamp
  var time = document.createElement("span");
  var timeStamp = stampDisplay(time);
  reviewBox.appendChild(timeStamp);

  //empty "add review" content and go back to business detail
  var feedbackContent = document.querySelector(".feedback-content");
  removeInputs(feedbackContent);
  var write = document.querySelector(".write-hidden");
  var image = document.querySelector(".image-hidden");
  write.setAttribute("class", "write");
  image.setAttribute("class", "biz-image");
  var writeReview = document.querySelector(".write");
  writeReview.textContent = "Write a review";

  //'review added' confirmation notice
  var confirm = document.createElement("span");
  confirmation(confirm);
  writeReview.appendChild(confirm);
}

//confirm that review was added
function confirmation(confirm) {
  confirm.setAttribute("class", "confirm");
  confirm.textContent = "Review Added!";
}

//processing timestamp
function timeStamp(now) {
  var date = [
    now.getMonth() + 1,
    now.getDate(),
    now.getFullYear()
  ];
  var time = [
    now.getHours(),
    now.getMinutes()
  ];
  var suffix;
  if (time[0] < 12) {
    suffix = "AM";
  }
  else {
    suffix = "PM";
  }
  if (time[0] >= 12) {
    time[0] =- 12;
  }
  for ( var i = 1; i < 2; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
  return date[0] + "/" + date[1] + "/" + date[2] + " " + time[0] + (":") + time[1] + " " + suffix;
}

//putting matching reviews into new array
function businessReviews(id) {
  var matches = [];
  for (var i = 0; i < reviews.length; i++ ) {
    if (reviews[i].revid == id) {
      matches.push(reviews[i]);
    }
  }
  return matches;
}

//taking matching reviews and analyzing average
function averageReview(reviews) {
  var accumlation = 0;
  for (var i = 0; i < reviews.length; i++) {
    accumlation += reviews[i].bombs;
  }
  var average = accumlation / reviews.length;
  return average;
}

//matching average with business
function updateAverage(id, businesses, review) {
  for (var i = 0; i < businesses.length; i++) {
    if (businesses[i].id == id) {
      businesses[i].rating = review;
      var rating = document.querySelector(".stars");
      rating.setAttribute("class", "stars");
      ratingDisplay (review, rating);
    }
  }
}

//displaying rating average for matching business
function ratingDisplay(review, rating) {
  if (review <= 1.24) {
    rating.setAttribute("data-class", "one-bomb");
  }
  if (review > 1.24 && review <= 1.75) {
    rating.setAttribute("data-class", "one-five-bomb");
  }
  if (review > 1.75 && review <= 2.25) {
    rating.setAttribute("data-class", "two-bomb");
  }
  if (review > 2.25 && review <= 2.75) {
    rating.setAttribute("data-class", "two-five-bomb");
  }
  if (review > 2.75 && review <= 3.25) {
    rating.setAttribute("data-class", "three-bomb");
  }
  if (review > 3.25 && review <= 3.75) {
    rating.setAttribute("data-class", "three-five-bomb");
  }
  if (review > 3.75 && review <= 4.25) {
    rating.setAttribute("data-class", "four-bomb");
  }
  if (review > 4.25 && review <= 4.75) {
    rating.setAttribute("data-class", "four-five-bomb");
  }
  if (review > 4.75) {
    rating.setAttribute("data-class", "five-bomb");
  }
}

//RUNNING FUNCTIONS

window.onload = pageLoad(businesses);

//LISTENERS
//listeners for search button
var search = document.getElementById("search");
search.addEventListener("click", searchResults);

//listener for the enter button on search bar
var term = document.getElementById("biz-search");
term.addEventListener("keypress", function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      searchResults();
    }
  })
term.select();

//event listener for click on any businesses
var businessBox = document.getElementById("list");
businessBox.addEventListener("click", function(e) {
  var classes =[
      "business",
      "name",
      "stars",
      "distance",
      "price",
      "address",
      "phone",
      "review"
  ]
  for (var i = 0; i < classes.length; i++) {
    var id = e.target.getAttribute("id");
    var businessClick = e.target.className.indexOf(classes[i]);
    if (businessClick !== -1) {
      var removeTarget = document.getElementById("line");
      removeTarget.parentNode.removeChild(removeTarget);
      loadBusiness(businesses, id);
    }
  }
});

//event listener to laod review page
content.addEventListener("click", function(e) {
  var clickEvent = e.target.className.indexOf("write");
  if (clickEvent !== -1) {
    var confirmContent = document.querySelector(".write");
    emptyConfirm(confirmContent);
    var write = document.querySelector(".write");
    var image = document.querySelector(".biz-image");
    var local = document.querySelector(".local");
    local.setAttribute("class", "local-rev");
    write.setAttribute("class", "write-hidden");
    image.setAttribute("class", "image-hidden");
    loadReview(businesses);
  }
});

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

//event listener for cancel button
content.addEventListener("click", function(e) {
  var clickEvent = e.target.className.indexOf("close");
  if (clickEvent !== -1) {
    var feedbackContent = document.querySelector(".feedback-content");
    emptyCancel(feedbackContent);
  }
  return;
});

//event listener for post button
content.addEventListener("click", function(e) {
  var clickEvent = e.target.className.indexOf("post");
  if (clickEvent === -1) {
    return;
  }

  //remove warnings if they exist
  var reviewWarning = document.getElementById("feedback-warning");
  var lengthWarning = document.getElementById("length");
  removeWarnings(reviewWarning, lengthWarning);

  //warning if no review text
  var reviewVal = document.getElementById("feedback-text").value;
  if (reviewVal.length === 0) {
    var reviewBox = document.querySelector(".box-2");
    var warning = document.createElement("div");
    noReview(warning);
    reviewBox.appendChild(warning);
    return;
  }

  //warning for review length
  else if (reviewVal.length < 10) {
    var length = document.createElement("div");
    var lengthBox = document.querySelector(".box-2");
    checkLength(length);
    lengthBox.appendChild(length);
    return;
  }

  //process rating and review
  else {
    var local = document.querySelector(".local-rev");
    local.setAttribute("class", "local");
    var id = e.target.getAttribute("id");
    bombSave(reviews);
    var currentReview = reviews[reviews.length - 1].review;
    renderFeedback(currentReview);
    updateAverage(id, businesses, averageReview(businessReviews(id)));
  }
});
