// SudoRmRfComponent.js
import { ClearComponent } from './ClearComponent.js';

export default class SudoRmRfComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const clearTerminal = new ClearComponent(this.container);
        clearTerminal.render();
        const destroyTemplate = document.createElement("div");
        destroyTemplate.classList.add("message", "problem");
        const headingTemplate = document.createElement("h3");
        headingTemplate.innerHTML = "watch_dog violation <span>&frown;</span>";
        const detailsTemplate = document.createElement("p");
        detailsTemplate.innerHTML = "We just ran into a problem.<br /><span>Error Code: (0 x EA1LPR1Z6ES009)</span><br />Probably you did something you were not meant to. Now we have to go through a long maintainance process to make is up and running.<br/>Take a look at the StackTrace below.";
        const codeTemplate = document.createElement("div");
        codeTemplate.innerHTML = `<code>global _start\n    <br />\n    section .text<br />\n    _start:\n    <br />\n    <span> mov rax, 1 ; write(</span><br />\n    <span>mov rdi, 1 ; STDOUT_FILENO</span>\n    <br />\n    <span>mov rsi, msg ; \"0 x EA1LPR1Z6ES009\"</span>\n    <br />\n    <span>mov rdx, msglen ; sizeof(\"0 x EA1LPR1Z6ES009\")</span>\n    <br />\n    <span>mov rax, 60(</span>\n    <br />\n    <span>mov rdi, 0</span>\n    <br />\n    <span>syscall</span>\n    <br />\n    EXIT_STATUS, -092716653543 x 7</code>`;
        destroyTemplate.appendChild(headingTemplate);
        destroyTemplate.appendChild(detailsTemplate);
        destroyTemplate.appendChild(codeTemplate);
        this.container.appendChild(destroyTemplate);
    }
}
