// AchievementsComponent.js
export default class AchievementsComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const achievementsTemplate = document.createElement("div");
        achievementsTemplate.classList.add("achievements");
        achievementsTemplate.innerHTML = `
        <ul>\n            <li><span style=\"color: #f5084f;\">&starf;</span> AIR 1 in Jain Vidya Exam I, II (2020, 2021).</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> TCS CodeVita 10: Rank 513 (R1), Global Rank 1979 /136K.</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> Amazon ML Summer School 2022 (0.5% of 19K applicants).</li>\n            <li><span style=\"color: #f5084f;\">&starf;</span> 2x winner ATCI Song iChamp Client Focus Award.</li>\n        </ul>
        `;
        this.container.appendChild(achievementsTemplate);
    }
}
