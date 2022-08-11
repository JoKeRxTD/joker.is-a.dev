var url = "https://api.lanyard.rest/v1/users/116730818822537225"; // URL of API
fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var lanyardStatusHTML = document.getElementById("lanyard_status");
      var spotify = `${
        data.data.activities[0].name === "Code"
            ? `<p><i class="fad fa-code text-blue-500"></i>Working:<br>&nbsp;${data.data.activities[0].details
                .split("", 55)
                .reduce(
                  (o, c) => (o.length === 35 ? `${o}${c}` : `${o}${c}`),
                  ""
                )} ${
                data.data.activities[0].state
                  ? data.data.activities[0].state
                  : "🍿 Eating or 💤 Sleeping" 
              }</p>`
        : data.data.activities[1].name === "Code"
            ? `<p><i class="fad fa-code text-blue-500"></i>Working:<br>&nbsp;${data.data.activities[1].details
                .split("", 55)
                .reduce(
                  (o, c) => (o.length === 35 ? `${o}${c}` : `${o}${c}`),
                  ""
                )} ${
                data.data.activities[1].state
                  ? data.data.activities[1].state
                  : "🍿 Eating or 💤 Sleeping" 
              }</p>`
        : data.data.activities[2].name === "Code"
            ? `<p><i class="fad fa-code text-blue-500"></i>Working:<br>&nbsp;${data.data.activities[2].details
                .split("", 55)
                .reduce(
                  (o, c) => (o.length === 35 ? `${o}${c}` : `${o}${c}`),
                  ""
                )} ${
                data.data.activities[2].state
                  ? data.data.activities[2].state
                  : "🍿 Eating or 💤 Sleeping" 
              }</p>`
          : `<p>&nbsp;Status:&nbsp;<span class="font-bold"><center>🍿 Eating,💤 Sleeping or 🎵 Chilling</center></p>`
      }`;
      lanyardStatusHTML.innerHTML += spotify;
    });
  } else {
    console.log("Response failed?");
  }
});



fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var discordStatusHTML = document.getElementById("discord_status");
      var status = `${
        data.data.discord_status === "online"
          ? "<i class='fad fa-circle text-green-500 animate-pulse' title='Online'></i>"
          : data.data.discord_status === "dnd"
          ? "<i class='fad fa-circle text-red-500 animate-pulse' title='Do Not Disturb'></i>"
          : data.data.discord_status === "idle"
          ? "<i class='fad fa-circle text-yellow-500 animate-pulse' title='Idle'></i>"
          : "<i class='fad fa-circle text-gray-500 animate-pulse' title='Offline'></i>"
      }`;
      discordStatusHTML.innerHTML += status;
    });
  } else {
    console.log("Response failed?");
  }
});

fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var discordStatusHTML = document.getElementById("discordStatus_socials");
      var status = `${
        data.data.active_on_discord_desktop
          ? data.data.activities[0].emoji.name +
            ` ${data.data.activities[0].state
              .split("", 20)
              .reduce(
                (o, c) => (o.length === 19 ? `${o}${c}...` : `${o}${c}`),
                ""
              )}`
          : "JoKeR#0001"
      }`;
      discordStatusHTML.innerHTML += status;
    });
  } else {
    console.log("Response failed?");
  }
});

fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var timestamp = moment(data.data.activities[1].timestamps.start);
      console.log(timestamp);
      var activity = document.getElementById("activities_joker");
      var card = `${`<div class="
			text-center
			lg:text-left
			font-regular
			tracking-widest
			uppercase
			text-sm text-gray-500
			mt-16
			mb-6
			">
			Activity
		  </div><div class="row items-center justify-center mb-8"><div class="glass text-white px-6 sm:px-4 col mb-8 w-full md:w-1/2 lg:w-1/3"  >
			<div class="flex items-center py-4 transform hover:scale-105 duration-200 shadow rounded-md px-6 sm:px-4 hover:bg-gray-100 cursor-pointer opacity" style="background-color: #0e141d; border-radius: 1vw; ${
        data.data.spotify && data.data.activities[1].name === "Spotify"
          ? `background-image: url(${data.data.spotify.album_art_url}); background-position: center; `
          : ""
      }>
			  <div class="flex items-center">
				<img draggable="false" class="h-16 w-16 rounded-md" src=${
          data.data.listening_to_spotify &&
          data.data.activities[1].name === "Spotify"
            ? `${
                "https://i.scdn.co/image/" +
                `${
                  data.data.activities[1].assets.large_image.split(
                    "spotify:"
                  )[1]
                }`
              }`
            : `https://cdn.discordapp.com/app-assets/${data.data.activities[1].application_id}/${data.data.activities[1].assets.large_image}`
        } alt="Large Image Icon" />
				${
          data.data.activities[1].assets.small_image
            ? `<img draggable="false" class="rounded-full" style="width: 25px; height: 25px; margin-left: -20px;margin-bottom: -50px;" src=${`https://cdn.discordapp.com/app-assets/${data.data.activities[1].application_id}/${data.data.activities[1].assets.small_image}`} alt="Small Image Icon" />`
            : ""
        }
				<p class="ml-4 text-sm flex flex-col justify-between leading-snug">
					<span class="opacity-75">${
            data.data.listening_to_spotify &&
            data.data.activities[1].name === "Code"
              ? `🎶 ${data.data.activities[1].details
                  .split("", 35)
                  .reduce(
                    (o, c) => (o.length === 35 ? `${o}${c}` : `${o}${c}`),
                    ""
                  )}</span>`
              : `${data.data.activities[1].details
                  .split("", 35)
                  .reduce(
                    (o, c) => (o.length === 35 ? `${o}${c}` : `${o}${c}`),
                    ""
                  )}</span>`
          }
					${
            data.data.listening_to_spotify &&
            data.data.activities[1].name === "Spotify"
              ? data.data.activities[1].state
                ? `<span class="opacity-75">😃 ${data.data.activities[1].state
                    .split("", 35)
                    .reduce(
                      (o, c) => (o.length === 35 ? `${o}${c}` : `${o}${c}`),
                      ""
                    )}</span>`
                : ""
              : data.data.activities[1].state
              ? `<span class="opacity-75">${data.data.activities[1].state
                  .split("", 35)
                  .reduce(
                    (o, c) => (o.length === 35 ? `${o}${c}` : `${o}${c}`),
                    ""
                  )}</span>`
              : ""
          }
					<span class="opacity-75">elapsed</span>
				</p>
			</div>
			</div>
			</div>
		</div>`}`;
      activity.innerHTML += card;
    });
  } else {
    console.log("Response failed?");
  }
});
function moment(start) {
  throw new Error("Function not implemented.");
}

