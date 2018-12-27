var tempInnerHTML;
function schoolHover(x) {
    tempInnerHTML = x.innerHTML;
    x.innerHTML = "<h6>School</h6>";
}
function schoolNormal(x) {
    x.innerHTML = tempInnerHTML;
    tempInnerHTML = "";
}