    function getBooks() { 
        var search = document.getElementById('search').innerHTML;
        var requestURL = "https://www.googleapis.com/books/v1/volumes?q=" + search + "&callback=handleResponse";
        for (var i = 0; i < requestURL.items.length; i++) {
          var item = requestURL.items[i];
          // in production code, item.text should have the HTML entities escaped.
          document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
        }
    }

        /*var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
          var data = request.response;
          getBooks(data);
        }
       
      /*  function getBooks(jsonData) {
            var books = jsonData['volumeInfo'];

            var myArticle = document.createElement('article');
            var title = document.createElement('h2');
            var authors = document.createElement('p');
            var publisher = document.createElement('p');
            var publishedDate = document.createElement('p');
            var pages = document.createElement('p');
            var averageRating = document.createElement('p');
            var price = document.createElement('p');

            title.textContent = books[i].title;
            authors.textContent = books[i].authors;
            publisher.textContent = books[i].publisher;
            publishedDate.textContent = books[i].publishedDate;
            pages.textContent = books[i].pages;
            averageRating.textContent = books[i].averageRating;
            price.textContent = books[i].retailPrice;
            
        
            myArticle.appendChild(title);
            myArticle.appendChild(authors);
            myArticle.appendChild(publisher);
            myArticle.appendChild(publishedDate);
            myArticle.appendChild(pages);
            myArticle.appendChild(averageRating);
            myArticle.appendChild(price);
    
            section.appendChild(myArticle);
          } */
        }
    