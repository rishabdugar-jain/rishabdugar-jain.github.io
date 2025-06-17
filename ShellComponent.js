// ShellComponent.js
export default class ShellComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const shellTemplate = document.createElement("div");
        shellTemplate.classList.add("shell");
        const shellTitle = document.createElement("label");
        shellTitle.classList.add("title");
        shellTitle.htmlFor = "command-input";
        shellTitle.innerHTML = `
        <span style=\"color: #f5084f;\"><span class=\"arrow\">⚜️</span>root</span>@rishabdugar $  `;
        const shellInput = document.createElement("input");
        shellInput.id = "command-input";
        shellInput.classList.add("command");
        shellInput.setAttribute("type", "text");
        shellTemplate.appendChild(shellTitle);
        shellTemplate.appendChild(shellInput);
        this.container.appendChild(shellTemplate);
        this.shellFocus();
    }
    render_x() {
        const shellTemplate = document.createElement("div");
        shellTemplate.classList.add("shell");
        const shellTitle = document.createElement("label");
        shellTitle.classList.add("title");
        shellTitle.htmlFor = "command-input";
        shellTitle.innerHTML = `\n        <span style=\"color: #f5084f;\"><span style=\"color:#64f105;\">⚜️</span> user</span>@rishabdugar $  `;
        const shellInput = document.createElement("input");
        shellInput.id = "command-input";
        shellInput.classList.add("command");
        shellInput.setAttribute("type", "text");
        shellTemplate.appendChild(shellTitle);
        shellTemplate.appendChild(shellInput);
        this.container.appendChild(shellTemplate);
        this.shellFocus();
    }
    shellFocus() {
        const target = document.querySelectorAll(".command");
        const lastInput = target[target.length - 1];
        lastInput.focus();
    }
}
