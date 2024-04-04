localStorage.removeItem("json");

function caseCheck(check){
    switch (check) {
        case 0:
            var fetchJson = "https://raw.githubusercontent.com/Tijl-Pleuger-Vista/website.github.io/main/public/leet-game/assets/json/pvo-1.json"
            // var fetchJson = "./assets/json/pvo-1.json"

            wait(fetchJson)
        break;
        case 1:
            var fetchJson = "https://raw.githubusercontent.com/Tijl-Pleuger-Vista/website.github.io/main/public/leet-game/assets/json/dungeon.json"
            wait(fetchJson)
        break;
        default:
        console.log(`Meow`);
    }
}

async function wait(fetchJson) {
    var checkJson = await fetch(fetchJson)
    var checkJson = await checkJson.json();
    localStorage.setItem("json", JSON.stringify(checkJson));
    console.log(checkJson)
    window.location.href = "http://127.0.0.1:5500/public/leet-game/game.html";
}
