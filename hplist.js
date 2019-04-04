var section = document.querySelector('#content');
        function handleResponse(response) {
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