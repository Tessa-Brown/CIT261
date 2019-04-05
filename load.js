function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=harrypotter+inauthor:rowling&callback=handleResponse", true);
  JSON.stringify("https://www.googleapis.com/books/v1/volumes?q=harrypotter+inauthor:rowling&callback=handleResponse");
  xhttp.send();
}