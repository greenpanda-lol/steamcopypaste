const container = document.getElementById("container");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

console.log("CATEGORY: " + category)

if (category == "nsfw" && safeMode) {
    window.location.href="/index.html";
}

fetch("/pastas.json")
    .then(res => res.json())
    .then(data => {
        renderPastas(data);
    });

function renderPastas(data) {
    let filtered = data;

    if (category) {
        filtered = data.filter(p => p.category === category);
    }

    if (safeMode) {
        filtered = filtered.filter(p => !p.nsfw);
    }

    filtered.forEach(pasta => {
        const el = document.createElement("pre");
        el.textContent = pasta.content;
        container.appendChild(el);
    });

    const statusEl = document.getElementById("status-text");
    if (statusEl) {
        statusEl.textContent = filtered.length + " pasta(s) loaded";
    }
}
