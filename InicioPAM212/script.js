class intentoapp {
    constructor() {
        this.buttons = {
            btn1: document.getElementById('btn1'),
            btn2: document.getElementById('btn2'),
            btn3: document.getElementById('btn3'),
            btn4: document.getElementById('btn4'),
        };
        this.contentArea = document.getElementById('content');

        this.buttons.btn1.addEventListener('click', () => this.showPlaceholder('btn1'));
        this.buttons.btn2.addEventListener('click', () => this.showPlaceholder('btn2'));
        this.buttons.btn3.addEventListener('click', () => this.showPlaceholder('btn3'));
        this.buttons.btn4.addEventListener('click', () => this.showPlaceholder('btn4'));
    }

    showPlaceholder(buttonId) {
        const placeholder = this.buttons[buttonId].getAttribute("placeholder");
        const items = placeholder
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(line => `<li>${line}</li>`)
            .join("");
        this.contentArea.innerHTML = `
            <h2>${this.buttons[buttonId].innerText}</h2>
            <ul>${items}</ul>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new intentoapp();
});
