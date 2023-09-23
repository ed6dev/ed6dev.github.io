function openDiscordServer() {
  const discordServerLink = "https://discord.com/invite/huge";
  window.open(discordServerLink, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const vouchesCountElement = document.getElementById("vouchesCount");
  if (!vouchesCountElement) {
    return console.log("Element Not Found!")
  }

  // Fetch the vouches count from your server
   fetch("/get-vouches-count")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      vouchesCountElement.textContent = data.count;
    })
    .catch((error) => {
      console.log("Error fetching vouches count:", error);
      vouchesCountElement.textContent = "Error";
    });
});  
