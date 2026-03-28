const smOnId = document.getElementById("smOn");
const smOffId = document.getElementById("smOff");
const idNsfw1 = document.getElementById("nsfw1")
const idNsfw2 = document.getElementById("nsfw2")

let safeMode = localStorage.getItem("safeMode") === "true";

if (safeMode) {
        console.log("🔒 SAFE MOD IS ON!");

        smOffId.style.display = "inline-block";
        smOnId.style.display = "none";

        idNsfw1.style.display = "none";
        idNsfw2.style.display = "none";
    } else {
        console.log("🔓 SAFE MOD IS OFF!");

        smOnId.style.display = "inline-block";
        smOffId.style.display = "none";
};

function safeModeOn() {
    let safeMode = "true";
    localStorage.setItem("safeMode", safeMode);
    location.reload();
}

function safeModeOff() {
    let safeMode = "false";
    localStorage.setItem("safeMode", safeMode);
    location.reload();
}