var outdated = function() {
  outdatedBrowser({
    bgColor: "#00A0E6",
    color: "#ffffff",
    lowerThan: "transform",
    languagePath: ""
  });
};

/*--------------------------------
  Beer information
---------------------------------*/
var allBeers = [];

// Constructor
function beer(beerID, beerName, beerType, beerPrice, beerAlcool, beerQuantity) {
  (this.beerID = beerID),
    (this.beerName = beerName),
    (this.beerType = beerType),
    (this.beerPrice = beerPrice),
    (this.beerAlcool = beerAlcool),
    (this.beerQuantity = beerQuantity);
}

// beer inputs value
var beerName = document.getElementById("beerName").value,
  beerType = document.getElementById("beerType").value,
  beerPrice = document.getElementById("beerPrice").value,
  beerAlcool = document.getElementById("beerAlcool").value,
  beerQuantity = document.getElementById("beerQuantity").value;

/*----------------------------------
  Get beers list from the database
-----------------------------------*/
function getBeerData() {
  firebase
    .database()
    .ref("/")
    .once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        //NOTE var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        console.log(childData);
        var i;
        for (i = 0; i < childData.length; i++) {
          var beerData = childData[i];
          console.log(
            beerData.beerName +
              " " +
              beerData.beerType +
              " " +
              beerData.beerAlcool +
              " " +
              beerData.beerPrice
          );
          newElement(
            beerData.beerName,
            beerData.beerType,
            beerData.beerPrice,
            beerData.beerAlcool,
            beerData.beerQuantity
          );
        }
      });
    });
}

getBeerData();

// Create a "close" button and append it to each list item
//FIXME remove the beer from the database
function createCloseBtn() {
  var nodeList = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < nodeList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";

    span.appendChild(txt);
    nodeList[i].appendChild(span);
  }
}

createCloseBtn();

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    var beersNumber = document.getElementById("myUL");
    beersNumber.removeChild(div);
    count();
    
  };
}

// Add a "checked" symbol when clicking on a list item
function isChecked() {
  var list = document.querySelector(".beers");
  list.addEventListener(
    "click",
    function(e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      }
    },
    false
  );
}

isChecked();

// Create a new list item when clicking on the "Add" button
function newElement(beerName, beerType, beerPrice, beerAlcool, beerQuantity) {
  // create new elts
  var li = document.createElement("li"),
    beerNameElt = document.createElement("h3"),
    beerTypeElt = document.createElement("p"),
    beerPriceElt = document.createElement("p"),
    beerAlcoolElt = document.createElement("p"),
    beerQuantityElt = document.createElement("p");

  // add value from inputs to TextNode
  var beerNameValue = document.createTextNode(beerName),
    beerTypeValue = document.createTextNode(beerType),
    beerPriceValue = document.createTextNode(beerPrice),
    beerAlcoolValue = document.createTextNode(beerAlcool),
    beerQuantityValue = document.createTextNode(beerQuantity);

  beerNameElt.appendChild(beerNameValue);
  beerTypeElt.appendChild(beerTypeValue);
  beerPriceElt.appendChild(beerPriceValue);
  beerAlcoolElt.appendChild(beerAlcoolValue);
  beerQuantityElt.appendChild(beerQuantityValue);

  li.classList.add("beers__elt");

  li.appendChild(beerNameElt);
  li.appendChild(beerTypeElt);
  li.appendChild(beerPriceElt);
  li.appendChild(beerAlcoolElt);
  li.appendChild(beerQuantityElt);

  if (beerName === "") {
    alert("You must write something!");
  } else {
    var beerList = document.getElementById("myUL");
    beerList.appendChild(li);

    // create a new object
    var beerID =
      "ID_" +
      Math.random()
        .toString(36)
        .substr(2, 9);
    var beerDetails = new beer(
      beerID,
      beerName,
      beerType,
      beerPrice,
      beerAlcool,
      beerQuantity
    );
    console.log(allBeers);
    allBeers.push(beerDetails);
  }

  // set the updated array to database
  firebase
    .database()
    .ref("Beers")
    .set(allBeers);

  // reset input
  document.getElementById("beerName").value = "";

  var span = document.createElement("span"),
    txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement,
        beersNumber = document.getElementById("myUL");
      beersNumber.removeChild(div);
      count();
      firebase
        .database()
        .ref("Beers")
        .set(allBeers);
    };
  }
  count();
}

function count() {
  var beersNumber = document.getElementById("myUL"),
    counterSpan = document.getElementsByClassName("beer__counter__value"),
    beersNumberCount = beersNumber.children.length;
  counterSpan[0].innerHTML = beersNumberCount;
}

count();
