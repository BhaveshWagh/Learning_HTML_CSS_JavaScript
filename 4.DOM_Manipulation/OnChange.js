const selectElement = document.querySelector(".ice-cream")

selectElement.addEventListener("change", (event) => {
    const result = document.querySelector(".result")
    result.textContent =  `You choose ${event.target.value} if its correct then continue....`;
})