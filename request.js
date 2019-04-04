var section = document.querySelector('#content');
        function handleResponse(response) {
        for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
     
            var myArticle = document.createElement('article');
            var title = document.createElement('h4');
            var authors = document.createElement('p');
            var publisher = document.createElement('p');
            var publishedDate = document.createElement('p');
            var pages = document.createElement('p');
            var averageRating = document.createElement('p');
            var description = document.createElement('p');

            title.textContent = item.volumeInfo.title;
            authors.textContent = "Authors: " + item.volumeInfo.authors;
            publishedDate.textContent = "Published Date: " + item.volumeInfo.publishedDate;
            pages.textContent = "Pages: " + item.volumeInfo.pageCount;
            averageRating.textContent = "Average Rating: " + item.volumeInfo.averageRating;
            description.textContent = "Description: " + item.volumeInfo.description;
            
        
            myArticle.appendChild(title);
            myArticle.appendChild(authors);
            myArticle.appendChild(publisher);
            myArticle.appendChild(publishedDate);
            myArticle.appendChild(pages);
            myArticle.appendChild(averageRating);
            myArticle.appendChild(description);
    
            section.appendChild(myArticle);
          } 
        }