var containers = document.querySelectorAll(".container");
var gradientGreen = document.querySelector(".gradientGreen");
var gradientRed = document.querySelector(".gradientRed");

const handleGradients = () => {
  containers.forEach((container) => {
    let gG = container.querySelector(".gradientGreen");
    let gR = container.querySelector(".gradientRed");
    if (gG) {
      gG.style.top =
        Math.round(Math.random() * container.clientHeight - gG.clientHeight) +
        "px";
      gG.style.left =
        Math.round(Math.random() * container.clientWidth - gG.clientWidth) +
        "px";
    }
    if (gR) {
      gR.style.top =
        Math.round(Math.random() * container.clientHeight - gR.clientHeight) +
        "px";
      gR.style.left =
        Math.round(Math.random() * container.clientWidth - gR.clientWidth) +
        "px";
    }
  });
};

window.addEventListener("load", handleGradients);
let moveRandom = setInterval(() => {
  handleGradients();
}, 2000);

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  let imageArea;
  let textArea;
  let commonHeading;
  let commonOutlineText;
  let commonParagraphText;
  let commonButton;
  let quoteImage;
  let pathImage;
  let clientImage;
  let commentedBy;
  let partnerIcons;
  let lineArrow;
  let insightImages;
  let trekImage;
  let totalContainers = containers.length;
  containers.forEach((element,i) => {
    if (element.children.length) {
      imageArea = element.querySelector(".imageArea");
      if (imageArea.children.length) {
        quoteImage = imageArea?.querySelector(".quote");
        pathImage = imageArea?.querySelector(".path");
        clientImage = imageArea?.querySelector(".img-client");
        partnerIcons = imageArea?.querySelectorAll(".partner-icon");
        insightImages = imageArea?.querySelectorAll(".insight-image");
        trekImage = imageArea?.querySelector(".trek");
      }
      textArea = element.querySelector(".textArea");
      commonHeading = textArea?.querySelector(".common-heading");
      commonOutlineText = textArea?.querySelector(".common-outline-text");
      commonParagraphText = textArea?.querySelector(".common-paragraph-text");
      commonButton = textArea?.querySelector(".common-outline-button ");
      commentedBy = textArea?.querySelector(".commented-by");
      lineArrow = textArea.querySelector(".line-arrow");

      let elementY = Math.round(element.getBoundingClientRect().y);

      if (elementY < element.getBoundingClientRect().height) {
        if (element.classList.contains("slider-container")) {
          imageArea.style.opacity = 1;
          imageArea.classList.add("animate-active-left");

          quoteImage?.classList.add("add-opacity");
          setTimeout(() => {
            pathImage?.classList.add("add-opacity");
          }, 500);
          setTimeout(() => {
            clientImage?.classList.add("add-opacity");
          }, 700);
        } else {
          imageArea.style.opacity = 1;
          imageArea.classList.add("animate-active");

          partnerIcons.forEach((partner, index) => {
            setTimeout(() => {
              partner.style.opacity = 1;
              partner.classList.add("animate-active-opacity");
            }, 200 * index);
          });
          if (insightImages.length) {
            insightImages.forEach((insightImage, index) => {
              insightImage.addEventListener("mouseleave", () => {
                const originalColor = "transparent";
                const blinkColor = "pink";

                insightImage.style.backgroundColor = blinkColor;

                setTimeout(() => {
                  insightImage.style.backgroundColor = originalColor;
                }, 500);
              });

              if (index == 0 || index == 2) {
                setTimeout(() => {
                  insightImage.classList.add("animate-active-top");
                }, 250);
              } else {
                setTimeout(() => {
                  insightImage.classList.add("animate-active-bottom");
                }, 500);
              }
            });
          }
          if (!trekImage) {
            setTimeout(() => {
              trekImage?.classList.add("animate-active-top-image");
            }, 500);
          }
        }
      } else {
        imageArea.style.opacity = 0;
        quoteImage?.classList.remove("add-opacity");
        partnerIcons.forEach((partner, index) => {
          setTimeout(() => {
            partner.style.opacity = 0;
            partner.classList.remove("animate-active-opacity");
          }, 200 * index);
        });

        if (insightImages.length) {
          insightImages.forEach((insightImage, index) => {
            if (index == 0 || index == 2) {
              setTimeout(() => {
                insightImage.classList.remove("animate-active-top");
              }, 250);
            } else {
              setTimeout(() => {
                insightImage.classList.remove("animate-active-bottom");
              }, 500);
            }
          });
        }

        if (trekImage) {
          setTimeout(() => {
            trekImage?.classList.remove("animate-active-top-image");
          }, 500);
        }

        setTimeout(() => {
          pathImage?.classList.remove("add-opacity");
        }, 500);
        setTimeout(() => {
          clientImage?.classList.remove("add-opacity");
        }, 700);
        imageArea.classList.remove("animate-active");
        if (imageArea.classList.contains("animate-active-left")) {
          imageArea.classList.remove("animate-active-left");
        }
      }

      if (elementY < 400) {
        if (element.classList.contains("culture-area")) {
          textArea.style.opacity = 1;
          textArea.classList.add("our-culture-bottom-top");
        } else {
          textArea.classList.remove("our-culture-bottom-top");
        }
      } else {
        textArea.classList.remove("our-culture-bottom-top");
      }

      if (elementY < 300) {
        commonOutlineText.style.opacity = 1;
        commonOutlineText.classList.add("animate-active");
      } else {
        commonOutlineText.style.opacity = 0;
        commonOutlineText.classList.remove("animate-active");
      }

      if (elementY < 200) {
        if (lineArrow) {
          lineArrow.style.opacity = 1;
          lineArrow.classList.add("animate-active");
        }
      } else {
        if (lineArrow) {
          lineArrow.style.opacity = 0;
          lineArrow.classList.remove("animate-active");
        }
      }

      if (elementY < 150) {
        commonHeading.style.opacity = 1;
        commonHeading.classList.add("animate-active");
      } else {
        commonHeading.style.opacity = 0;
        commonHeading.classList.remove("animate-active");
      }

      if (elementY < 120) {
        commonParagraphText.style.opacity = 1;
        commonParagraphText.classList.add("animate-active");
        if (element.classList.contains("ourpeople-area")) {
          if (imageArea.children.length) {
            let imgItems = imageArea.querySelectorAll(".img-icon");
            imgItems.forEach((item, index) => {
              let totalCount = imgItems.length - 1;
              if (index < totalCount) {
                setTimeout(() => {
                  item?.classList.add("animate-our-people");
                }, 1250 * index);
              }
              if (index === totalCount) {
                setTimeout(() => {
                  item.style.opacity = 1;
                  item?.classList.add("animate-our-people-complete");
                }, 1250 * index);
              }
            });
          }
        }
      } else {
        commonParagraphText.style.opacity = 0;
        commonParagraphText.classList.remove("animate-active");
        if (element.classList.contains("ourpeople-area")) {
          if (imageArea.children.length) {
            let imgItems = imageArea.querySelectorAll(".img-icon");
            imgItems.forEach((item, index) => {
              let totalCount = imgItems.length - 1;
              if (index < totalCount) {
                setTimeout(() => {
                  item?.classList.remove("animate-our-people");
                }, 1250 * index);
              }
              if (index === totalCount) {
                setTimeout(() => {
                  item.style.opacity = 0;
                  item?.classList.remove("animate-our-people-complete");
                }, 1250 * index);
              }
            });
          }
        }
      }

      if (elementY < 70) {
        if (commonButton) {
          commonButton.style.opacity = 1;
          commonButton.classList.add("animate-active");
        }
      } else {
        if (commonButton) {
          commonButton.style.opacity = 0;
          commonButton.classList.remove("animate-active");
        }
      }

      if (elementY < 55) {
        if (commentedBy) {
          commentedBy.style.opacity = 1;
          commentedBy.classList.add("animate-active");
        }
      } else {
        if (commentedBy) {
          commentedBy.style.opacity = 0;
          commentedBy.classList.remove("animate-active");
        }
      }


      //   imageArea = element.querySelector(".imageArea");
      //   textArea = element.querySelector(".textArea");
      //   commonOutlineText = textArea.querySelector(".common-outline-text");
      //   commonHeading = textArea.querySelector(".common-heading");
      //   commonParagraphText= textArea.querySelector(".common-paragraph-text")
      //   imageArea.style.opacity = 0;
      //   imageArea.classList.remove("animate-active");
      //   commonOutlineText.style.opacity = 0;
      //   commonOutlineText.classList.remove("animate-active");
      //   commonHeading.style.opacity = 0;
      //   commonHeading.classList.remove("animate-active");
      //   commonParagraphText.style.opacity = 0;
      //   commonParagraphText.classList.remove("animate-active");

      if(i===totalContainers-1){
        
        if (elementY < 500) {
          commonHeading.style.opacity = 1;
          commonHeading.classList.add("animate-active");
        } else {
          commonHeading.style.opacity = 0;
          commonHeading.classList.remove("animate-active");
        }

        if(elementY < 450){
          commonParagraphText.style.opacity = 1;
          commonParagraphText.classList.add("animate-active");
        }else{
          commonParagraphText.style.opacity = 0;
          commonParagraphText.classList.remove("animate-active");
        }

        if(elementY < 400){
          if (commonButton) {
            commonButton.style.opacity = 1;
            commonButton.classList.add("animate-active");
          }
        }
        else{
          if (commonButton) {
            commonButton.style.opacity = 0;
            commonButton.classList.remove("animate-active");
          }
        }

      }






    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

function createSlider(sliderContainer) {
  const slides = sliderContainer.querySelector(".slides");
  const slide = sliderContainer.querySelectorAll(".slide");
  const prevBtn = sliderContainer.querySelector(".prev-btn");
  const nextBtn = sliderContainer.querySelector(".next-btn");

  let slideIndex = 0;
  let startX = 0;
  let isDragging = false;

  // Helper function to update the slides position
  function updateSlidePosition() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(() => {
      slide[slideIndex]
        .querySelector(".imageArea")
        .classList.add("animate-active-left");
      setTimeout(() => {
        slide[slideIndex]
          .querySelector(".imageArea")
          .classList.remove("animate-active-left");
      }, 500);
    }, 500);

    let ImageItems = slide[slideIndex].querySelector(".imageArea").children;
    for (let i = 0; i < ImageItems.length; i++) {
      setTimeout(() => {
        ImageItems[i].classList.add("add-opacity");
      }, 200 * i + 1);
    }
  }

  // Move to the next slide
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.children.length;
    updateSlidePosition();
  }

  // Move to the previous slide
  function prevSlide() {
    slideIndex =
      (slideIndex - 1 + slides.children.length) % slides.children.length;
    updateSlidePosition();
  }

  // Handle mouse/touch drag
  function handleDragStart(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
  }

  function handleDragMove(e) {
    if (!isDragging) return;
    const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const diffX = currentX - startX;
    const slideWidth = sliderContainer.offsetWidth;
    const totalSlides = slides.children.length;

    slides.style.transition = "none";
    slides.style.transform = `translateX(-${
      slideIndex * slideWidth + diffX
    }px)`;
  }

  function handleDragEnd(e) {
    if (!isDragging) return;
    const currentX =
      e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diffX = currentX - startX;
    const slideWidth = sliderContainer.offsetWidth;

    isDragging = false;
    slides.style.transition = "";
    if (Math.abs(diffX) > slideWidth * 0.2) {
      slideIndex += diffX > 0 ? -1 : 1;
      slideIndex = Math.min(
        Math.max(slideIndex, 0),
        slides.children.length - 1
      );
    }
    updateSlidePosition();
  }

  // Attach event listeners
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  slides.addEventListener("mousedown", handleDragStart);
  slides.addEventListener("touchstart", handleDragStart);
  document.addEventListener("mousemove", handleDragMove);
  document.addEventListener("touchmove", handleDragMove);
  document.addEventListener("mouseup", handleDragEnd);
  document.addEventListener("touchend", handleDragEnd);

  // Initial setup
  updateSlidePosition();
}

// Usage example
const sliders = document.querySelectorAll(".slider-container");
sliders.forEach(createSlider);
