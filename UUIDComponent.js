// UUIDComponent.js
export default class UUIDComponent {
    constructor(container) {
        this.container = container;
    }
    render(uuid) {
        const uuidTemplate = document.createElement("span");
        uuidTemplate.classList.add("uuid");
        uuidTemplate.style.color = "#27c93f";
        uuidTemplate.innerHTML = `${uuid}`;
        this.container.appendChild(uuidTemplate);
    }
}
