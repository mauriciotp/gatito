const slide = document.querySelector('[data-slide] .slide-wrapper');
const prevBtn = document.querySelector('.prev-slide-btn');
const nextBtn = document.querySelector('.next-slide-btn');
const slideItems = document.querySelectorAll('.slide-wrapper a');
const btnsSlideCount = document.querySelectorAll('.slide-count button');
const slideItemsArray = [...slideItems];

let currentSlide = 0;

function handleNextBtn() {
  if (currentSlide < slideItemsArray.length - 1) {
    currentSlide += 1;
    const width = slideItemsArray[currentSlide].offsetWidth;
    slide.style.setProperty(
      'transform',
      `translateX(-${currentSlide * width}px)`
    );
    setActive();
  }
}

function handlePrevBtn() {
  if (currentSlide > 0) {
    currentSlide -= 1;
    const width = slideItemsArray[currentSlide].offsetWidth;
    slide.style.setProperty(
      'transform',
      `translateX(-${currentSlide * width}px)`
    );
    setActive();
  }
}

function setActive() {
  btnsSlideCount.forEach((btn) => {
    if (btn.dataset.btn === currentSlide.toString())
      btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

function handleBtnCount({ target }) {
  currentSlide = Number(target.dataset.btn);
  const width = slideItemsArray[currentSlide].offsetWidth;
  slide.style.setProperty(
    'transform',
    `translateX(-${currentSlide * width}px)`
  );
  setActive();
}

function handleItem(event) {
  event.preventDefault();
}

btnsSlideCount.forEach((btn) => {
  btn.addEventListener('click', handleBtnCount);
});

slideItems.forEach((a) => {
  a.addEventListener('click', handleItem);
});

nextBtn.addEventListener('click', handleNextBtn);
prevBtn.addEventListener('click', handlePrevBtn);
