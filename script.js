document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.getElementById("nameOfCompany");
    const words = h1.textContent.split(" ");
    
    let modifiedText = "";
  
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const firstLetter = word.charAt(0);
        const restOfWord = word.slice(1);
        const modifiedWord = `<span class="red">${firstLetter}</span>${restOfWord}`;
        modifiedText += modifiedWord + " ";
    }
  
    h1.innerHTML = modifiedText.trim();
  });
  
  let shadowInput = document.getElementById("shadowInput");
  let shadowInputButton = document.querySelector("#moreArticleButtonID");
  let isShown = false;
  let isAnimating = false;
  
  shadowInput.style.left = "-100%";
  shadowInput.style.opacity = "0";
  
  shadowInputButton.addEventListener("click", () => {
      if (!isAnimating) {
          isAnimating = true;
  
          if (!isShown) {
              isShown = true;
              shadowInput.style.transition = "opacity 0.5s, left 0.5s";
              shadowInput.style.opacity = "1";
              shadowInput.style.left = "0";
              shadowInput.style.top = "7vw";
  
              const liElements = shadowInput.querySelectorAll("li");
              liElements.forEach((li, index) => {
                  li.style.transition = "opacity 0.5s, transform 0.5s";
                  setTimeout(() => {
                      li.style.opacity = "1";
                      li.style.transform = "translateX(0)";
                      if (index === liElements.length - 1) {
                          isAnimating = false;
                      }
                  }, index * 200);
              });
          } else {
              isShown = false;
              shadowInput.style.transition = "opacity 0.5s, left 0.5s";
              shadowInput.style.opacity = "0";
              shadowInput.style.left = "-100%";
  
              const liElements = shadowInput.querySelectorAll("li");
              liElements.forEach((li, index) => {
                  li.style.transition = "opacity 0.5s, transform 0.5s";
                  setTimeout(() => {
                      li.style.opacity = "0";
                      li.style.transform = "translateX(-20px)";
                      if (index === liElements.length - 1) {
                          setTimeout(() => {
                              isAnimating = false;
                          }, index * 100 + 100);
                      }
                  }, index * 100);
              });
          }
      }
  });
  
  
  
  function toggleView() {
    const manifectButt = document.querySelector("#manifectButt");
    const articleManifect01 = document.getElementById("articleManifect01");
    const articleManifect02 = document.getElementById("articleManifect02");
    const hepe = document.getElementById("voorozdivmainID");
    const mainButt = document.getElementById("mainButt");
    const hels = document.getElementById("hels");
    const newsButt = document.getElementById("newsButt");
    const newstxtID = document.getElementById("newstxtsID");
    const forgromad = document.getElementById("forgromad");
    

    manifectButt.addEventListener("click", () => {
        articleManifect01.style.display = "none";
        articleManifect02.style.display = "block";
        manifectButt.textContent = "✓☉Маніфест";
        mainButt.textContent = "☉Головна";
        hels.style.display = "none";
        newsButt.textContent = "☉Новини";
        hepe.style.display = "none";
        remors.style.display = "none";
        forgromad.style.display = "none";
    });

    document.getElementById("helpers1").addEventListener("click", () => {
        articleManifect02.style.display = "none";
        manifectButt.textContent = "☉Маніфест";
        articleManifect01.style.display = "block";
        mainButt.textContent = "✓☉Головна";
        hels.style.display = "none";
        newsButt.textContent = "☉Новини";
        hepe.style.display = "none";
        remors.style.display = "none";
        forgromad.style.display = "none";
    });

    document.getElementById("mainButt").addEventListener("click", () => {
        articleManifect01.style.display = "block";
        mainButt.textContent = "✓☉Головна";
        articleManifect02.style.display = "none";
        manifectButt.textContent = "☉Маніфест";
        hels.style.display = "none";
        newsButt.textContent = "☉Новини";
        hepe.style.display = "none";
        remors.style.display = "none";
        forgromad.style.display = "none";
    });

    document.getElementById("helpers0").addEventListener("click", () => {
        articleManifect01.style.display = "none";
        mainButt.textContent = "☉Головна";
        articleManifect02.style.display = "none";
        manifectButt.textContent = "☉Маніфест";
        hels.style.display = "flex";
        newsButt.textContent = "✓☉Новини";
        hepe.style.display = "none";
        remors.style.display = "none";
        forgromad.style.display = "none";
    });

    document.getElementById("newsButt").addEventListener("click", () => {
        articleManifect01.style.display = "none";
        mainButt.textContent = "☉Головна";
        articleManifect02.style.display = "none";
        manifectButt.textContent = "☉Маніфест";
        hels.style.display = "flex";
        newsButt.textContent = "✓☉Новини";
        hepe.style.display = "none";
        remors.style.display = "none";
        forgromad.style.display = "none";
    });

    document.getElementById("newstxtID").addEventListener("click", () => {
        articleManifect01.style.display = "none";
        mainButt.textContent = "☉Головна";
        articleManifect02.style.display = "none";
        manifectButt.textContent = "☉Маніфест";
        hels.style.display = "none";
        newsButt.textContent = "☉Новини";
        hepe.style.display = "block";
        remors.style.display = "none";
        forgromad.style.display = "none";
    });

    document.getElementById("newstxtsID").addEventListener("click", () => {
        articleManifect01.style.display = "none";
        mainButt.textContent = "☉Головна";
        articleManifect02.style.display = "none";
        manifectButt.textContent = "☉Маніфест";
        hels.style.display = "none";
        newsButt.textContent = "☉Новини";
        hepe.style.display = "none";
        remors.style.display = "none";
        forgromad.style.display = "block";
    });
}

toggleView();
  

  document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-container');
    let currentIndex = 0;

    function showImage(index) {
        imageContainers.forEach((container, i) => {
            if (i === index) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % imageContainers.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + imageContainers.length) % imageContainers.length;
        showImage(currentIndex);
    }

    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    showImage(currentIndex);
});







document.addEventListener("DOMContentLoaded", function () {
    const mainImg = document.getElementById("mainImg");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const prevArrow = document.getElementById("prevArrow");
    const nextArrow = document.getElementById("nextArrow");
  
    let currentIndex = 0;
  
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("mouseover", () => {
        thumbnail.style.opacity = "0.7";
      });
  
      thumbnail.addEventListener("mouseout", () => {
        thumbnail.style.opacity = "1";
      });
  
      thumbnail.addEventListener("click", () => {
        const thumbnailSrc = thumbnail.getAttribute("src");
        mainImg.setAttribute("src", thumbnailSrc);
        currentIndex = index; // Оновити поточний індекс
      });
    });
  
    prevArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      const newSrc = thumbnails[currentIndex].getAttribute("src");
      mainImg.setAttribute("src", newSrc);
    });
  
    nextArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % thumbnails.length;
      const newSrc = thumbnails[currentIndex].getAttribute("src");
      mainImg.setAttribute("src", newSrc);
    });
  });



  const remors = document.getElementById("remors");
  document.addEventListener("DOMContentLoaded", function () {
    const remorsText = document.getElementById("remorsText");
    const deffButt = document.getElementById("deffButt");
    const articleManifect01 = document.getElementById("articleManifect01");
    const articleManifect02 = document.getElementById("articleManifect02");
    const hels = document.getElementById("hels");
    const voorozdivmainID = document.getElementById("voorozdivmainID");
    

    function toggleVisibility() {
        articleManifect01.style.display = "none";
        articleManifect02.style.display = "none";
        hels.style.display = "none";
        voorozdivmainID.style.display = "none";
        remors.style.display = "block";
    }

    remorsText.addEventListener("click", toggleVisibility);
    deffButt.addEventListener("click", toggleVisibility);
});