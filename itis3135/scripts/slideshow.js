const images = [
    { src: "images/banana.jpg", caption: "B - Banana" },
    { src: "images/octopus.jpg", caption: "O - Octopus" },
    { src: "images/book.jpg", caption: "B - Book" },
    { src: "images/basketball.jpg", caption: "B - Basketball" },
    { src: "images/yoyo.jpg", caption: "Y - Yo-yo" },
    { src: "images/yak.jpg", caption: "Y - Yak" },
    { src: "images/umbrella.jpg", caption: "U - Umbrella" },
    { src: "images/necklace.jpg", caption: "N - Necklace" }
  ];
  
  let current = 0;
  
  function showSlide(index) {
    const slide = images[index];
    document.getElementById("slide").src = slide.src;
    document.getElementById("slide").alt = slide.caption;
    document.getElementById("caption").textContent = slide.caption;
  }
  
  function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
  }
  
  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
  }
  
  window.onload = () => {
    showSlide(current);
  };
  