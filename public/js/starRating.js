const stars = document.querySelectorAll(".star");
const ratingInput = document.querySelector("#rating-value");
const form = document.querySelector(".needs-validation");
const ratingError = document.querySelector(".invalid-feedback");

if (stars.length > 0) {

    stars.forEach(star => {

        star.addEventListener("click", () => {

            const rating = star.dataset.value;
            ratingInput.value = rating;

            stars.forEach(s => s.classList.remove("active"));

            stars.forEach(s => {
                if (s.dataset.value <= rating) {
                    s.classList.add("active");
                }
            });

            // hide error after selecting star
            if (ratingError) {
                ratingError.style.display = "none";
            }

        });

    });

}

if (form) {

    form.addEventListener("submit", function(event){

        const comment = document.querySelector("#comment");

        if (!ratingInput.value) {

            event.preventDefault();
            event.stopPropagation();

            if (ratingError) {
                ratingError.style.display = "block";
            }

        }

        if (!comment.value.trim()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add("was-validated");

    });

}