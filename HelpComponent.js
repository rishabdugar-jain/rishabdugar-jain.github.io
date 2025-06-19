export default class HelpComponent {
  constructor(container) {
    this.container = container;
  }

  render() {
    // Create main help container
    const helpTemplate = document.createElement("div");
    helpTemplate.id = "help";

    // Build command list
    const ul = document.createElement("ul");
    ul.innerHTML = `
      <li><span class="arrow">⪢</span> <b>about</b> <span class="help-desc">— Who is this mysterious developer?</span></li>
      <li><span class="arrow">⪢</span> <b>skills</b> <span class="help-desc">— Peek at my technical arsenal</span></li>
      <li><span class="arrow">⪢</span> <b>experience</b> <span class="help-desc">— Chronicles of my code crusades</span></li>
      <li><span class="arrow">⪢</span> <b>projects</b> <span class="help-desc">— Marvel at my engineered marvels</span></li>
      <li><span class="arrow">⪢</span> <b>achievements</b> <span class="help-desc">— Feats that made the bards sing</span></li>
      <li><span class="arrow">⪢</span> <b>contact</b> <span class="help-desc">— Summon me across the ether</span></li>
      <li><span class="arrow">⪢</span> <b>help</b> <span class="help-desc">— Display this legendary scroll</span></li>
      <li><span class="arrow">⪢</span> <b>cls</b> <span class="help-desc">— Polish the looking glass (clear screen)</span></li>
      <li><span class="arrow">⪢</span> <b>exit</b> <span class="help-desc">— Vanish into the mist (close terminal)</span></li>
    `;
    helpTemplate.appendChild(ul);

    // Random Tip
    const tipP = document.createElement("p");
    tipP.className = "help-tip";
    const tips = [
      "You can use <span class='tip-highlight'>Tab</span> for command auto-completion!",
      "Try arrow keys <span class='tip-highlight'>&uarr;/&darr;</span> to browse your command history.",
      "Type <span class='tip-highlight'>'sudo rm -rf'</span> only if you wish to summon chaos. (Not recommended!)",
      "All commands are <span class='tip-highlight'>case-insensitive</span>!",
      "This CLI is best viewed in a steampunk drawing room with a cup of Earl Grey.",
      "Feeling lost? Type <span class='tip-highlight'>'help'</span> anytime for guidance.",
      "Feeling lost? Type <span style='color:aquamarine'>'help'</span> anytime for guidance.",
      "Some commands open portals (links) in new tabs. Magic!",
    ];
    const emoji = document.createElement("span");
    emoji.textContent = "💡 ";
    emoji.style.fontStyle = "normal";
    tipP.innerHTML = tips[Math.floor(Math.random() * tips.length)];
    tipP.insertBefore(emoji, tipP.firstChild);
    helpTemplate.appendChild(tipP);

    // Warning / Easter Egg
    const warn = document.createElement("p");
    warn.innerHTML = `
      <span class="arrow-error">✗</span> <b>Never</b> type <span class="help-desc">sudo rm -rf</span> – unless you want to meet the system reaper!<br>
      <span style="font-size:0.95em;color:#aaa;">(Disclaimer: No files were harmed in the making of this portfolio.)</span>
    `;
    helpTemplate.appendChild(warn);

    // Call to Action
    const cta = document.createElement("p");
    cta.innerHTML = `<span style="color:aquamarine;">Ready to explore? Type a command above!</span>`;
    helpTemplate.appendChild(cta);

    // Append help to container
    this.container.appendChild(helpTemplate);
  }
}
