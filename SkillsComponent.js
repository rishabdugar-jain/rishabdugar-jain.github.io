// SkillsComponent.js
export default class SkillsComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const skillsTemplate = document.createElement("div");
        skillsTemplate.classList.add("skills");
        skillsTemplate.innerHTML = `
        <p>My technical skills include:</p>\n        <ul>\n            <li><span style=\"color: #f5084f;\">&starf;</span> Programming Languages: C++ | Java | Python | JavaScript | SQL</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> Cloud & AI/ML: AWS | Generative AI | RAG | LangChain | LangGraph | LLMs | Agentic/MultiAgentic AI | MCP | VectorDB</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> Database & Distributed Systems: MySQL | VectorDB (ChromaDB, Pinecone, AWS Opensearch etc.) | NoSQL | (familiar) Hadoop | PySpark | Kafka</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> Fundamentals: Data Structures & Algorithms | OOP | Computer Vision</li>\n        </ul>\n        <p style=\"color: #64f105;\"><span style=\"color: #fec304;\">&rArr;</span> Always learning and expanding my skillset.</p>
        `;
        this.container.appendChild(skillsTemplate);
    }
}
