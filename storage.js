var content = document.getElementById('output');
var save    = document.getElementById('save');
var  display  = '<ul>';
var book = document.getElementById("name").value;
var date = document.getElementById("date").value;
var books = [book, date];

// set on load for testing
localStorage.setItem('books', JSON.stringify(books));

// grab localStorage data on click and create a list
save.addEventListener('click', function() {
    var ls = JSON.parse(localStorage.getItem('books'));  
    for (var i = 0; i < ls.length; i++) {
      display += '<li>' + ls[i].book + ', ' + ls[i].date + '</li>';
    }

  display += '</ul>';
  content.innerHTML = display;
});