// ExperienceComponent.js
export default class ExperienceComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const experienceTemplate = document.createElement("div");
        experienceTemplate.classList.add("experience");
        experienceTemplate.innerHTML = `
        <p style=\"color: #fec304;\">Accenture | Advanced App Engineering Analyst (Aug 2023 – Present)</p>\n        <ul>\n            <li><span style=\"color: #f5084f;\">&starf;</span> GenAI-Powered Coaching Platform: Developed a real-time GenAI-driven coaching tool for training, enabling scenario-based simulations.</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> AI-Powered Test Case Generator: Automated test case generation with 96.36% accuracy using Generative AI and vector retrieval, reducing manual effort by 90%.</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> QnA Bot Solution Development: Spearheaded a cross-functional team for the development of multiple GenAI powered QnA bots for 3+ clients, achieving a 75% improvement in query resolution time.</li>\n        </ul>
        `;
        this.container.appendChild(experienceTemplate);
    }
}
