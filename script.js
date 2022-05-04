window.addEventListener("load", init);
function $(elem) {
  return document.querySelectorAll(elem);
}

const kutyak = [];
function init() {
  fetch("kutyak.json")
    .then((response) => response.json())
    .then((data) => {
      //JSON adat - jelen esetben egy objektum
      console.log(data);
      //az objektum kutyak kulcsához tartozó adat a tömb
      console.log(data.kutyak);
      //kutyak tömb feltöltése
      data.kutyak.forEach((elem) => {
        kutyak.push(elem);
      });
      console.log(kutyak);
      //itt kell meghívni az adatok feldolgozását, mert
      //csak itt töltöttük fel a tömböt. - az asszinkron hívás miatt.
      feldolgoz();
    })
    .catch((err) => {
      console.log(err);
    });
}

function feldolgoz() {
  var txt = "";
  kutyak.forEach(function (kutya) {
    txt += "<ul>";
    for (const key in kutya) {
      txt += `<li><span>${key}:</span><span> ${kutya[key]}</span></li>`;
      // txt += "<li><span>"+key+":</span><span> "+kutya[key]+"</span></li>"
    }

    txt += "</ul>";
  });

  console.log(txt);
  $("article")[0].innerHTML = txt;
}
