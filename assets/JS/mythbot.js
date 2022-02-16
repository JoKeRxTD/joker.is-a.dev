var url = "https://japi.rest/discord/v1/application/466381571335913484"; // URL of API
fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
        var serverCountHTML = document.getElementById("serverCount");
        var servers = `${`${data.data.bot.approximate_guild_count + " Servers"}` || "💻 404"}`;
        serverCountHTML.innerHTML += servers;
    });
  } else {
    console.log("Response failed?");
  }
});

