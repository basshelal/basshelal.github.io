function setColorsToBePrintFriendly(root) {
    root.style.setProperty("--bg-color", "#FFFFFF");
    root.style.setProperty("--text-color", "#000000");
    root.style.setProperty("--accent-color", "#880E4F");
}

function restoreColors(root) {
    root.style.setProperty("--bg-color", "#101010");
    root.style.setProperty("--text-color", "#FFFFFF");
    root.style.setProperty("--accent-color", "#C6267F");
}

const printButton = document.getElementById("print-button"); // HTMLButtonElement
const root = document.querySelector(":root");
printButton.onclick = () => {
    setColorsToBePrintFriendly(root);
    window.print();
    restoreColors(root);
};