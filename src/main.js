// swiper
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

// mobile nav
const menuBtn = document.getElementById('menuBtn');
const sheet = document.getElementById('sheet');
const closeBtn = document.getElementById('sheetClose');
const overlay = document.getElementById('sheetOverlay');

menuBtn.addEventListener('click', () => {
  sheet.classList.add('is-open');
  console.log('opened');
});

closeBtn.addEventListener('click', () => {
  sheet.classList.remove('is-open');
  console.log('closed');
});

function closeSheet() {
  sheet.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sheet.classList.contains('is-open')) closeSheet();
});
overlay.addEventListener('click', closeSheet);
// data

const products = [
  {
    image: '/assets/img/latest/p1.png',
    name: 'Lorem ipsum Dolor',
    description: 'Description...',
    price: 120,
  },
  {
    image: '/assets/img/latest/p2.png',
    name: 'Lorem ipsum Dolor',
    description: 'Description...',
    price: 120,
  },
  {
    image: '/assets/img/latest/p3.png',
    name: 'Lorem ipsum Dolor',
    description: 'Description...',
    price: 120,
  },
  {
    image: '/assets/img/latest/p4.png',
    name: 'Lorem ipsum Dolor',
    description: 'Description...',
    price: 120,
  },
  {
    image: '/assets/img/latest/p1.png',
    name: 'Lorem ipsum Dolor',
    description: 'Description...',
    price: 120,
  },
  {
    image: '/assets/img/latest/p2.png',
    name: 'Lorem ipsum Dolor',
    description: 'Description...',
    price: 120,
  },
  {
    image: '/assets/img/latest/p3.png',
    name: 'Lorem ipsum Dolor',
    description: 'Description...',
    price: 120,
  },
  {
    image: '/assets/img/latest/p4.png',
    name: 'Lorem ipsum Dolor',
    description: 'Description...',
    price: 120,
  },
];

const wrapper = document.getElementById('products-wrapper');
products.forEach((product, index) => {
  const { image, name, description, price } = product;
  //  Product Image

  const slide = document.createElement('div');
  slide.className = 'swiper-slide';

  // image block
  const media = document.createElement('div');
  media.className = 'product-media';

  // image
  const img = document.createElement('img');
  img.src = image;
  img.alt = name;
  img.width = 240;
  img.height = 240;

  media.appendChild(img);

  // text block (starts AFTER image block)
  const info = document.createElement('div');
  info.className = 'product-info';

  const left = document.createElement('div');

  const title = document.createElement('h6');
  title.textContent = name;
  title.className = 'product-title';

  const desc = document.createElement('p');
  desc.textContent = description;

  const priceEl = document.createElement('p');
  priceEl.className = 'price';
  priceEl.textContent = `$${price}`;

  left.appendChild(title);
  left.appendChild(desc);

  info.appendChild(left);
  info.appendChild(priceEl);

  // assemble slide
  slide.appendChild(media);
  slide.appendChild(info);

  wrapper.appendChild(slide);
});

new Swiper('.swiper', {
  modules: [Scrollbar],
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false, // ✅ same as scrollbar={{ hide: false }}
  },
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1170: {
      slidesPerView: 4,
    },
  },
});
