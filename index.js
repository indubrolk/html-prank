const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");
const gif = document.getElementById("gif");

noButton.addEventListener("mouseover", () => {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    gif.style.display = "none";
});

yesButton.addEventListener("click", () => {
    message.style.display = "block";
    gif.style.display = "block";
    noButton.style.display = "none";
});
