// main.js (modularized ES module entry point)
import HelperModule from './HelperModule.js';
import UUIDComponent from './UUIDComponent.js';
import AboutComponent from './AboutComponent.js';
import { ClearComponent, MessageEraser } from './ClearComponent.js';
import ContactComponent from './ContactComponent.js';
import ExceptionComponent from './ExceptionComponent.js';
import HelpComponent from './HelpComponent.js';
import ShellComponent from './ShellComponent.js';
import SkillsComponent from './SkillsComponent.js';
import ProjectsComponent from './ProjectsComponent.js';
import ExperienceComponent from './ExperienceComponent.js';
import AchievementsComponent from './AchievementsComponent.js';
import SudoRmRfComponent from './SudoRmRfComponent.js';

const userIdHolder = document.querySelector('.session-userid');
const terminal = document.querySelector('#terminal');
const container = document.querySelector('#insert');
const footer = document.querySelector('.footer');
const mainBody = document.querySelector('.container');
const maximizeBox = document.querySelector('.maximize-terminal');
const messages = document.querySelector('.message');
const minimize = document.getElementById('minimize');
const close = document.getElementById('close');
const maximize = document.getElementById('maximize');

// Instantiate components
const shell = new ShellComponent(container);
const help = new HelpComponent(container);
const clear = new ClearComponent(container);
const message_eraser = new MessageEraser(messages);
const exception = new ExceptionComponent(container);
const about = new AboutComponent(container);
const skills = new SkillsComponent(container);
const projects = new ProjectsComponent(container);
const experience = new ExperienceComponent(container);
const achievements = new AchievementsComponent(container);
const contact = new ContactComponent(container);
const destroy = new SudoRmRfComponent(terminal);
const userid = new UUIDComponent(userIdHolder);
const helper_module = new HelperModule();
const sessionId = helper_module.userIdGenerator();

window.addEventListener('DOMContentLoaded', () => {
    maximizeBox.classList.add('flip');
    userid.render(sessionId);

    // --- Intro typing and spinner animation ---
    const typingEl = document.querySelector('.intro-typing');
    const spinnerEl = document.querySelector('.intro-spinner');
    const introRest = document.querySelector('.intro-rest');
    const runShellAndRest = () => {
        // Show a CLI-style "ready" message before revealing the rest
        let readyMsg = document.createElement('div');
        readyMsg.className = 'intro-ready';
        readyMsg.textContent = 'Good to go! Portfolio ready. Try out the first command!';
        readyMsg.style.opacity = 0;
        typingEl.parentNode.parentNode.insertBefore(readyMsg, typingEl.parentNode.nextSibling);
        setTimeout(() => {
            readyMsg.style.transition = 'opacity 0.6s';
            readyMsg.style.opacity = 1;
            setTimeout(() => {
                if (introRest) {
                    introRest.style.display = 'block';
                    introRest.style.opacity = 1;
                }
                shell.render();
            }, 900);
        }, 400);
    };
    if (typingEl && spinnerEl && introRest) {
        const text = 'Initializing Portfolio…';
        let idx = 0;
        function typeNext() {
            typingEl.innerHTML = '<span style="color:#27c93f">' + text.slice(0, idx) + '</span>';
            if (idx < text.length) {
                idx++;
                setTimeout(typeNext, 55);
            } else {
                runSpinner();
            }
        }
        typeNext();
        function runSpinner() {
            const spinnerChars = ['|', '/', '-', '\\'];
            let spinIdx = 0;
            let spinCount = 0;
            spinnerEl.style.color = '#27c93f';
            spinnerEl.style.display = 'inline-block';
            spinnerEl.style.marginLeft = '0.5em';
            spinnerEl.style.fontWeight = 'bold';
            spinnerEl.style.fontFamily = 'monospace';
            spinnerEl.style.fontSize = 'inherit';
            const interval = setInterval(() => {
                spinnerEl.textContent = spinnerChars[spinIdx % spinnerChars.length];
                spinIdx++;
                spinCount++;
                if (spinCount > 32) { // ~2.5 seconds
                    clearInterval(interval);
                    spinnerEl.textContent = '✔';
                    spinnerEl.style.color = '#27c93f';
                    setTimeout(() => {
                        // Hide the intro-init (typing + spinner) after a short delay
                        const introInit = typingEl.closest('.intro-init');
                        if (introInit) introInit.style.display = 'none';
                        runShellAndRest();
                    }, 500);
                }
            }, 70);
        }
    } else {
        // fallback if intro elements not found
        shell.render();
    }

    // Disable right-click on terminal window
    const terminal = document.getElementById('terminal');
    if (terminal) {
        terminal.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        // Disable copy, cut, paste
        ['copy', 'cut', 'paste'].forEach(evt => {
            terminal.addEventListener(evt, function(e) {
                e.preventDefault();
            });
        });
    }

    // --- Linux-style sound popup logic ---
    const soundPopup = document.getElementById('sound-popup');
    const soundYes = document.getElementById('sound-yes');
    const soundNo = document.getElementById('sound-no');
    let soundAllowed = false;
    // Show popup on first load if sound permission not set
    if (soundPopup && soundYes && soundNo) {
        soundPopup.style.display = 'flex';
        soundYes.focus();
        soundYes.addEventListener('click', () => {
            soundAllowed = true;
            soundPopup.style.display = 'none';
            // Play sound
            const audio = new Audio("mixkit-calm-thunderstorm-in-the-jungle-2415.wav");
            audio.loop = true;
            audio.play();
        });
        soundNo.addEventListener('click', () => {
            soundAllowed = false;
            soundPopup.style.display = 'none';
        });
        // Keyboard accessibility: Enter/Arrow keys
        soundPopup.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                if (document.activeElement === soundYes) {
                    soundNo.focus();
                } else {
                    soundYes.focus();
                }
            } else if (e.key === 'Enter') {
                document.activeElement.click();
            }
        });
    }
});

// --- Command history state ---
let commandHistory = [];
let historyIndex = -1;
let tempCurrentInput = '';

// --- Command list for auto-completion ---
const COMMAND_LIST = [
    'about', 'skills', 'experience', 'projects', 'achievements', 'contact',
    'help', 'cls', 'clear', 'exit', 'reload', 'linkedin', 'github', 'leetcode',
    'codechef', 'gfg', 'geeksforgeeks', 'linktree', 'sudo rm -rf'
];
let tabMatches = [];
let tabIndex = 0;
let lastTabInput = '';

container.addEventListener('keydown', (e) => {
    const eventTarget = e.target;
    if (eventTarget.className === 'command') {
        // --- Tab auto-completion logic ---
        if (e.key === 'Tab') {
            e.preventDefault();
            const inputVal = eventTarget.value.trim().toLowerCase();
            // If new input or not cycling, find matches
            if (inputVal !== lastTabInput) {
                tabMatches = COMMAND_LIST.filter(cmd => cmd.startsWith(inputVal) && inputVal.length > 0);
                tabIndex = 0;
                lastTabInput = inputVal;
            }
            if (tabMatches.length > 0) {
                eventTarget.value = tabMatches[tabIndex];
                tabIndex = (tabIndex + 1) % tabMatches.length;
            }
            return;
        }
        // Reset tab completion state on other keys (except Shift, Ctrl, Alt, etc.)
        if (!['Shift','Control','Alt','Meta','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','PageUp','PageDown','CapsLock','Tab'].includes(e.key)) {
            tabMatches = [];
            tabIndex = 0;
            lastTabInput = '';
        }
        // Only handle history navigation if input is focused
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown"].includes(e.key)) {
            if (commandHistory.length === 0) return;
            if (historyIndex === -1) tempCurrentInput = eventTarget.value;
            if (e.key === "ArrowUp" || e.key === "PageUp") {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    eventTarget.value = commandHistory[commandHistory.length - 1 - historyIndex];
                }
            } else if (e.key === "ArrowDown" || e.key === "PageDown") {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    eventTarget.value = commandHistory[commandHistory.length - 1 - historyIndex];
                } else if (historyIndex === 0) {
                    historyIndex = -1;
                    eventTarget.value = tempCurrentInput;
                }
            }
        }
    }
});

container.addEventListener('keyup', (e) => {
    e.preventDefault();
    const eventTarget = e.target;
    if (eventTarget.className === 'command' && e.key === 'Enter') {
        eventTarget.disabled = true;
        const input_value = eventTarget.value.toString().toLowerCase();
        // --- Push to command history if not empty or whitespace ---
        if (input_value && !/^\s*$/.test(input_value)) {
            commandHistory.push(eventTarget.value);
        }
        historyIndex = -1;
        tempCurrentInput = '';

        switch (input_value) {
            case 'reload':
                window.location.reload();
                break;
            case 'help':
                help.render();
                shell.render();
                break;
            case 'about':
                about.render();
                shell.render();
                break;
            case 'skills':
                skills.render();
                shell.render();
                break;
            case 'experience':
                experience.render();
                shell.render();
                break;
            case 'projects':
                projects.render();
                shell.render();
                break;
            case 'achievements':
                achievements.render();
                shell.render();
                break;
            case 'contact':
                contact.render();
                shell.render();
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/rishab-dugar/', '_blank');
                shell.render();
                break;
            case 'github':
                window.open('https://github.com/kingrishabdugar', '_blank');
                shell.render();
                break;
            case 'leetcode':
                window.open('https://leetcode.com/kingrishabdugar/', '_blank');
                shell.render();
                break;
            case 'codechef':
                window.open('https://www.codechef.com/users/kingrishabdugar', '_blank');
                shell.render();
                break;
            case 'gfg':
            case 'geeksforgeeks':
                window.open('https://www.geeksforgeeks.org/user/kingrishabdugar/', '_blank');
                shell.render();
                break;
            case 'linktree':
                window.open('https://linktr.ee/rishabdugar', '_blank');
                shell.render();
                break;
            case 'cls':
            case 'clear':
                message_eraser.render();
                clear.render();
                shell.render();
                break;
            case 'sudo rm -rf':
                destroy.render();
                break;
            case 'exit':
                quit_terminal();
                break;
            default:
                if (helper_module.isWhitespace(input_value)) {
                    shell.render();
                } else {
                    exception.render(input_value);
                    shell.render_x();
                }
                break;
        }
    }
});

minimize.addEventListener('click', (e) => {
    e.preventDefault();
    terminal.classList.add('flip');
    maximizeBox.classList.remove('flip');
});

if (maximize) {
    maximize.addEventListener('click', () => {
        terminal.classList.toggle('fullscreen');
        maximize.focus();
    });
}

maximizeBox.addEventListener('click', () => {
    maximizeBox.classList.add('flip');
    terminal.classList.remove('flip');
    shell.shellFocus();
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    quit_terminal();
});

function quit_terminal() {
    if (terminal.parentElement) {
        terminal.parentElement.removeChild(terminal);
    }
    footer.classList.add('footer-on-exit', 'vertical-center');
}

mainBody.addEventListener('click', (e) => {
    const targetButton = e.target;
    if (targetButton.className === 'restore-button') {
        if (targetButton.parentElement) {
            targetButton.parentElement.removeChild(targetButton);
        }
        footer.classList.remove('footer-on-exit', 'vertical-center');
        location.reload();
    }
});

// For social profile open command (not used in switch, but available)
function open_render(input_value) {
    helper_module.openSocialProfile(input_value);
    shell.render();
}
