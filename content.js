let images = document.getElementsByTagName("img");
const l=document.images.length;
for (let i = 0; i < l; i++) {
  images[i].src =
    "https://placebear.com/" + images[i].width + "/" + images[i].height;
}