function searchGoogle() {
    let query = document.getElementById("searchInput").value.trim();

    if (query !== "") {
        window.location.href =
            "https://www.google.com/search?q=" +
            encodeURIComponent(query);
    }
}

function feelingLucky() {
    let query = document.getElementById("searchInput").value.trim();

    if (query !== "") {
        window.location.href =
            "https://www.google.com/search?btnI=I&q=" +
            encodeURIComponent(query);
    }
}

// Press Enter to search
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchGoogle();
    }
});