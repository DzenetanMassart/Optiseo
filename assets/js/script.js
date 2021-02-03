// Les outils
const tool = [{
        "img_link": "https://www.talkwalker.com/assets/fiasco/media/talkwalker-logo-white.svg",
        "prix": "Payant",
        "title": "Talkwalker",
        "desc": "  Permet d'avoir non seulement les commentaire, avis et articles mais également les vidéos, les tweets, les post sur Facebook,... et permet aussi de voir des graphiques en temps réel ou sur des périodes données.",
        "link": "https://www.talkwalker.com/fr/outil-analyse-web-reseaux-sociaux#=_="
    }, {
        "img_link": "https://www.inoreader.com/images/v2/landing/ino_logo.svg",
        "prix": "Gratuit",
        "title": "Inoreader",
        "desc": "Le plus complet des outils de suivis de S.E.O. en ligne gratuit car il permet de faire des veilles et avoir les informations en temps réel.",
        "link": "https://www.inoreader.com/language/french#=_="
    },
    {
        "img_link": "https://zdtqg3h0l2yrz5yd19tb2tnm-wpengine.netdna-ssl.com/wp-content/themes/mention/img/favicon.png",
        "prix": "Gratuit",
        "title": "Mention",
        "desc": "Permet de voir les commentaires,avis,articles,vidéos,tweets,posts sur Facebook,... faire des graphiques et gérer vos pages Twitter et de fans.",
        "link": "https://mention.com/fr/#=_="
    }, {
        "img_link": "https://www.alerti.com/assets/favicons/safari-pinned-tab-7efde0e64873c2f9d2caa90c3a73f4fe.svg",
        "prix": "Gratuit",
        "title": "Alerti",
        "desc": "Permet de voir les commentaires,avis,articles,vidéos,tweets,posts sur Facebook,... faire des graphiques et gérer vos pages Twitter et de fans... Comme Mention.",
        "link": "https://fr.alerti.com/#=_="
    }, {
        "img_link": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjAuNSA4NyI+PHBhdGggZD0iTTg4LjE5IDE3Ljc1djE2LjcxaDE2LjE0VjE3Ljc1aDkuNzd2NDMuMzNoLTkuNzdWNDMuMDFIODguMTl2MTguMDdoLTkuNzdWMTcuNzVoOS43N3ptNDUuOTIgMzcuMDNjMy44NiAwIDYuMjQtMy44IDYuMjQtOS40NSAwLTQuNjMtMS44LTkuMzktNi4yNC05LjM5LTQuNjMgMC02LjQzIDQuNzYtNi40MyA5LjQ1IDAgNS4zMyAyLjI1IDkuMzkgNi4zNiA5LjM5em0tLjE5IDdjLTkuMTkgMC0xNi4yNy02LTE2LjI3LTE2LjJzNi42OS0xNi42NSAxNi44NC0xNi42NWM5LjU4IDAgMTYgNi42MiAxNiAxNi4xNCAwIDExLjQ0LTguMTYgMTYuNzEtMTYuNTIgMTYuNzF6bTM2LjMyLTdjMy44NiAwIDYuMjQtMy44IDYuMjQtOS40NSAwLTQuNjMtMS44LTkuMzktNi4yNC05LjM5LTQuNjMgMC02LjQzIDQuNzYtNi40MyA5LjQ1IDAgNS4zMyAyLjI1IDkuMzkgNi4zNyA5LjM5em0tLjE5IDdjLTkuMTkgMC0xNi4yNi02LTE2LjI2LTE2LjJzNi42OS0xNi42NSAxNi44NC0xNi42NWM5LjU4IDAgMTYgNi42MiAxNiAxNi4xNCAwIDExLjQ0LTguMTcgMTYuNzEtMTYuNTMgMTYuNzF6bTIwLjE1LTI0Ljk0djEyLjkyYzAgNC40NC45IDcuNDYgMi43IDkuMzJhMTAuNDEgMTAuNDEgMCAwMDcuMzkgMi43IDIwLjU4IDIwLjU4IDAgMDA2LjMtLjg0bC0uMDctNy4zOWExMS44NSAxMS44NSAwIDAxLTIuODkuMjZjLTIuODkgMC0zLjg2LTEuNzQtMy44Ni01LjUzVjM2Ljg0aDd2LTcuMmgtN3YtOS41M2E5LjUzIDkuNTMgMCAwMC05LjU0IDkuNTN6bTEwMC4xIDB2MTIuOTJjMCA0LjQ0LjkgNy40NiAyLjcgOS4zMmExMC40MiAxMC40MiAwIDAwNy4zOSAyLjcgMjAuNiAyMC42IDAgMDA2LjMtLjg0bC0uMDctNy4zOWExMS44OCAxMS44OCAwIDAxLTIuODkuMjZjLTIuODkgMC0zLjg2LTEuNzQtMy44Ni01LjUzVjM2Ljg0aDd2LTcuMmgtN3YtOS41M2E5LjUzIDkuNTMgMCAwMC05LjU0IDkuNTN6bS03OC4zNiAxNS43NWExOS4wOSAxOS4wOSAwIDAwOC40MiAyLjMxYzMgMCA0LjE4LTEgNC4xOC0yLjU3cy0xLTIuNDUtNC41Ny0zLjY3Yy02LjU2LTIuMTItOS4wNy01LjcyLTktOS4zOCAwLTUuOTIgNS0xMC4zNSAxMi43OS0xMC4zNWEyMC42NSAyMC42NSAwIDAxOC44MSAxLjg2bC0xLjY3IDYuNjlhMTYuNzIgMTYuNzIgMCAwMC02LjgyLTEuNzRjLTIuMzggMC0zLjcyIDEtMy43MiAyLjUxczEuMjIgMi4zMiA1LjA4IDMuNjdjNiAyIDguNDIgNS4wNyA4LjQ5IDkuNjQgMCA1LjkyLTQuNTYgMTAuMjItMTMuNTYgMTAuMjJhMjIuMjEgMjIuMjEgMCAwMS0xMC4xNi0yLjI1em01NS4zLTEuNTljMCA0LjExLjEzIDcuNDYuMjYgMTAuMDlIMjU5bC0uNDUtNC40NGgtLjE5YTExLjIxIDExLjIxIDAgMDEtOS44MyA1LjE0Yy02LjQzIDAtMTEuMDYtNC0xMS4wNi0xMy42OVYyOS42NGg5Ljc3djE2LjkxYzAgNC41NiAxLjQ4IDcuMzIgNSA3LjMyYTUuNDIgNS40MiAwIDAwNS4yNy01LjUzdi0xOC43aDkuNzd6bTYuNjgtMjEuMzZoOS43OHYzMS40NGgtOS43OHptNC44My00LjEyYTUuMTIgNS4xMiAwIDAxLTUuNC01LjIxYzAtMyAyLjE5LTUuMjEgNS41My01LjIxYTUuMjIgNS4yMiAwIDExLS4wNiAxMC40MnptNTEuOTYgMTYuMmMwLTIuMzEtMS02LjM3LTUuNDctNi4zNy00LjE4IDAtNS44NSAzLjc5LTYuMTEgNi4zN3ptLTExLjUxIDYuNjljLjMyIDQuMTIgNC4zMSA2IDguODcgNmEyNS45IDI1LjkgMCAwMDguNjgtMS4zNWwxLjI1IDYuNjdhMjkuNzcgMjkuNzcgMCAwMS0xMS4zOCAyYy0xMC42NyAwLTE2Ljc4LTYuMTctMTYuNzgtMTYuMDcgMC04IDUtMTYuNzggMTUuODgtMTYuNzggMTAuMTYgMCAxNCA3LjkxIDE0IDE1LjY5YTI1LjI0IDI1LjI0IDAgMDEtLjMyIDMuOTJ6TTQzLjkyIDguMzJhMjUuMjMgMjUuMjMgMCAwMC0yNS4zMyAwQTI1IDI1IDAgMDA2IDV2MjUuMjNhNTAuNTEgNTAuNTEgMCAwMDUwLjUxIDUwLjUyVjVhMjUgMjUgMCAwMC0xMi41OSAzLjMyeiIvPjxwYXRoIGQ9Ik00Mi4xMyAxNC4xMWExMC44MyAxMC44MyAwIDAwLTEwLjgxIDkuODR2LS4wNy4wN2ExMC44NSAxMC44NSAwIDEwLTUgMTAuMWw1IDUuMDYgNS4wNy01YTEwLjgzIDEwLjgzIDAgMTA1Ljg0LTIwem0tMjEuNzEgMThBNy4yMiA3LjIyIDAgMTEyMi41OSAxOGEzLjYxIDMuNjEgMCAxMDQuNzUgNC43OCA3LjIzIDcuMjMgMCAwMS02LjkzIDkuMzR6bTIxLjY2LjA2YTcuMjIgNy4yMiAwIDAxLTYuODctOS4zN0EzLjYxIDMuNjEgMCAxMDQwIDE4YTcuMjIgNy4yMiAwIDExMi4xIDE0LjEyeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zNDQuMTggMzUuMTRhNS43IDUuNyAwIDAxLjc3LTIuODggNS42MiA1LjYyIDAgMDEyLjExLTIuMTIgNS43OCA1Ljc4IDAgMDE1Ljc3IDAgNS42MyA1LjYzIDAgMDEyLjEyIDIuMTEgNS43NyA1Ljc3IDAgMTEtMTAuNzYgMi44OXptLjgxIDBhNSA1IDAgMDA1IDUgNC44MiA0LjgyIDAgMDAyLjQ4LS42NyA1IDUgMCAwMDEuODEtMS44MSA0Ljk0IDQuOTQgMCAwMDAtNSA1IDUgMCAwMC0xLjgxLTEuODEgNC45NCA0Ljk0IDAgMDAtNSAwIDUgNSAwIDAwLTEuODEgMS44MSA0LjgxIDQuODEgMCAwMC0uNjYgMi40OHptNy4zLTEuNGExLjg2IDEuODYgMCAwMS0uMzMgMS4wOCAxLjkzIDEuOTMgMCAwMS0uOTIuN2wxLjgyIDNoLTEuMjlMMzUwIDM1Ljg1aC0xdjIuNzFoLTEuMTN2LTYuODNoMmEyLjg4IDIuODggMCAwMTEuODcuNSAxLjg3IDEuODcgMCAwMS41NCAxLjUxek0zNDkgMzQuOWguODNhMS40NiAxLjQ2IDAgMDAxLS4zMiAxIDEgMCAwMC4zNy0uODEgMSAxIDAgMDAtLjMzLS44MiAxLjc0IDEuNzQgMCAwMC0xLS4yNUgzNDl6Ii8+PC9zdmc+",
        "prix": "Payant",
        "title": "Hootsuite",
        "desc": "Outil d'analyse des réseaux sociaux, il permet aussi de répondre directement aux messages Twitter, Facebook, ...",
        "link": "https://www.hootsuite.com/fr/#"
    }, {
        "img_link": "https://static1.squarespace.com/static/5d2faa812e13520001d92b71/t/5ed7989e90563358424f5a6d/1612285995792/?format=1500w",
        "prix": "Payant",
        "title": "Owler",
        "desc": " Permet de surveiller nos concurrents, surtout à employer pour les veilles concurrentiels et connaître le niveau de e-réputation de nos concurrents.",
        "link": "https://corp.owler.com/#=_="
    }, {
        "img_link": "https://www.bertin-it.com/wp-content/uploads/2016/03/Bertin-IT.png",
        "prix": "Payant",
        "title": "Bertin-it",
        "desc": " Permet de construire ses veilles et connaître sa e-réputation avec des assets, des pré-configurations.",
        "link": "https://www.bertin-it.com/#=_="
    }, {
        "img_link": "https://www.eloquant.com/wp-content/uploads/2019/11/logo-eloquan2.svg",
        "prix": "Payant",
        "title": "Eloquant",
        "desc": " Analyse sémantiquement les avis, les forums,...",
        "link": "https://www.eloquant.com/#=_="
    }
];






// Le générateur
let generate = " ";



for (let ii = 0; ii < tool.length; ii++) {
    let tools = (tool[ii]);

    generate += '<div class="card bg-primary p-3 border border-dark mr-3 mt-3" style="width:400px"><div class="card-header bg-dark" style="background:url(' + tools.img_link + ');background-size: contain;background-repeat: no-repeat; height:100px"></div><span class="badge badge-warning">' + tools.prix + '</span><div class="card-body"><h4 class="card-title text-white">' + tools.title + '</h4>' +
        '<p class="card-text text-white">' + tools.desc + '</p><a href="' + tools.link + '" class="btn btn-light btn-block">S\'y rendre</a></div></div>';
}

document.getElementById("tools_gen").innerHTML += generate;