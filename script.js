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
  
  
  
  let articleManifect01 = document.getElementById("articleManifect01");
  let articleManifect02 = document.getElementById("articleManifect02");
  
  let manifectButt = document.querySelector("#manifectButt");
  
  let counter = 0;
  
  manifectButt.addEventListener("click", () => {
      // if (counter==0) {
      //   articleManifect01.style.display = "none";
      //   articleManifect02.style.display = "block";
      //   manifectButt.textContent = "&#10003;☉Маніфест";
      //   counter++
      // } else {
      //   counter = 0;
      //   articleManifect02.style.display = "none";
      //   articleManifect01.style.display = "block";
      //   manifectButt.textContent = "☉Маніфест";
      // }
      articleManifect01.style.display = "none";
      articleManifect02.style.display = "block";
      manifectButt.textContent = "✓☉Маніфест";
      document.getElementById("mainButt").textContent = "☉Головна"
      document.getElementById("hels").style.display ="none";
      document.getElementById("newsButt").textContent = "☉Новини";
  });
  
  document.getElementById("helpers1").addEventListener("click", funre);
  
  function funre() {
      articleManifect02.style.display = "none";
      manifectButt.textContent = "☉Маніфест";
  
      articleManifect01.style.display = "block"
      document.getElementById("mainButt").textContent = "✓☉Головна"
  
      document.getElementById("hels").style.display ="none";
      document.getElementById("newsButt").textContent = "☉Новини";
  }
  
  document.getElementById("mainButt").addEventListener("click",()=>{
      //головна
      articleManifect01.style.display = "block"
      document.getElementById("mainButt").textContent = "✓☉Головна"
  
      articleManifect02.style.display = "none";
      manifectButt.textContent = "☉Маніфест";
  
      document.getElementById("hels").style.display ="none";
      document.getElementById("newsButt").textContent = "☉Новини";
  });
  
  document.getElementById("helpers0").addEventListener("click", funcNews);
  
  document.getElementById("newsButt").addEventListener("click", funcNews);
  //#hels
  
  function funcNews() {
      articleManifect01.style.display = "none"
      document.getElementById("mainButt").textContent = "☉Головна"
  
      articleManifect02.style.display = "none";
      manifectButt.textContent = "☉Маніфест";
      
      document.getElementById("hels").style.display ="flex";
      document.getElementById("newsButt").textContent = "✓☉Новини"
  }
function funcmm() {
        articleManifect01.style.display = "block"
        document.getElementById("mainButt").textContent = "✓☉Головна"
    
        articleManifect02.style.display = "none";
        manifectButt.textContent = "☉Маніфест";
    
        document.getElementById("hels").style.display ="none";
        document.getElementById("newsButt").textContent = "☉Новини";
  }
