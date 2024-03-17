document.getElementById("block1").addEventListener("click", function() {
    loadIframe("../templates/blog/fuzzy_transform.html");
});



function loadIframe(url) {
    document.getElementById("iframe").src = url;
}
