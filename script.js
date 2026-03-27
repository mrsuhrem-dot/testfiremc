function updateStats() {

  fetch("https://api.mcsrvstat.us/2/mc.hypixel.net")
    .then(res => res.json())
    .then(data => {
      document.getElementById("players").innerText =
        data.players.online + " players online";
    });

  fetch("https://discord.com/api/guilds/YOUR_SERVER_ID/widget.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("discord").innerText =
        data.presence_count + " users online";
    });

}

updateStats();
setInterval(updateStats, 30000);
