// ProjectsComponent.js
export default class ProjectsComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const projectsTemplate = document.createElement("div");
        projectsTemplate.classList.add("projects");
        projectsTemplate.innerHTML = `
        <ul>\n            <li><span style=\"color: #f5084f;\">&starf;</span> Green-Leaf-Gourmet: A full-stack Restaurant Management application with inventory and billing automation.</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> UAV for Precision Agriculture: Developed and simulated a UAV spraying system with automated land boundary detection.</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> Voice-to-Voice GenAI Multi-LLM Bot: Real-time voice dialogue with switchable LLM backends.</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> GenAI Stock Analysis Agent: Aggregates & validates multi-source financial data for automated insights.</li>\n        </ul>
        `;
        this.container.appendChild(projectsTemplate);
    }
}
