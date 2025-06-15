// ClearComponent.js
import HelperModule from './HelperModule.js';
import { typeText } from './HelperModule.js';

export class ClearComponent {
    constructor(container) {
        this.container = container;
    }
    async render() {
        const helper = new HelperModule();
        Array.from(this.container.children).forEach(child => helper.clear_element(child));
        // Typing effect for clear message
        const clearMsg = document.createElement('div');
        clearMsg.className = 'clear-msg';
        this.container.appendChild(clearMsg);
        await typeText(clearMsg, 'Terminal cleared.', 15);
        setTimeout(() => helper.clear_element(clearMsg), 900);
    }
}

export class MessageEraser {
    constructor(container) {
        this.container = container;
    }
    render() {
        try {
            const helper = new HelperModule();
            Array.from(this.container.children).forEach(child => helper.clear_element(child));
            helper.clear_element(this.container);
        } catch (e) {}
    }
}
