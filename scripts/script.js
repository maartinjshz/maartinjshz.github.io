

document.getElementById("block1").addEventListener("click", function() {
    // Clear existing iframe content
    var iframe = document.getElementById("iframe");
    iframe.src = "about:blank";

    // Load new iframe content
    loadIframe("../templates/blog/fuzzy_transform.html");
});



document.getElementById("block2").addEventListener("click", function() {
    // Clear existing iframe content
    var iframe = document.getElementById("iframe");
    iframe.src = "about:blank";

    // Load new iframe content
    loadIframe("../templates/blog/opimization_1.html");
});

function loadIframe(url) {
    var iframe = document.getElementById("iframe");
    iframe.src = url;
}
