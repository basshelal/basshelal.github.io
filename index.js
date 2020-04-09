var DateTimeFormat = Intl.DateTimeFormat;
function getGithubImage() {
    fetch("https://api.github.com/users/basshelal")
        .then(function (response) { return response.json().then(function (json) {
        var url = json["avatar_url"];
        if (!!url) {
            var avatarImage = document.getElementById("avatarImage");
            avatarImage.src = url;
            avatarImage.style.display = "initial";
        }
    }); });
}
function getLatestCommitDate() {
    fetch("https://api.github.com/repos/basshelal/basshelal.github.io/commits/master")
        .then(function (response) { return response.json().then(function (json) {
        var latestCommitDate = json["commit"]["author"]["date"];
        if (!!latestCommitDate) {
            var date = Date.parse(latestCommitDate);
            var options = {
                weekday: "long", day: 'numeric', month: "long", year: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric',
                hour12: false, timeZone: "UTC", timeZoneName: "short"
            };
            var formattedDate = new DateTimeFormat("en-GB", options).format(date);
            var lastUpdatedLabel = document.getElementById("lastUpdatedLabel");
            lastUpdatedLabel.innerText = lastUpdatedLabel.innerText.concat(" " + formattedDate);
            lastUpdatedLabel.style.display = "initial";
        }
    }); });
}
getGithubImage();
getLatestCommitDate();
