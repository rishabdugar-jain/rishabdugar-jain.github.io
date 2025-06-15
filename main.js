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
    shell.render();
});

container.addEventListener('keyup', (e) => {
    e.preventDefault();
    const eventTarget = e.target;
    if (eventTarget.className === 'command' && e.key === 'Enter') {
        eventTarget.disabled = true;
        const input_value = eventTarget.value.toString().toLowerCase();
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
