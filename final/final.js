document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const statusMessage = document.getElementById("statusMessage");
    form.addEventListener("submit", function (event) {
        statusMessage.textContent = "";
        statusMessage.classList.add("hidden");
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const yearsWatching = document.getElementById("yearsWatching").value;
        if (!fullname || !email) {
            event.preventDefault();
            statusMessage.textContent = "Please fill out at least your name and email.";
            statusMessage.classList.remove("hidden");
            statusMessage.style.color = "#f87171";
            return;
        }
        if (yearsWatching && (yearsWatching < 0 || yearsWatching > 50)) {
            event.preventDefault();
            statusMessage.textContent = "Please enter a valid number of years (0-50).";
            statusMessage.classList.remove("hidden");
            statusMessage.style.color = "#f87171";
            return;
        }
        console.log("Form submitted:", {
            fullname, email, favoriteAnime: document.getElementById("favoriteAnime").value.trim(), favoriteGenre: document.getElementById("favoriteGenre").value, yearsWatching, comments: document.getElementById("comments").value.trim()
        });
    });
});
