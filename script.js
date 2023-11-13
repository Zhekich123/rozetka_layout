'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let imageElement = document.querySelector('.bag-description');
  let matherialText = document.querySelector('.matherial__1');
  let titleMain = document.querySelector('.title__2');
  let bottomTitle = document.querySelector('.bottom-title__text-1');

  if (!imageElement) {
    console.error("Элемент с классом 'bag-description' не содержит тег img.");
    return;
  }

  function updateImage() {
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth >= 1030) {
      imageElement.src = './styles/images/bag_3.png';
      matherialText.innerHTML = 'Чохол з білої <br /> мікрофібри';
    } else if (screenWidth > 400) {
      imageElement.src = './styles/images/bag_3-tablet.png';
      matherialText.innerHTML = 'Чохол з білої мікрофібри';
    } else {
      imageElement.src = './styles/images/bag_3-phone.png';
      matherialText.innerHTML = 'Чохол з білої <br /> мікрофібри';
      titleMain.innerHTML = 'Fine  <br /> Dream  <br /> Summer'
      bottomTitle.innerHTML = 'Здоровий сон <br /> починається з <br />'
    }
  }

  updateImage();

  window.addEventListener('resize', updateImage);
});
