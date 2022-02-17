var url = "https://api.infinitybotlist.com/stats"; // URL of API
fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
        var approvedBotsHTML = document.getElementById("approvedBots");
        var approved = `${`${data.approved_bots + " Approved"}` || "💻 404"}`;
        approvedBotsHTML.innerHTML += approved;
    });
  } else {
    console.log("Response failed?");
  }
});

