const contact = document.getElementById("c");
const link = document.getElementById("link");

contact.addEventListener("change", function () {

    if (this.value === "youtube") {
        link.innerHTML =
        '<a href="https://youtube.com/@nidhaleto?si=NQ3_pIhTl2TQulPp" target="_blank">My YouTube Channel</a>';
    }

    else if (this.value === "instagram") {
        link.innerHTML =
        '<a href="https://www.instagram.com/nidhaleto?igsh=MW83Njd5OHE1NGoybA%3D%3D" target="_blank">My Instagram</a>';
    }

    else if (this.value === "tiktok") {
        link.innerHTML =
        '<a href="https://www.tiktok.com/@nidhaleto?is_from_webapp=1&sender_device=pc" target="_blank">My TikTok</a>';
    }

    else if (this.value === "discord") {
        link.innerHTML =
        '<a href="https://discord.gg/D8MuEvN2" target="_blank">My Discord Server</a>';
    }

    else {
        link.innerHTML = "";
    }
});