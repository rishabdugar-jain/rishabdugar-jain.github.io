// SudoRmRfComponent.js

export default class SudoRmRfComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        // Clear terminal visually
        this.container.innerHTML = '';
        const destroyTemplate = document.createElement("div");
        destroyTemplate.classList.add("message", "problem");

        // Animated deletion sequence
        const animBlock = document.createElement("pre");
        animBlock.style.fontFamily = 'inherit';
        animBlock.style.fontSize = 'inherit';
        animBlock.style.background = 'none';
        animBlock.style.border = 'none';
        animBlock.style.margin = '1em 0 1em 0';
        animBlock.style.color = '#fce283';
        animBlock.style.padding = '0';
        destroyTemplate.appendChild(animBlock);
        this.container.appendChild(destroyTemplate);

        const fakeFiles = [
            '/etc/passwd', '/bin/bash', '/var/log/syslog', '/usr/lib/libc.so', '/home/user/Documents/resume.pdf',
            '/opt/ai/brain.model', '/root/.ssh/id_rsa', '/boot/vmlinuz', '/dev/null', '/sys/kernel/debug',
            '/mnt/backup/important.zip', '/tmp/tmp1234', '/home/user/Pictures/photo.png', '/usr/local/bin/python3',
            '/home/user/.bashrc', '/var/www/html/index.html', '/usr/share/fonts/arial.ttf', '/home/user/.config/settings.json',
            '/lib/systemd/systemd', '/srv/data/db.sqlite', '/lost+found/ghostfile', '/home/user/.vimrc', '/proc/cpuinfo',
            '/media/usb/music.mp3', '/home/user/.cache/thumbnails/large/1234567890.png', '/var/spool/mail/root', '/etc/hosts'
        ];
        const spinner = ['|', '/', '-', '\\'];
        let i = 0, fileIdx = 0;
        const totalFiles = fakeFiles.length;
        const maxShown = 8;
        let shownFiles = [];
        animBlock.innerHTML = '';
        let interval;
        function startSpinner() {
            interval = setInterval(() => {
                const spin = spinner[i % spinner.length];
                if (fileIdx < totalFiles) {
                    shownFiles.push(` ${spin} deleting: ${fakeFiles[fileIdx]}`);
                    if (shownFiles.length > maxShown) shownFiles.shift();
                    animBlock.innerHTML = shownFiles.join('\n');
                    fileIdx++;
                } else {
                    clearInterval(interval);
                    animBlock.innerHTML += '\n' + '... system critical files deleted ...';
                    setTimeout(() => {
                        animBlock.innerHTML += '\n\n<font color="#f5084f">FATAL:</font> System integrity lost. All files deleted.\n<font color="#FFD700">ChronoShell cannot recover from this operation.</font>\n\n<font color="#aaa">[Press any key to continue]</font>';
                        setTimeout(() => {
                            if (animBlock.parentNode) animBlock.parentNode.removeChild(animBlock);
                            const headingTemplate = document.createElement("h3");
                            headingTemplate.innerHTML = "watch_dog violation <span>&frown;</span>";
                            destroyTemplate.appendChild(headingTemplate);
                            const errorBlock = document.createElement("div");
                            errorBlock.classList.add("sudo-error");
                            errorBlock.setAttribute("tabindex", "0");
                            errorBlock.style.outline = "none";
                            errorBlock.innerHTML = `
<font color="red">CRITICAL</font>: Attempted to execute: sudo rm -rf /<br><br>
<font color="yellow">Warning:</font> This command deleted all files and rendered the system inoperable.<br><br>
Operation has been safely aborted by ChronoShell Guardian.<br><br>
<span class="sudo-error-detail">Tip: Never run <code>sudo rm -rf /</code> on a real system! It is catastrophic.</span>
<pre style="margin-top:1em; background:none; border:none; color:inherit; font-size:inherit; font-family:inherit; white-space:pre; padding:0;">
global _start
section .text
_start:
    mov rax, 1 ; write(
    mov rdi, 1 ; STDOUT_FILENO
    mov rsi, msg ; "0 x EA1LPR1Z6ES009"
    mov rdx, msglen ; sizeof("0 x EA1LPR1Z6ES009")
    mov rax, 60(
    mov rdi, 0
    syscall
    EXIT_STATUS, -092716653543 x 7
</pre>
`;
                            destroyTemplate.appendChild(errorBlock);
                        }, 1500);
                    }, 1200);
                }
                i++;
            }, 80);
        }
        startSpinner();
    }
}

