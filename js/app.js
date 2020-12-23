const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", function () {
        removeActiveClass(panels);
        panel.classList.add("active");
    });
});

function removeActiveClass(elements) {
    elements.forEach((element) => {
        element.classList.remove("active");
    });
}
