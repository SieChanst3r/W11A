var headerOneElement = document.getElementById("headerOne");
headerOneElement.addEventListener("click", function() {
    headerOneElement.style.color = "cyan";
    headerOneElement.style.fontSize = "40px";
});

var headerThreeElement = document.getElementById("headerThree");
headerThreeElement.addEventListener("mouseover", function() {
    headerThreeElement.style.fontSize = "60px";
    headerThreeElement.style.fontWeight = "bold";
    headerThreeElement.addEventListener("mouseout", function() {
        headerThreeElement.style.fontSize = "2px"
    })
})

var contentElement = document.getElementById("content");

contentElement.addEventListener('keypress', function(eventDetails) {
    if (eventDetails.keyCode == 32) {
        contentElement.style.backgroundColor = "orange";
        console.log('space bar pressed');
    }
});