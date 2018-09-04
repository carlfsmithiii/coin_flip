function display20flips(callback) {
    const coinFlipStringNode = document.getElementById("coin-flip-output");
    coinFlipStringNode.textContent = "";
    for (let i = 0; i < 20; i++) {
        coin.flip();
        coinFlipStringNode.appendChild(callback(i));
    }
}

function getFlipAsStringNode(flipNumber) {
    const flipStringNode = document.createElement("p");
    flipStringNode.appendChild(getFlipTextNode(flipNumber));
    return flipStringNode;
}

function getFlipAsImageNode(flipNumber) {
    const flipFigureNode = document.createElement("figure");
    const figCaption = document.createElement("figcaption");
    figCaption.appendChild(getFlipTextNode(flipNumber));
    const figImage = coin.toHTML();
    figImage.style.width = '200px';
    flipFigureNode.appendChild(figCaption);
    flipFigureNode.appendChild(figImage);
    return flipFigureNode;
}

function getFlipTextNode(flipNumber) {
    return document.createTextNode("Flip " + (flipNumber + 1) + ": " + coin.toString());
}

function flip20Strings() {
    display20flips(getFlipAsStringNode);
}

function flip20Images() {
    display20flips(getFlipAsImageNode);
}