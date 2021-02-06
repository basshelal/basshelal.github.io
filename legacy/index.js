var DateTimeFormat = Intl.DateTimeFormat;
function getGithubImage() {
    fetch("https://api.github.com/users/basshelal")
        .then(response => response.json().then(json => {
        let url = json["avatar_url"];
        if (!!url) {
            let avatarImage = document.getElementById("avatarImage");
            avatarImage.src = url;
            avatarImage.style.display = "initial";
        }
    }));
}
function getLatestCommitDate() {
    fetch("https://api.github.com/repos/basshelal/basshelal.github.io/commits/master")
        .then(response => response.json().then(json => {
        let latestCommitDate = json["commit"]["author"]["date"];
        if (!!latestCommitDate) {
            let date = Date.parse(latestCommitDate);
            let options = {
                weekday: "long", day: 'numeric', month: "long", year: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric',
                hour12: false, timeZone: "UTC", timeZoneName: "short"
            };
            let formattedDate = new DateTimeFormat("en-GB", options).format(date);
            let lastUpdatedLabel = document.getElementById("lastUpdatedLabel");
            lastUpdatedLabel.innerText = lastUpdatedLabel.innerText.concat(" " + formattedDate);
            lastUpdatedLabel.style.display = "initial";
        }
    }));
}
getGithubImage();
getLatestCommitDate();
