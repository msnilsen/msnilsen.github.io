var tempInnerHTML;
function schoolHover(x) {
    tempInnerHTML = x.innerHTML;
    x.innerHTML = "<h6>School</h6>";
}
function schoolNormal(x) {
    x.innerHTML = tempInnerHTML;
    tempInnerHTML = "";
}
$(document).on('show.bs.modal', function() {
    fullpage_api.setAllowScrolling(false);
});
$(document).on('hide.bs.modal', function() {
    fullpage_api.setAllowScrolling(true);
});