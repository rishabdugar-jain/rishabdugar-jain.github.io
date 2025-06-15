// HelpComponent.js
import { typeText } from './HelperModule.js';

export default class HelpComponent {
    constructor(container) {
        this.container = container;
    }
    async render() {
        const helpTemplate = document.createElement("div");
        helpTemplate.id = "help";
        const pre = document.createElement("pre");
        pre.style.fontFamily = 'inherit';
        pre.style.fontSize = '1.02rem';
        pre.style.whiteSpace = 'pre-wrap';
        helpTemplate.appendChild(pre);
        this.container.appendChild(helpTemplate);
        const helpText = `Available commands listed below. Type "cls" to clear & "exit" to close terminal.\n\n⪢ About\n⪢ Skills\n⪢ Experience\n⪢ Projects\n⪢ Achievements\n⪢ Contact\n\n✗ Never do a "sudo rm -rf" , cause it will mess our entire internal system !`;
        await typeText(pre, helpText, 15);
    }
}
