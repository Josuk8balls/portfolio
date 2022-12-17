const image = document.querySelectorAll(".imageGalerie");
    let currentimg = 0;

    for (let i = 0; i < image.length; i++) {
      image[i].addEventListener("click", function() {
        
        for (let j = 0; j < image.length; j++) {
          image[j].style.display = "none";
        }

        image[currentimg].style.display = "block";

        currentimg = (currentimg + 1) % image.length;
      });
    }

    image[0].style.display = "block";