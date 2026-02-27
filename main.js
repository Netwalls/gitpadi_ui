const terminalContent = document.getElementById('terminal-content');

const lines = [
    { text: 'npx gitpadi', type: 'input', delay: 1000 },
    { text: '▸ Initializing GitPadi engine ✓', type: 'cyan', delay: 500 },
    { text: '▸ Loading command modules ✓', type: 'cyan', delay: 400 },
    { text: '▸ Establishing GitHub connection ✓', type: 'cyan', delay: 600 },
    { text: '▸ Systems online ✓', type: 'green', delay: 300 },
    { text: '', type: 'line', delay: 200 },
    { text: '⟨ GITPADI MODE SELECTOR ⟩', type: 'magenta', delay: 500 },
    { text: '✔ Choose your path: 🛠️ Maintainer Mode', type: 'line', delay: 800 },
    { text: '  Manage issues, PRs, contributors...', type: 'dim', delay: 1000 }
];

async function typeEffect() {
    terminalContent.innerHTML = '';

    for (const line of lines) {
        const div = document.createElement('div');
        div.className = 'line ' + (line.type || '');

        if (line.type === 'input') {
            const prompt = document.createElement('span');
            prompt.className = 'prompt';
            prompt.innerText = '$';
            div.appendChild(prompt);

            const textSpan = document.createElement('span');
            div.appendChild(textSpan);
            terminalContent.appendChild(div);

            for (let i = 0; i < line.text.length; i++) {
                textSpan.innerText += line.text[i];
                await new Promise(r => setTimeout(r, 60));
            }
        } else {
            div.innerText = line.text;
            terminalContent.appendChild(div);
        }

        await new Promise(r => setTimeout(r, line.delay));
    }

    const cursor = document.createElement('div');
    cursor.className = 'line blinking-cursor';
    cursor.innerText = '_';
    terminalContent.appendChild(cursor);

    // Restart after a while
    setTimeout(typeEffect, 5000);
}

// Start animation when page loads
window.addEventListener('load', typeEffect);

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
