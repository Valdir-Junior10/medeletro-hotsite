const accordion = document.querySelectorAll('.accordion__header');

accordion.forEach((accordion) => {
  accordion.addEventListener('click', (e) => {
    const accordion = e.target.closest('.accordion');
    const accordionHeader = e.target.closest('.accordion__header');
    const accordionContent = accordionHeader.nextElementSibling;

    accordion.classList.toggle('open');

    if (accordion.classList.contains('open')) {
      accordionContent.style.maxHeight = `${
        accordionContent.scrollHeight + 48
      }px`;
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

function adjustAccordionContentHeight() {
  if (accordion.classList.contains('open')) {
    accordionContent.style.maxHeight = `${
      accordionContent.scrollHeight + 48
    }px`;
  }
}

window.onresize = adjustAccordionContentHeight;
