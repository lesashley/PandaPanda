var files = ["assets/images/imagen1.jpg","assets/images/imagen2.jpg","assets/images/imagen3.jpg","assets/images/imagen4.jpg"]
var docFragment = document.createDocumentFragment();
var parentPictures = document.getElementById("pictures-panda");

function createImages(src) {
  var content = document.createElement("div");
  var images = document.createElement("img");
  var close = document.createElement("a");

  images.src = src;
  close.setAttribute("class","close");
  close.innerHTML="x";

  close.addEventListener("click",function(e) {
    var parent = e.target.parentNode;
    alert(parent.getAttribute("class"));
    parent.removeChild(images);
    parent.removeChild(close);
    parent.parentNode.removeChild(parent);
  })

  docFragment.appendChild(content);
  content.appendChild(images);
  content.appendChild(close);
  return docFragment;
}

function mostrarOcultar(elemento) {
  if (elemento.style.display == "block") {
    elemento.style.display =  "none";
  }
  else{
    elemento.style.display = "block";
  }
}
window.addEventListener("load",function () {
  files.forEach(function(e) {
    parentPictures.appendChild(createImages(e));
  })
});

var restore = document.getElementsByClassName("restaurar")[0];
restore.addEventListener("click",function () {
  files.forEach(function(e) {
    parentPictures.appendChild(createImages(e));
  })
})

var contentHistory = document.getElementsByClassName("historia-panda")[0];
document.getElementsByClassName("historia")[0].addEventListener("click",function (e) {
  e.preventDefault();
  mostrarOcultar(contentHistory);
})

var origen = document.getElementsByClassName("origen-panda")[0];
document.getElementsByClassName("origen")[0].addEventListener("click",function (e) {
  e.preventDefault();
  mostrarOcultar(origen);
})
