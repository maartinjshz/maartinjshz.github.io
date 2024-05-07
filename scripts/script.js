document.getElementById("block1").addEventListener("click", function() {
    loadIframe("../templates/blog/fuzzy_transform.html");
});

document.getElementById("block2").addEventListener("click", function() {
    loadIframe("../templates/blog/opimization_1.html");
});

function loadIframe(url) {
    document.getElementById("iframe").src = url;
}
