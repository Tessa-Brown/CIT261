
        function handleResponse(response) { 
        var section = document.querySelector('#content');
        var requestURL = 'https://www.googleapis.com/books/v1/volumes?q=harrypotter+inauthor:rowling&callback=handleResponse';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
    
        for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
     
            var myArticle = document.createElement('article');
            var title = document.createElement('h4');
            var pages = document.createElement('p');
            var description = document.createElement('p');

            title.textContent = item.volumeInfo.title;
            pages.textContent = "Pages: " + item.volumeInfo.pageCount;
            description.textContent = "Description: " + item.volumeInfo.description;
            
        
            myArticle.appendChild(title);
            myArticle.appendChild(pages);
            myArticle.appendChild(description);
    
            section.appendChild(myArticle);
          } 

        }
    }