// AboutComponent.js
export default class AboutComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const aboutTemplate = document.createElement("div");
        aboutTemplate.classList.add("intro");
        aboutTemplate.innerHTML = `
        <p>Hello,<br>I'm <span style=\"color: aquamarine;\">Rishab Dugar</span>, a <span style=\"color: #6ef500; font-style:oblique;\">Software Developer and Gen AI Practitioner</span> with hands-on expertise in Python, Java, C++, JavaScript, and SQL. I create cloud-native, serverless automation solutions and Agentic/Multi-Agentic Gen AI applications—leveraging AWS (Lambda, Bedrock, Cognito, OpenSearch), GCP, LangChain/RAG pipelines, vector databases and conversational QnA bots—to streamline workflows and accelerate time-to-value. Additionally, I share insights as a technical content writer, reaching over 4,000+ monthly readers. Grounded in data structures, algorithms, OOPs, and computer science, I thrive on solving complex problems in agile teams while continuously learning new technologies.<br><br>Outside of coding, I’m a lifelong learner and creative thinker—passionate about <span style=\"color: #6ef500;\">open source, problem-solving, and artificial intelligence</span>. When I’m not building solutions, I can be found diving into cosmology, spirituality or history, playing badminton or pool, sketching, or crafting micro-poetry and shayari.
        </p>
        `;
        this.container.appendChild(aboutTemplate);
    }
}

