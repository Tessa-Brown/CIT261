function checkBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // we can use localStorage object to store data
        return true;
    } else {
             return false;
    }
}

function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "Book<br>";
        var i = 0;
        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            list += localStorage.getItem(key) + "<br>";
        }
        if (list == "<tr><th>Book</th><th>Date</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        document.getElementById('list').innerHTML = list;
    } else {
        alert('Cannot store user preferences as your browser do not support local storage');
    }
}

function saveItem() {
    var name = document.getElementById("name").value;
    var data = document.getElementById("date").value;
    localStorage.setItem(name, data);
    doShowAll();  
}

function removeItem() {
    var name = document.getElementById("name").value;
    document.getElementById("date").value; = localStorage.removeItem(name);
    doShowAll();
}

function clearAll() {
    localStorage.clear();
    doShowAll();
}



