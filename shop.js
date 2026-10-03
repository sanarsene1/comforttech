const allProducts = [
  { name: 'Nexora LOCO-5AC', category: 'Point-to-Point', price: 48, oldPrice: 52, discount: 7.35, image: 'https://orbitlinksolutions.co.ke/images?path=products%2F8H9sUs2GnvI1JDLkY0Z3mw2mmbiA5MTnAEmxsEvI.jpg' },
  { name: 'Nexora loco M5', category: 'Point-to-Point', price: 69, oldPrice: 85, discount: 18.18, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FhAOFGOEr9FGmYWzaKrlnA1kq7WeFDIwr9WK7vZZt.jpg' },
  { name: 'Nexora loco M2', category: 'Point-to-Point', price: 50, oldPrice: 69, discount: 27.78, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FvgZLuLtJnqSfj9oTLiBSZ8EOeI8fRMtWUGxRd2gD.jpg' },
  { name: 'Nexora LBE-M5-23', category: 'Point-to-Point', price: 50, oldPrice: 69, discount: 27.78, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FaEhmQmC4f7ajUQ7WQBwVEoj3dD6YBha5WIZdrK2j.jpg' },
  { name: 'Nexora LBE-M5 LiteBeam M5', category: 'Point-to-Point', price: 50, oldPrice: 69, discount: 27.78, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FZ5T9JZ4KgMIeEe8YxQSxpM66j3wIJpvO10v5WNFx.jpg' },
  { name: 'Nexora LBE-5AC-GEN2', category: 'Point-to-Point', price: 69, oldPrice: 85, discount: 18.18, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FFGPdMUks7znrq0cxHi3HG4H5TMiC62FhvZ03s1Cs.jpg' },
  { name: 'Nexora LAP-GPS LiteAP GPS', category: 'Access Points', price: 104, oldPrice: 127, discount: 18.18, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FCgVu6Z7d4nEk3Tzxi97qIe3WEbFIX3JSozA6eimn.jpg' },
  { name: 'Nexora LAP-120 LiteAP AC', category: 'Access Points', price: 96, oldPrice: 115, discount: 16.67, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FqpBhS3V5vRiFFjWS6SYrVacm8wsUVpZUpQNoPn8I.jpg' },
  { name: 'Nexora USW-Lite-8-PoE Switch', category: 'Switches', price: 192, oldPrice: 223, discount: 13.79, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FQkHBDxRCXNQ0AKYd7lAEZGiw2ckf8GllSAKwMnc2.jpg' },
  { name: 'Nexora USW-LITE-16-POE', category: 'Switches', price: 277, oldPrice: 315, discount: 12.2, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FuhWdLhX85bctwuqTNnhedI4ZULMjKS6RLvChDwlj.jpg' },
  { name: 'Nexora USW-48-POE Switch', category: 'Switches', price: 577, oldPrice: 615, discount: 6.25, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FXo4ZfFPOEwYJkD7ATWUlctEdbph0Txuexx8JEas2.jpg' },
  { name: 'Nexora USW-24-POE Switch', category: 'Switches', price: 577, oldPrice: 615, discount: 6.25, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FEIQySZ1qIh1qkL5PvnWOOxyIQ2ytQmsSeTxNWlkC.png' },
  { name: 'Ubiquiti UniFi U6-LR', category: 'Access Points', price: 177, oldPrice: 200, discount: 11.54, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FxJ1JlJa8ZSWM8I1HzbAkcK2E87o2EJ2rq0I58IkM.jpg' },
  { name: 'Ubiquiti UniFi U6+', category: 'Access Points', price: 112, oldPrice: 127, discount: 12.12, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FU5ZtFc3qHmLrTtmOW44ZmDZSySpHLXYMxRA2tKHK.jpg' },
  { name: 'Ubiquiti UniFi U6 Pro', category: 'Access Points', price: 177, oldPrice: 192, discount: 8, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FcRyEH4A6DMVWsXxKIxEZQN55HjE2n4u7R7xfsRJu.jpg' },
  { name: 'Ubiquiti UniFi U6 Lite', category: 'Access Points', price: 115, oldPrice: 138, discount: 16.67, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FvXYRnBWZJ80HXUtItWNFthn1OZcil6xZQj586f9u.jpg' },
  { name: 'MikroTik RB951Ui-2HnD', category: 'Routers', price: 68, oldPrice: 77, discount: 12, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FC7SskzWu6f3AxPo6e7k2mePgSccd9rgw8te9nSS4.jpg' },
  { name: 'MikroTik RB941-2nD-TC hAP lite TC', category: 'Routers', price: 31, oldPrice: 46, discount: 33.33, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FZ9sus2zrSZxy3s8Oy0JeQIt3L6jRnRmb0eCcsect.jpg' },
  { name: 'MikroTik RB760iGS hEX S', category: 'Routers', price: 77, oldPrice: 92, discount: 16.67, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FoCVJnIe38d8S0LUbQZlHEkqx9CGf7lCjc1EfLk2c.jpg' },
  { name: 'MikroTik RB5009UG+S+IN', category: 'Routers', price: 208, oldPrice: 231, discount: 10, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FAlwPadInupXVq8TpHa2fzRIuTDXvm5StGol1JEtF.jpg' },
  { name: 'MikroTik RB4011iGS+RM', category: 'Routers', price: 208, oldPrice: 231, discount: 10, image: 'https://orbitlinksolutions.co.ke/images?path=products%2Fmhhxadip1Lo1JQazMCXlhCt0T2QDQOL3QXRVzr8x.jpg' },
  { name: 'MikroTik L009UiGS-RM', category: 'Routers', price: 131, oldPrice: 154, discount: 15, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FnRQuTD79PXyFlIqIvNy01XWCNafmdaSzApoBmVPW.png' },
  { name: 'MikroTik L009UiGS-2HaxD-IN', category: 'Routers', price: 135, oldPrice: 154, discount: 12.5, image: 'https://orbitlinksolutions.co.ke/images?path=products%2F6IKBDrhq2xPlcJ8FstgpMYHye0CW0WRTBVWHxNXc.jpg' },
  { name: 'MikroTik CCR2216-1G-12XS-2XQ', category: 'Routers', price: 2077, oldPrice: 2308, discount: 10, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FRnevU4D7wJCktMHFy9W9H8Gef104Ze6Wx5kQA7Yz.jpg' },
  { name: 'TP-Link EAP110-Outdoor', category: 'Access Points', price: 31, oldPrice: 35, discount: 11.11, image: 'https://orbitlinksolutions.co.ke/images?path=products%2Ffinlo5dYlxhNP1ggoBsLj59cTeEu7JwG2YmgplVf.jpg' },
  { name: 'TP-Link EAP110 Indoor', category: 'Access Points', price: 31, oldPrice: 35, discount: 11.11, image: 'https://orbitlinksolutions.co.ke/images?path=products%2FbESh0aiwDoUsTHJwbQW6w11Pjc3y2OGcjcoTmdMD.jpg' },
  { name: 'MikroTik RB4011iGS+RM Price in Kenya', category: 'Routers', price: 208, oldPrice: 215, discount: 3.57, image: 'https://orbitlinksolutions.co.ke/images?path=products%2Fzoy6Ov6iRC6qwrIXhd0DymUcJWTPz92WWwS9uJqL.webp' },
  { name: 'MikroTik RB5009UG+S+IN router', category: 'Routers', price: 223, oldPrice: 231, discount: 3.33, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fmikrotik-rb5009ugsin-600x400-1785136063.jpg' },
  { name: 'MikroTik L009UiGS-2HaxD-IN Router', category: 'Routers', price: 131, oldPrice: 138, discount: 5.56, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fmikrotik-l009uigs-2haxd-in-600x400-1785135438.jpg' },
  { name: 'MikroTik L009UiGS-RM Router', category: 'Routers', price: 123, oldPrice: 131, discount: 5.88, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fmikrotik-l009uigs-rm-600x400-1785135255.jpg' },
  { name: 'EcoFlow Adapter Cables Price in Kenya', category: 'EcoFlow', price: 45, oldPrice: 84, discount: 45.87, stockStatus: 'Low Stock', image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fimages%20%2858%29-1783171002.jpg' },
  { name: 'EcoFlow Infinity Cable Price in Kenya', category: 'EcoFlow', price: 123, oldPrice: 162, discount: 23.81, stockStatus: 'Low Stock', image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fimages%20%2858%29-1783171002.jpg' },
  { name: 'EcoFlow EV X-Stream Adapter Price in Kenya', category: 'EcoFlow', price: 138, oldPrice: 177, discount: 21.74, stockStatus: 'Low Stock', image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fimages%20%2858%29-1783171002.jpg' },
  { name: 'EcoFlow GLACIER Wheels & Lever Price in Kenya', category: 'EcoFlow', price: 92, oldPrice: 131, discount: 29.41, stockStatus: 'Low Stock', image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fimages%20%2858%29-1783171002.jpg' },
  { name: 'EcoFlow GLACIER Bag Price in Kenya', category: 'EcoFlow', price: 147, oldPrice: 185, discount: 20.75, stockStatus: 'Low Stock', image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fimages%20%2858%29-1783171002.jpg' },
  { name: 'EcoFlow WAVE 2 Bag Price in Kenya', category: 'EcoFlow', price: 78, oldPrice: 116, discount: 33.11, stockStatus: 'Low Stock', image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fimages%20%2858%29-1783171002.jpg' },
  { name: 'Ubiquiti Indoor Access Point', brand: 'Ubiquiti', category: 'Wireless Access Points', price: 154, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fc1c99cca-4b1d-4c68-8533-f4e84f6fef76-1740657889.jpg' },
  { name: 'TP-Link Network Hub', brand: 'TP-Link', category: 'Switches & Hubs', price: 31, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2FD-Link%20-%20Switch%20met%C3%A1lico%20D-Link%20DGS-105%2C%205%20puertos%20Gigabit-1740658257.jpg' },
  { name: 'D-Link Unmanaged Switch', brand: 'D-Link', category: 'Switches & Hubs', price: 54, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2FD-Link%20-%20Switch%20met%C3%A1lico%20D-Link%20DGS-105%2C%205%20puertos%20Gigabit-1740658257.jpg' },
  { name: 'Cisco Managed Switch', brand: 'Cisco', category: 'Switches & Hubs', price: 346, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2FD-Link%20-%20Switch%20met%C3%A1lico%20D-Link%20DGS-105%2C%205%20puertos%20Gigabit-1740658257.jpg' },
  { name: 'Huawei 5G Router', brand: 'Huawei', category: 'Routers & Modems', price: 231, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2FHuawei%205G%20Router-1738254086.jpg' },
  { name: 'Netgear DSL Modem', brand: 'Netgear', category: 'Routers & Modems', price: 77, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2FRouter%20Modem%20Combo_%20The%20Ultimate%20Guide%20for%20Your%20Home%20Network-1740658364.jpg' },
  { name: 'TP-Link Wi-Fi 6 Router', brand: 'TP-Link', category: 'Routers & Modems', price: 115, image: 'https://orbitlinksolutions.co.ke/images?path=uploads%2Fimages%2Fstarlink-kit-1735588321.jpg' },
  { name: 'Starlink Standard Kit', brand: 'Starlink', category: 'Starlink', price: 413, page: 5, description: 'Fast and reliable internet for homes and rural areas.', image: 'https://starwaveinternet.ng/images/shop-img/potential%20home%20bg3.jpg' },
  { name: 'Starlink Gen 2 WiFi Router', brand: 'Starlink', category: 'Starlink', price: 167, page: 5, description: 'Extend your WiFi coverage seamlessly.', image: 'https://starwaveinternet.ng/images/shop-img/Starlink-Mesh-WiFi-Router.jpg' },
  { name: 'Starlink Performance (Gen 3) Kit', brand: 'Starlink', category: 'Starlink', price: 1967, page: 5, description: 'High-performance kit for extreme environments.', image: 'https://starwaveinternet.ng/images/shop-img/Starlink_Performance-antenna-image.webp' },
  { name: 'Starlink Mini Kit', brand: 'Starlink', category: 'Starlink', price: 240, page: 5, description: 'A compact, portable antenna for residential users.', image: 'https://starwaveinternet.ng/images/shop-img/starlink-mini-img.jpg' },
  { name: 'Starlink Ethernet Adapter', brand: 'Starlink', category: 'Starlink', price: 50, page: 5, description: 'Connect a device directly to the Starlink Router for a wired connection.', image: 'https://starwaveinternet.ng/images/shop-img/Starlink-Ethernet-Adapter.jpg' },
];

const productsPerPage = 12;
allProducts.forEach((product, index) => {
  if (!product.page) product.page = index < 36 ? Math.floor(index / productsPerPage) + 1 : 4;
});
const pageCount = Math.max(...allProducts.map((product) => product.page));

const params = new URLSearchParams(window.location.search);
let currentPage = Math.min(Math.max(Number(params.get('page')) || 1, 1), pageCount);
const categoryPills = document.getElementById('category-pills');
const grid = document.getElementById('shop-grid');
const pagination = document.getElementById('shop-pagination');
const resultsCount = document.getElementById('results-count');
const categoriesCount = document.getElementById('categories-count');
const priceRange = document.getElementById('price-range');
const showingRange = document.getElementById('showing-range');
const totalItems = document.getElementById('total-items');
const searchInput = document.getElementById('shop-search');
const sortSelect = document.getElementById('shop-sort');

const categories = Array.from(new Set(allProducts.map((product) => product.category))).sort();

function toUsd(value) {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function getFilteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = document.querySelector('.category-pill.is-active')?.dataset.category || 'all';
  const base = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = !query || product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const sortValue = sortSelect.value;
  if (sortValue === 'price-low') base.sort((a, b) => a.price - b.price);
  if (sortValue === 'price-high') base.sort((a, b) => b.price - a.price);
  if (sortValue === 'name-asc') base.sort((a, b) => a.name.localeCompare(b.name));
  if (sortValue === 'name-desc') base.sort((a, b) => b.name.localeCompare(a.name));
  return base;
}

function renderCategoryPills() {
  const pills = ['all', ...categories];
  categoryPills.innerHTML = pills.map((category) => {
    const isActive = (document.querySelector('.category-pill.is-active')?.dataset.category || 'all') === category;
    const label = category === 'all' ? 'All' : category;
    return `<button type="button" class="category-pill ${isActive ? 'is-active' : ''}" data-category="${category}">${label}</button>`;
  }).join('');

  categoryPills.querySelectorAll('.category-pill').forEach((button) => {
    button.addEventListener('click', () => {
      categoryPills.querySelectorAll('.category-pill').forEach((pill) => pill.classList.toggle('is-active', pill === button));
      currentPage = 1;
      render();
    });
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  const availablePages = Array.from(new Set(filteredProducts.map((product) => product.page)));
  const pages = availablePages.length ? availablePages : [1];
  if (!pages.includes(currentPage)) currentPage = pages[0];
  const page = currentPage;
  const pageProducts = filteredProducts.filter((product) => product.page === page);

  grid.innerHTML = pageProducts.map((product) => `
    <article class="shop-product">
      <div class="shop-product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.discount ? `<span class="shop-badge">-${product.discount}%</span>` : ''}
      </div>
      <div class="shop-product-body">
        <div class="shop-product-brand"><span>${product.brand || 'NEXORA'}</span><strong>${product.category}</strong></div>
        <h3 class="shop-product-title">${product.name}</h3>
        ${product.description ? `<p class="shop-product-description">${product.description}</p>` : ''}
        <div class="shop-stock ${product.stockStatus === 'Low Stock' ? 'is-low' : ''}">${product.stockStatus || 'In Stock'}</div>
        <div class="shop-price"><strong>${toUsd(product.price)}</strong>${product.oldPrice ? `<span>${toUsd(product.oldPrice)}</span>` : ''}</div>
        <div class="shop-actions">
          <a class="shop-icon-action shop-view-action" href="https://wa.me/243970695281?text=Bonjour%20Nexora%2C%20je%20souhaite%20plus%20d’informations%20sur%20${encodeURIComponent(product.name)}" target="_blank" rel="noopener" aria-label="Voir ${product.name}" title="View">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5c-5.2 0-9.2 4.3-10.7 6.2a1.3 1.3 0 0 0 0 1.6C2.8 14.7 6.8 19 12 19s9.2-4.3 10.7-6.2a1.3 1.3 0 0 0 0-1.6C21.2 9.3 17.2 5 12 5Zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>
          </a>
          <button class="shop-icon-action shop-add-action" type="button" aria-label="Ajouter ${product.name} au panier" title="Add">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6.2 6l.4 2h13.1l-1.5 6.3a2 2 0 0 1-2 1.5H8.1a2 2 0 0 1-2-1.6L4.3 4H1V2h4.9l.4 2H22l-2 10.8a4 4 0 0 1-3.9 3.1H8.1a4 4 0 0 1-3.9-3.2L2.3 6h3.9Z"/></svg>
          </button>
          <a class="shop-icon-action shop-whatsapp-action" href="https://wa.me/243970695281?text=Bonjour%20Nexora%2C%20je%20souhaite%20acheter%20${encodeURIComponent(product.name)}" target="_blank" rel="noopener" aria-label="Contacter Nexora sur WhatsApp pour ${product.name}" title="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.53 14.92L2.2 22l5.2-1.36A9.95 9.95 0 1 0 12.04 2Zm0 17.9a7.9 7.9 0 0 1-4.02-1.1l-.29-.17-3.09.81.82-3.01-.19-.31a7.9 7.9 0 1 1 6.77 3.78Zm4.34-5.92c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.33.98 2.49c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.39 1.37.5.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  const startIndex = pageProducts.length
    ? filteredProducts.filter((product) => product.page < page).length + 1
    : 0;
  const endIndex = startIndex ? startIndex + pageProducts.length - 1 : 0;
  showingRange.textContent = `${startIndex}-${endIndex}`;
  totalItems.textContent = String(filteredProducts.length);

  pagination.innerHTML = pages.map((pageNumber) => `
    <button type="button" class="shop-page-btn ${pageNumber === page ? 'is-active' : ''}" data-page="${pageNumber}" ${pageNumber === page ? 'aria-current="page"' : ''}>${pageNumber}</button>
  `).join('');

  pagination.querySelectorAll('.shop-page-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const newPage = Number(button.dataset.page);
      currentPage = newPage;
      const url = new URL(window.location.href);
      url.searchParams.set('page', String(newPage));
      window.history.replaceState({}, '', url);
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  resultsCount.textContent = String(filteredProducts.length);
  categoriesCount.textContent = String(categories.length);
  const minPrice = filteredProducts.length ? Math.min(...filteredProducts.map((item) => item.price)) : 0;
  const maxPrice = filteredProducts.length ? Math.max(...filteredProducts.map((item) => item.price)) : 0;
  priceRange.textContent = `${toUsd(minPrice)} - ${toUsd(maxPrice)}`;
}

function render() {
  renderCategoryPills();
  renderProducts();
}

searchInput.addEventListener('input', () => {
  currentPage = 1;
  render();
});
sortSelect.addEventListener('change', render);

render();

if (document.querySelector('.menu-toggle')) {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
  });
}

const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

const shopSort = document.getElementById('shop-sort');
if (shopSort) shopSort.value = 'newest';
