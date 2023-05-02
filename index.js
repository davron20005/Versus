var navbarList = ["Portfolio", "About", "Contact"]
var navbar = document.querySelector(".navbar-list")

for (var i = 0; i < navbarList.length; i++) {
    var liEelement = document.createElement("li")
    var linkElement = document.createElement("a")
    linkElement.textContent = navbarList[i]
    linkElement.classList.add("navbar-link")
    liEelement.appendChild(linkElement)
    navbar.appendChild(liEelement)
}

// var sectionEl = document.querySelector(".section-list")

// for (var i = 1; i <= 9; i++) {
//     var liEl = document.createElement("li")
//     var imgEl = document.createElement("img")
//     imgEl.src = "./assets/img/png/IMAGE.png";
//     liEl.appendChild(imgEl)

//     sectionEl.appendChild(liEl)

// }

const imgpage = ["./assets/img/png/IMAGE.png", "./assets/img/png/IMAGE (8).png", "./assets/img/png/IMAGE (1).png", "./assets/img/png/IMAGE (9).png", "./assets/img/png/IMAGE (3).png", "./assets/img/png/IMAGE (4).png", "./assets/img/png/IMAGE (5).png", "./assets/img/png/IMAGE (6).png", "./assets/img/png/IMAGE (7).png"]
var sectionEl = document.querySelector(".section-list");
for (var i = 0; i < imgpage.length; i++) {
    var litegs = document.createElement("li");
    var imgs = document.createElement("img");
    imgs.src = imgpage[i];
    imgs.classList.add(".imgs-page");
    litegs.appendChild(imgs);
    sectionEl.appendChild(litegs);
}