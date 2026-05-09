let dropButton = document.querySelector(".selectIcon");
let select = document.querySelector("#options");
let drop = () => {
    select.click();
    select.dispatchEvent(event);
}
dropButton.addEventListener("click", drop);
