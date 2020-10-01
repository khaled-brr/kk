/*start color option */
let creatlocalstorage = localStorage.getItem("chosen-color");

if (creatlocalstorage !== null) {
  document.documentElement.style.setProperty("--main-color", creatlocalstorage);
  //>>  دا عشان تحط الاكتيف كلاس او تشيله بس الطريقه الي تحت في الاون كليلك افضل
  document.querySelectorAll(".color-list li").forEach((libyli) => {
    // remove all active class
    libyli.classList.remove("active");

    if (libyli.dataset.color === creatlocalstorage) {
      // add class active
      libyli.classList.add("active");
    }
  });
}

document.querySelector(".toggel").onclick = function () {
  document.querySelector(".fa-users-cog").classList.toggle("fa-spin");
  document.querySelector(".settingbox").classList.toggle("open");
};

const lilist = document.querySelectorAll(".color-list li");

lilist.forEach((lioption) => {
  lioption.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    document.querySelector(".active").classList.remove("active");
    e.target.classList.toggle("active");

    localStorage.setItem("chosen-color", e.target.dataset.color);
  });
});

/*end color option */

var landing = document.querySelector(".landingpage"),
  imgasisarray = [
    "rone.jpg",
    "rtwo.jpg",
    "rthree.jpg",
    "rfour.jpg",
    "rfive.jpg",
    "rseven.Jpg",
    "rsix.Jpg",
  ];

let backgroundinterval;
let backgroundon = true;

/* start button yes or No*/
var locastoragephotooption = localStorage.getItem("yes-or-no");

var backgroundoptions = document.querySelectorAll(".randombackground span");
backgroundoptions.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
    } else {
      document
        .querySelector(".randombackground .active")
        .classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

/* end button yes or No*/

/* start option random color*/

backgroundinterval = setInterval(() => {
  var randomimgname = Math.floor(Math.random() * imgasisarray.length);
  landing.style.backgroundImage =
    'url("photo/' + imgasisarray[randomimgname] + '"';
}, 900);

document.querySelectorAll(".randombackground span").forEach((targetspan) => {
  targetspan.addEventListener("click", (e) => {
    if (e.target.classList.contains("yes")) {
      backgroundinterval = setInterval(() => {
        var randomimgname = Math.floor(Math.random() * imgasisarray.length);
        landing.style.backgroundImage =
          'url("photo/' + imgasisarray[randomimgname] + '"';
      }, 900);
      localStorage.setItem("yes-or-no", backgroundinterval);
    }

    if (e.target.classList.contains("No")) {
      clearInterval(backgroundinterval);
      function stop() {
        clearInterval(backgroundinterval);
      }
      localStorage.setItem("yes-or-no", stop());
    }
  });
});

/* end option random color*/

/*Start skill progress */

// select the box skill

let boxskill = document.querySelector(".skills");
/*
$(document).ready(function () {
  $(boxskill).fadeOut(1000)
})
*/

window.onscroll = function () {
  let introoouterheight = document.querySelector(".landingpage").offsetHeight,
    aboutoouterheight = document.querySelector(".allinfo").offsetHeight,
    windowScrolltop = this.pageYOffset;

  if (windowScrolltop >= aboutoouterheight + introoouterheight - 190) {
    $(boxskill).fadeIn(800);

    let spanprogress = document.querySelectorAll(".skillprogresw span");

    spanprogress.forEach((span) => {
      span.style.width = span.dataset.progress;
    });

    let persents = document.querySelectorAll(".skillprogresw p");

    persents.forEach((oneper) => {
      oneper.classList.add("persent");
    });
  }
};

/*End skill progress */

/* Start pop image */

var images = document.querySelectorAll(".GAllary .imagecontanier img");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    //creat overlay pop
    var overlaypop = document.createElement("div");
    overlaypop.className = "overlaypop";
    document.body.appendChild(overlaypop);

    //creat div over overlay
    var popdiv = document.createElement("div");
    popdiv.className = "popdiv";

    // creart headline for image
    if (image.alt !== null) {
      let heading = document.createElement("h6"),
        textinheading = document.createTextNode(image.alt);

      heading.appendChild(textinheading);
      popdiv.appendChild(heading);
    }

    //creat close button
    let closebutton = document.createElement("span"),
      buttontext = document.createTextNode("X");

    closebutton.className = "closepop";
    closebutton.appendChild(buttontext);
    popdiv.appendChild(closebutton);

    // creat love button
    let loveicon = document.createElement("span"),
      lovetext = document.createTextNode("Love");

    loveicon.className = "lovespan";

    loveicon.appendChild(lovetext);
    popdiv.appendChild(loveicon);

    // creat download button
    let downloadicon = document.createElement("span"),
      downloadtext = document.createTextNode("download");

    downloadicon.className = "downloadspan";

    downloadicon.appendChild(downloadtext);
    popdiv.appendChild(downloadicon);

    // creat acc button
    let accspan = document.createElement("span");
    accspan.className = "accspan";

    accspan.style.backgroundImage = 'url("photo/khaled.jpg")';
    popdiv.appendChild(accspan);

    // creat acc info
    let infospan = document.createElement("span"),
      infotext = document.createTextNode("khaledAyman@gamil.com");

    infospan.className = "infospan";
    infospan.appendChild(infotext);
    popdiv.appendChild(infospan);

    // creat acc info
    let namespan = document.createElement("span"),
      nametext = document.createTextNode("- Front-End Developer");

    namespan.className = "namespan";
    namespan.appendChild(nametext);
    popdiv.appendChild(namespan);

    //creat img over popdiv
    var popimg = document.createElement("img");
    popimg.src = image.src;
    popdiv.appendChild(popimg);

    document.body.appendChild(popdiv);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("closepop")) {
    $(e.target.parentNode).slideUp(800);

    document.querySelector(".overlaypop").remove();

    //$(document.querySelector(".overlaypop")).fadeOut(1020)
  }
});

/* End pop image */

/*Start bar */
const bulrtsbar = document.querySelectorAll(".navbulltes .bullet");

bulrtsbar.forEach((bulletsection) => {
  bulletsection.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/*show and hied hat bar */

var spanactive = document.querySelector(".FastScroll .active"),
  allbullets = document.querySelectorAll(".navbulltes .bullet");

document.querySelectorAll(".FastScroll span").forEach((targetspan) => {
  targetspan.addEventListener("click", (e) => {
    if (e.target.classList.contains("yes")) {
    } else {
      spanactive.classList.remove("active");

      e.target.classList.add("active");

      allbullets.forEach((everybullet) => {
        everybullet.classList.add("unuse");
      });
    }

    if (e.target.classList.contains("yes")) {
      document.querySelector(".FastScroll .No").classList.remove("active");

      e.target.classList.add("active");

      allbullets.forEach((everybullet) => {
        everybullet.classList.remove("unuse");
      });
    }
  });
});

document.querySelector(".reset").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
/*End bar */
