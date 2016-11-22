var businesses = [
  { name: "Ruth Chris", address: "2961 Michelson Dr #A, Irvine, CA 92612", price: "$$$$", distance: "6.9 mi", phone: "(949)252-8848", rating: "rating: 4", review: "Butter on the steak!"},
  { name: "Mastro's Steakhouse", address: "633 Anton Blvd, Costa Mesa, CA 92626", price: "$$$$", distance: "5.2 mi", phone: "(714) 546-7405", rating: "rating: 4", review: "Great food, poor service."},
  { name: "Roy's Hawaiian Fusion", address: "453 Newport Center Dr, Newport Beach, CA 92660", price: "$$$$", distance: "5.7mi", phone: "(949) 640-7697", rating: "rating: 4", review: "My favorite place! Lobster potstickers...hello."},
  { name: "Cafe Rio", address: "253 17th St, Costa Mesa, CA 92627", price: "$", distance: "0.7 mi", phone: "(949) 335-6800", rating: "rating: 3", review: "Is there even an interview here?"},
  { name: "Pitfire Artisan Pizza", address: "4353 E 17th St, Costa Mesa, CA 92627", price: "$$", distance: "1.2 mi", phone: "(949) 313-6333", rating: "rating: 4", review: "Yum. Yum. Yum. Yum"},
  { name: "Avila's El Ranchito", address: "2101 Placentia Ave, Costa Mesa, CA 92627", price: "$$", distance: "0.4 mi", phone: "(949) 642-1142", rating: "rating: 4", review: "Bomb old school mexican. I think the whole family works there." },
  { name: "McDonald's", address: "2300 Harbor Blvd, Costa Mesa, CA 92626", price: "$", distance: "2.3 mi", phone: "(949) 631-1943", rating: "rating: 2", review: "There's homeless people outside, stick to the drive-thru."}
]

var zipSearch = document.getElementById("location");
zipSearch.setAttribute("disabled", true);

for (var i = 0; i < businesses.length; i++) {
  var business = document.createElement("div")

  var businessName = document.createElement("span");
  businessName.setAttribute("id", "name")
  businessName.textContent = businesses[i].name;
  business.appendChild(businessName);

  var rating = document.createElement("span");
  rating.setAttribute("id", "rating")
  rating.textContent = businesses[i].rating;
  business.appendChild(rating);

  var distance = document.createElement("span");
  distance.setAttribute("id", "distance")
  distance.textContent = businesses[i].distance;
  business.appendChild(distance);

  var price = document.createElement("span");
  price.setAttribute("id", "price")
  price.textContent = businesses[i].price;
  business.appendChild(price);

  var address = document.createElement("div");
  address.setAttribute("id", "address")
  address.setAttribute("class", "contact")
  address.textContent = businesses[i].address;
  business.appendChild(address);

  var phone = document.createElement("div");
  phone.setAttribute("id", "phone")
  phone.setAttribute("class", "contact")
  phone.textContent = businesses[i].phone;
  business.appendChild(phone);

  var review = document.createElement("div");
  review.setAttribute("id", "review")
  review.textContent = businesses[i].review;
  business.appendChild(review);

  var list = document.getElementById("list");
  list.appendChild(business);
}
