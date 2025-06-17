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
      <li><span class="arrow">⪢</span> <b>about</b> <span style="color:#fce283;">— Who is this mysterious developer?</span></li>
      <li><span class="arrow">⪢</span> <b>skills</b> <span style="color:#fce283;">— Peek at my technical arsenal</span></li>
      <li><span class="arrow">⪢</span> <b>experience</b> <span style="color:#fce283;">— Chronicles of my code crusades</span></li>
      <li><span class="arrow">⪢</span> <b>projects</b> <span style="color:#fce283;">— Marvel at my engineered marvels</span></li>
      <li><span class="arrow">⪢</span> <b>achievements</b> <span style="color:#fce283;">— Feats that made the bards sing</span></li>
      <li><span class="arrow">⪢</span> <b>contact</b> <span style="color:#fce283;">— Summon me across the ether</span></li>
      <li><span class="arrow">⪢</span> <b>help</b> <span style="color:#fce283;">— Display this legendary scroll</span></li>
      <li><span class="arrow">⪢</span> <b>cls</b> <span style="color:#fce283;">— Polish the looking glass (clear screen)</span></li>
      <li><span class="arrow">⪢</span> <b>exit</b> <span style="color:#fce283;">— Vanish into the mist (close terminal)</span></li>
    `;
    helpTemplate.appendChild(ul);

    // Random Tip
    const tipP = document.createElement("p");
    tipP.style.color = "#64f105";
    tipP.style.fontStyle = "italic";
    const tips = [
      "You can use <span style='color:aquamarine'>Tab</span> for command auto-completion!",
      "Try arrow keys <span style='color:aquamarine'>&uarr;/&darr;</span> to browse your command history.",
      "Type <span style='color:aquamarine'>'sudo rm -rf'</span> only if you wish to summon chaos. (Not recommended!)",
      "All commands are <span style='color:aquamarine'>case-insensitive</span>!",
      "This CLI is best viewed in a steampunk drawing room with a cup of Earl Grey.",
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
      <span class="arrow-error">✗</span> <b>Never</b> type <span style="color:#fce283;">sudo rm -rf</span> – unless you want to meet the system reaper!<br>
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
