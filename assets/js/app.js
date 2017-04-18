var files = [{file:"assets/images/imagen1.jpg" , alt:"pareja panda"},{file:"assets/images/imagen2.jpg" , alt:"bebe panda" }
            ,{file:"assets/images/imagen3.jpg" , alt:"familia panda"},{file:"assets/images/imagen4.jpg" , alt:"panda comiendo" }]
var docFragment = document.createDocumentFragment();
var parentPictures = document.getElementById("pictures-panda");

function createImages(src,alt) {
  var content = document.createElement("div");
  var images = document.createElement("img");
  var close = document.createElement("a");
  var textClose = document.createTextNode("x");

  images.src = src;
  images.alt=alt;
  close.setAttribute("class","close");

  close.addEventListener("click",function(e) {
    var parent = e.target.parentNode;
    parent.removeChild(images);
    parent.removeChild(close);
    parent.parentNode.removeChild(parent);
  })

  docFragment.appendChild(content);
  content.appendChild(images);
  content.appendChild(close);
  close.appendChild(textClose);
  return docFragment;
}

window.addEventListener("load",function () {
  files.forEach(function(e) {
    parentPictures.appendChild(createImages(e.file,e.alt));
  })
});

var buttonMenu = document.getElementsByClassName("button-menu");
buttonMenu[2].addEventListener("click",function () {
  files.forEach(function(e) {
    parentPictures.appendChild(createImages(e.file,e.alt));
  })
})

var contentHistory = document.getElementById("historia-panda");
// var n = document.getElementById("historia");
buttonMenu[1].addEventListener("click",function (e) {
  e.preventDefault();
  document.getElementById("historia-panda").classList.toggle("ocultar");
})

var origen = document.getElementById("origen-panda");
buttonMenu[0].addEventListener("click",function (e) {
  e.preventDefault();
  origen.classList.toggle("ocultar");
})
