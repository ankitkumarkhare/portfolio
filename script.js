// Open and close the mobile menu
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Smooth scrolling to anchor links
const links = document.querySelectorAll('nav a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop - 80,
    behavior: 'smooth'
  });
}

// Display a modal when a portfolio item is clicked
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('img');

for (const image of images) {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.style.display = 'block';
  });
}

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Dashboard to add and update portfolio items
const dashboardButton = document.querySelector('.dashboard-button');
const dashboard = document.querySelector('.dashboard');
const closeButton = dashboard.querySelector('.close-button');
const addButton = dashboard.querySelector('.add-button');
const updateButton = dashboard.querySelector('.update-button');
const form = dashboard.querySelector('form');
const galleryGrid = document.querySelector('.gallery');

dashboardButton.addEventListener('click', () => {
  dashboard.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  dashboard.style.display = 'none';
});

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const input = form.querySelector('input');
  const src = input.value;
  const alt = 'Design ' + (galleryGrid.children.length + 1);
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  galleryGrid.appendChild(image);
  input.value = '';
  dashboard.style.display = 'none';
});

updateButton.addEventListener('click', (event) => {
  event.preventDefault();
  const input = form.querySelector('input');
  const src = input.value;
  const alt = 'Design ' + (galleryGrid.children.length);
  galleryGrid.lastChild.src = src;
  galleryGrid.lastChild.alt = alt;
  input.value = '';
  dashboard.style.display = 'none';
});
