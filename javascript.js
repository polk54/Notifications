var clicks = 0;
function Post() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function Clear() {
    location.reload();
};

function showDiv() {
   document.getElementById('notifcation').style.display = "block";
}
