var outdated = function() {
  outdatedBrowser({
    bgColor: "#00A0E6",
    color: "#ffffff",
    lowerThan: "transform",
    languagePath: ""
  });
};

// Create a "close" button and append it to each list item
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
    div.style.display = "none";
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
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
