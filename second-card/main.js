document.getElementById("showMessageBtn").addEventListener("click", function() {
    var card = document.getElementById("card");
    var message = document.getElementById("message");
    message.classList.toggle("hidden");
    message.classList.toggle("reveal");
    card.classList.toggle("revealed");
});
