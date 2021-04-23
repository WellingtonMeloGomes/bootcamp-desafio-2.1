const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");
const iconMaxMinModal = modal.querySelector("#maximize-minimize-modal");


for(let card of cards) {
    card.addEventListener("click", function() {
        const postId = card.getAttribute("id");
        
        modalOverlay.classList.add("active");

        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`;
    });
}

document.querySelector(".action-modal").addEventListener("click", function () {
    if (modal.classList.contains("maximize")) {
        modal.classList.remove("maximize");

        iconMaxMinModal.textContent = "maximize";
    }
    else {
        modal.classList.add("maximize");

        iconMaxMinModal.textContent = "minimize";
    }

});

// close modal
document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
});

