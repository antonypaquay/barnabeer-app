var outdated = function() {
  outdatedBrowser({
    bgColor: "#00A0E6",
    color: "#ffffff",
    lowerThan: "transform",
    languagePath: ""
  });
};

// Create a "close" button and append it to each list item
var nodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < nodeList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";

  span.appendChild(txt);
  nodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
