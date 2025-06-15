// ContactComponent.js
export default class ContactComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const contactTemplate = document.createElement("div");
        contactTemplate.classList.add("contact");
        contactTemplate.innerHTML = `
        <p>In case you need me, drop a message via <a href=\"mailto:rishabdugar.jain@gmail.com\">rishabdugar.jain@gmail.com</a> or call me at +91-9330549405. I'll get back to you as soon as I can.<br>Are you social? Below are both clickable <span style=\"color:aqua;\">links</span> & <span style=\"color:aqua;\">usable commands</span>.</p>\n\n        <ul>\n            <li><span style=\"color: rgb(9, 197, 9);\">&rArr;</span> <a href=\"https://www.linkedin.com/in/rishab-dugar/\" target=\"_blank\">LinkedIn</a></li>\n            <li><span style=\"color: rgb(9, 197, 9);\">&rArr;</span> <a href=\"https://github.com/kingrishabdugar\" target=\"_blank\">GitHub</a></li>\n            <li><span style=\"color: rgb(9, 197, 9);\">&rArr;</span> <a href=\"https://leetcode.com/kingrishabdugar/\" target=\"_blank\">LeetCode</a></li>\n            <li><span style=\"color: rgb(9, 197, 9);\">&rArr;</span> <a href=\"https://www.codechef.com/users/kingrishabdugar\" target=\"_blank\">CodeChef</a></li>\n            <li><span style=\"color: rgb(9, 197, 9);\">&rArr;</span> <a href=\"https://www.geeksforgeeks.org/user/kingrishabdugar/\" target=\"_blank\">GeeksForGeeks</a></li>\n            <li><span style=\"color: rgb(9, 197, 9);\">&rArr;</span> <a href=\"https://linktr.ee/rishabdugar\" target=\"_blank\">Linktree</a></li>\n        </ul>
        <p><span style = \"color: aqua;\">Just type those social media names in the terminal as a command & it'll take you to the respective page.</span> <br/>\n        Don't hesitate to send me a <span style = \"color: #ffffff;\">'Hello World'</span> via any of those!</p>
        `;
        this.container.appendChild(contactTemplate);
    }
}
