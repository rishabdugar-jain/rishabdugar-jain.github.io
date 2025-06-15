// HelperModule.js
// Minimal typing effect for CLI output
export function typeText(element, text, speed = 15) {
    element.textContent = '';
    return new Promise(resolve => {
        let i = 0;
        function typeNext() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeNext, speed);
            } else {
                resolve();
            }
        }
        typeNext();
    });
}

export default class HelperModule {
    userIdGenerator() {
        const dummyText = "2xxx  x0xx xx0x xxx9 : x5xx : 1xx9";
        return dummyText.replace(/[xy]/g, function (char) {
            const random = (Math.random() * 16) | 0;
            const variable = char == "x" ? random : (random & 0x3) | 0x8;
            return variable.toString(16);
        });
    }
    isWhitespace(input_string) {
        if (
            input_string === "" ||
            input_string === "\t" ||
            input_string === "\n" ||
            input_string === "\r"
        ) {
            return true;
        }
        for (let i = 0; i < input_string.length; i++) {
            if (input_string[i] !== " ") return false;
        }
        return true;
    }
    openSocialProfile(siteName) {
        const url = `https://www.${siteName}.com/kingrishabdugar`;
        window.open(url, "_blank");
    }
    clear_element(element) {
        if (element.parentElement) {
            element.parentElement.removeChild(element);
        }
    }
}
