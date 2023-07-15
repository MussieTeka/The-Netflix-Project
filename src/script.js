import './style.css';

const accordian = document.getElementsByClassName('FAQ__title');

for (let i = 0; i < accordian.length; i += 1) {
  accordian[i].addEventListener('click', function toggleAccordian() {
    if (this.childNodes[1].classList.contains('fa-plus')) {
      this.childNodes[1].classList.remove('fa-plus');
      this.childNodes[1].classList.add('fa-times');
    } else {
      this.childNodes[1].classList.remove('fa-times');
      this.childNodes[1].classList.add('fa-plus');
    }

    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
}
