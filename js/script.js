const galleryPool = [
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1555507036-ab1f4038026a?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1624371434260-5e0e7c212ab1?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1549931319-a545753468db?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1486427944544-d2c246c4a4b0?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&h=800&fit=crop'
];

const categoryMeta = {
  cakes: { name: 'Cakes', ingredients: 'All-purpose flour, premium cocoa, eggs, unsalted butter, sugar, Madagascar vanilla extract, baking powder, salt, heavy cream, Belgian chocolate', weightOptions: [{ label: '\u00bc Pound (Serves 1-2)', multiplier: 0.4 }, { label: '\u00bd Pound (Serves 2-4)', multiplier: 0.6 }, { label: '1 Pound (Serves 4-6)', multiplier: 1 }, { label: '2 Pounds (Serves 8-10)', multiplier: 1.8 }, { label: 'Whole (Serves 12-16)', multiplier: 2.5 }], deliveryTime: 'Same-day delivery within 2-4 hours', flavors: ['Original', 'Premium', 'Deluxe', 'Signature'] },
  pastries: { name: 'Pastries', ingredients: 'French butter (82% fat), bread flour, fine sugar, sea salt, active yeast, whole milk, free-range eggs, vanilla bean', weightOptions: [{ label: 'Single', multiplier: 1 }, { label: 'Half Dozen (6)', multiplier: 5.5 }, { label: 'Dozen (12)', multiplier: 10 }], deliveryTime: 'Freshly baked, ready in 1-2 hours', flavors: ['Classic', 'Butter', 'Artisan', 'Traditional'] },
  cookies: { name: 'Cookies', ingredients: 'All-purpose flour, European butter, brown sugar, granulated sugar, free-range eggs, vanilla extract, baking soda, sea salt, premium chocolate', weightOptions: [{ label: '\u00bc Pound', multiplier: 0.3 }, { label: '\u00bd Pound', multiplier: 0.5 }, { label: '1 Pound', multiplier: 1 }, { label: '2 Pounds', multiplier: 1.8 }], deliveryTime: 'Freshly baked, ready in 1 hour', flavors: ['Original', 'Double Chocolate', 'Nutty', 'Classic'] },
  breads: { name: 'Breads', ingredients: 'Organic bread flour, filtered water, sea salt, natural sourdough starter, olive oil', weightOptions: [{ label: 'Half Loaf', multiplier: 0.6 }, { label: 'Whole Loaf', multiplier: 1 }, { label: 'Double Loaf', multiplier: 1.8 }], deliveryTime: 'Freshly baked, ready in 3-4 hours', flavors: ['Original', 'Sourdough', 'Herb', 'Multigrain'] },
  desserts: { name: 'Desserts', ingredients: 'Premium cream cheese, fresh heavy cream, Belgian dark chocolate, free-range eggs, vanilla extract, seasonal fruits, graham cracker crust', weightOptions: [{ label: 'Single', multiplier: 1 }, { label: 'Half Dozen (6)', multiplier: 5.5 }, { label: 'Dozen (12)', multiplier: 10 }], deliveryTime: 'Ready in 1-2 hours', flavors: ['Classic', 'Premium', 'Signature', 'Seasonal'] }
};

const reviewTemplates = {
  cakes: ['Absolutely divine! The cake was incredibly moist, flavorful, and beautifully presented. Every bite melted in my mouth. Will definitely order again!', 'Best cake I have ever had! Everyone at the party was raving about it. The attention to detail and taste is simply remarkable.', 'Exceeded all my expectations. You can taste the quality of every ingredient. Perfectly balanced sweetness and gorgeous presentation.', 'Perfect for our special occasion. It was fresh, delicious, and the decoration was stunning. Made our celebration truly memorable.', 'The richness of flavors is incredible. This is what happens when only the finest ingredients are used. A true masterpiece from Bakeverse!'],
  pastries: ['Flaky, buttery, and absolutely perfect. Tastes like a Parisian bakery! The layers are incredible.', 'Freshly baked to golden perfection. The aroma alone is worth the visit. Best pastries in town without question.', 'These pastries are incredible. Light as air, beautifully caramelized, and so delicious. My morning coffee has found its perfect match.', 'Reminds me of my trip to France. Authentic, flaky, and utterly delicious. The butter quality really shines through.', 'Perfect breakfast treat. Fresh, flaky, and not too sweet. The perfect balance of texture and flavor.'],
  cookies: ['Perfectly baked with a soft center and crispy edges. The chocolate chunks are generous and high quality. Absolute perfection.', 'These cookies are dangerous! I could not stop eating them. The texture is spot on and the flavor is incredible.', 'The best cookies I have ever had. Chewy, gooey, and packed with flavor. Each bite is pure bliss.', 'Fresh, warm, and absolutely delicious. You can tell they are made with real butter and premium chocolate.', 'My new favorite treat! The perfect balance of sweet and salty. Soft, chewy, and absolutely addictive.'],
  breads: ['The crust is perfectly crispy and the inside is soft and airy. This is what artisan bread should taste like. Pure perfection.', 'Incredible texture and flavor. The natural fermentation gives it a depth of flavor you just cannot get from supermarket bread.', 'Finally found a bakery that makes real sourdough! The tang is perfect, the crust is beautiful, and the crumb is fantastic.', 'This bread is the real deal. Beautiful crust, amazing texture, and stays fresh for days. Perfect for sandwiches and toast.', 'Absolutely wonderful bread. You can taste the craftsmanship in every slice. My family goes through a loaf in one sitting!'],
  desserts: ['Rich, decadent, and absolutely sinful. Every spoonful is pure heaven. The perfect dessert for any chocolate lover.', 'Outstanding quality! The texture is silky smooth and the flavor is perfectly balanced. A true premium dessert experience.', 'Beautifully presented and incredibly delicious. The portion size is generous and the quality is top notch.', 'Pure indulgence! The ingredients are clearly premium and the execution is flawless. A dessert worth every penny.', 'This is dessert perfection. Not too sweet, incredibly creamy, and packed with flavor. Bakeverse never disappoints!']
};

const reviewerNames = ['Sarah J.', 'Michael C.', 'Emily R.', 'David T.', 'Jessica P.', 'James W.', 'Anna K.', 'Robert M.', 'Olivia B.', 'Daniel S.'];
const products = [
  { id: 1, name: "Chocolate Truffle Cake", category: "cakes", price: 45, rating: 4.8, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", description: "Rich Belgian chocolate ganache with a velvety truffle filling." },
  { id: 2, name: "Red Velvet Cake", category: "cakes", price: 42, rating: 4.7, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&h=300&fit=crop", description: "Classic red velvet with cream cheese frosting." },
  { id: 3, name: "Black Forest Cake", category: "cakes", price: 48, rating: 4.9, image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop", description: "Layers of chocolate sponge, cherries, and whipped cream." },
  { id: 4, name: "Strawberry Bliss Cake", category: "cakes", price: 40, rating: 4.6, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop", description: "Fresh strawberries with vanilla buttercream." },
  { id: 5, name: "Vanilla Dream Cake", category: "cakes", price: 38, rating: 4.5, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop", description: "Madagascar vanilla bean cake with silky buttercream." },
  { id: 6, name: "Lotus Biscoff Cake", category: "cakes", price: 46, rating: 4.8, image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=300&fit=crop", description: "Caramelized Biscoff cookie crunch with cream cheese." },
  { id: 7, name: "Mango Cake", category: "cakes", price: 42, rating: 4.6, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop", description: "Fresh alphonso mango mousse layers." },
  { id: 8, name: "Oreo Explosion Cake", category: "cakes", price: 44, rating: 4.7, image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=300&fit=crop", description: "Cookies & cream with Oreo chunks throughout." },
  { id: 9, name: "Blueberry Cheesecake", category: "cakes", price: 50, rating: 4.9, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop", description: "Creamy New York cheesecake with blueberry compote." },
  { id: 10, name: "Caramel Crunch Cake", category: "cakes", price: 43, rating: 4.7, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", description: "Salted caramel with crunchy praline layers." },
  { id: 11, name: "Lemon Tart Cake", category: "cakes", price: 39, rating: 4.5, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop", description: "Zesty lemon curd with meringue topping." },
  { id: 12, name: "Pistachio Rose Cake", category: "cakes", price: 52, rating: 4.9, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&h=300&fit=crop", description: "Exotic pistachio and rose water flavor." },
  { id: 13, name: "Tiramisu Cake", category: "cakes", price: 47, rating: 4.8, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop", description: "Coffee-soaked sponge with mascarpone cream." },
  { id: 14, name: "Hazelnut Praline Cake", category: "cakes", price: 49, rating: 4.7, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", description: "Toasted hazelnuts with praline mousse." },
  { id: 15, name: "Raspberry Lychee Cake", category: "cakes", price: 48, rating: 4.6, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop", description: "Light lychee cream with raspberry gelee." },
  { id: 16, name: "Mocha Espresso Cake", category: "cakes", price: 44, rating: 4.7, image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop", description: "Coffee lovers dream with mocha buttercream." },
  { id: 17, name: "Coconut Paradise Cake", category: "cakes", price: 41, rating: 4.5, image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=300&fit=crop", description: "Toasted coconut with pineapple filling." },
  { id: 18, name: "Matcha Green Tea Cake", category: "cakes", price: 46, rating: 4.6, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop", description: "Ceremonial matcha with white chocolate ganache." },
  { id: 19, name: "Salted Caramel Cake", category: "cakes", price: 45, rating: 4.8, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", description: "Gooey caramel with sea salt flakes." },
  { id: 20, name: "Berry Rainbow Cake", category: "cakes", price: 50, rating: 4.9, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop", description: "Mixed berry layers with rainbow buttercream." },
  { id: 21, name: "Butter Croissant", category: "pastries", price: 6, rating: 4.7, image: "https://images.unsplash.com/photo-1555507036-ab1f4038026a?w=400&h=300&fit=crop", description: "Flaky French butter croissant." },
  { id: 22, name: "Pain au Chocolat", category: "pastries", price: 7, rating: 4.6, image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=400&h=300&fit=crop", description: "Dark chocolate filled laminated pastry." },
  { id: 23, name: "Cinnamon Roll", category: "pastries", price: 8, rating: 4.8, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop", description: "Warm cinnamon swirl with cream cheese glaze." },
  { id: 24, name: "Pain aux Raisins", category: "pastries", price: 7, rating: 4.5, image: "https://images.unsplash.com/photo-1555507036-ab1f4038026a?w=400&h=300&fit=crop", description: "Pastry with raisins and vanilla custard." },
  { id: 25, name: "Danish Pastry", category: "pastries", price: 8, rating: 4.6, image: "https://images.unsplash.com/photo-1555507036-ab1f4038026a?w=400&h=300&fit=crop", description: "Fruit filled buttery Danish." },
  { id: 26, name: "Apple Turnover", category: "pastries", price: 7, rating: 4.5, image: "https://images.unsplash.com/photo-1624371434260-5e0e7c212ab1?w=400&h=300&fit=crop", description: "Caramelized apple in puff pastry." },
  { id: 27, name: "Chocolate Eclair", category: "pastries", price: 9, rating: 4.9, image: "https://images.unsplash.com/photo-1555507036-ab1f4038026a?w=400&h=300&fit=crop", description: "Choux pastry with chocolate creme." },
  { id: 28, name: "Mille Feuille", category: "pastries", price: 10, rating: 4.8, image: "https://images.unsplash.com/photo-1555507036-ab1f4038026a?w=400&h=300&fit=crop", description: "Napoleon with vanilla cream layers." },
  { id: 29, name: "Palmier", category: "pastries", price: 5, rating: 4.4, image: "https://images.unsplash.com/photo-1555507036-ab1f4038026a?w=400&h=300&fit=crop", description: "Crispy caramelized palmiers." },
  { id: 30, name: "Brioche", category: "pastries", price: 7, rating: 4.5, image: "https://images.unsplash.com/photo-1555507036-ab1f4038026a?w=400&h=300&fit=crop", description: "Soft French brioche bread." },
  { id: 31, name: "Chocolate Chip Cookie", category: "cookies", price: 4, rating: 4.7, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop", description: "Classic with dark chocolate chunks." },
  { id: 32, name: "Double Chocolate Cookie", category: "cookies", price: 5, rating: 4.6, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop", description: "Rich cocoa with white chocolate chips." },
  { id: 33, name: "Oatmeal Raisin Cookie", category: "cookies", price: 4, rating: 4.4, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop", description: "Chewy oats with plump raisins." },
  { id: 34, name: "Macadamia Cookie", category: "cookies", price: 5, rating: 4.5, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop", description: "White chocolate macadamia nut." },
  { id: 35, name: "Peanut Butter Cookie", category: "cookies", price: 4, rating: 4.5, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop", description: "Soft peanut butter with crisscross top." },
  { id: 36, name: "Snickerdoodle", category: "cookies", price: 4, rating: 4.6, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop", description: "Cinnamon sugar coated soft cookie." },
  { id: 37, name: "Sourdough Boule", category: "breads", price: 8, rating: 4.8, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop", description: "Crusty artisan sourdough." },
  { id: 38, name: "Baguette", category: "breads", price: 6, rating: 4.7, image: "https://images.unsplash.com/photo-1549931319-a545753468db?w=400&h=300&fit=crop", description: "Classic French baguette." },
  { id: 39, name: "Ciabatta", category: "breads", price: 7, rating: 4.6, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop", description: "Italian olive oil bread." },
  { id: 40, name: "Whole Wheat Loaf", category: "breads", price: 7, rating: 4.5, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop", description: "Hearty whole grain goodness." },
  { id: 41, name: "Focaccia", category: "breads", price: 8, rating: 4.7, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop", description: "Rosemary sea salt focaccia." },
  { id: 42, name: "Brioche Loaf", category: "breads", price: 9, rating: 4.6, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop", description: "Enriched buttery brioche loaf." },
  { id: 43, name: "New York Cheesecake", category: "desserts", price: 12, rating: 4.9, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop", description: "Dense and creamy classic cheesecake." },
  { id: 44, name: "Fudgy Brownie", category: "desserts", price: 6, rating: 4.8, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop", description: "Ultra rich chocolate brownie." },
  { id: 45, name: "Vanilla Cupcake", category: "desserts", price: 5, rating: 4.5, image: "https://images.unsplash.com/photo-1486427944544-d2c246c4a4b0?w=400&h=300&fit=crop", description: "Vanilla bean cupcake with buttercream." },
  { id: 46, name: "Glazed Donut", category: "desserts", price: 4, rating: 4.6, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop", description: "Light fluffy yeast donut with glaze." },
  { id: 47, name: "French Macarons (Box 6)", category: "desserts", price: 18, rating: 4.9, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=300&fit=crop", description: "Assorted French macarons." },
  { id: 48, name: "Chocolate Mousse", category: "desserts", price: 8, rating: 4.7, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop", description: "Silky dark chocolate mousse." }
];

let cart = JSON.parse(localStorage.getItem('bakeverseCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bakeverseWishlist')) || [];
let currentPage = '';

document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initMobileMenu();
  initNavbarScroll();
  initThemeToggle();
  initCartSidebar();
  initScrollTop();
  initSearch();
  initScrollReveal();
  updateCartBadge();
  currentPage = getCurrentPage();
  initNavIndicator();
  initScrollSpy();

  if (currentPage === 'index') initIndexPage();
  if (currentPage === 'cakes') initCategoryPage('cakes');
  if (currentPage === 'pastries') initCategoryPage('pastries');
  if (currentPage === 'cookies') initCategoryPage('cookies');
  if (currentPage === 'breads') initCategoryPage('breads');
  if (currentPage === 'desserts') initCategoryPage('desserts');
  if (currentPage === 'cart') initCartPage();
  if (currentPage === 'gallery') initGallery();
  if (currentPage === 'contact') initContactForm();
  if (currentPage === 'about') initAboutPage();
  if (currentPage === 'product-detail') initProductDetailPage();
  if (!('ontouchstart' in window)) initCursorGlow();
});

function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === 'index.html' || path === '') return 'index';
  return path.replace('.html', '');
}

function initLoadingScreen() {
  const loader = document.querySelector('.loading-screen');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 1600);
  }
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !e.target.closest('.nav-panel')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      }
    });
  }
}

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initNavIndicator() {
  const panel = document.querySelector('.nav-panel');
  const indicator = document.querySelector('.nav-indicator');
  const activeLink = document.querySelector('.nav-links a.active');
  if (!panel || !indicator || !activeLink) return;
  const panelRect = panel.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  indicator.style.left = (linkRect.left - panelRect.left) + 'px';
  indicator.style.width = linkRect.width + 'px';
  indicator.style.opacity = '1';
}

function initScrollSpy() {
  const sectionIds = ['hero', 'categories', 'bestSellers', 'specialSection', 'testimonials', 'newsletter'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;

  const navMap = {
    hero: 'index.html',
    categories: 'index.html',
    bestSellers: 'index.html',
    specialSection: 'index.html',
    testimonials: 'index.html',
    newsletter: 'index.html'
  };

  const navLinks = document.querySelectorAll('.nav-links a');
  let currentActive = document.querySelector('.nav-links a.active');

  const observer = new IntersectionObserver((entries) => {
    let maxRatio = 0;
    let maxId = null;
    entries.forEach(entry => {
      if (entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio;
        maxId = entry.target.id;
      }
    });
    if (maxId && navMap[maxId]) {
      const targetHref = navMap[maxId];
      const newActive = Array.from(navLinks).find(l => l.getAttribute('href') === targetHref);
      if (newActive && newActive !== currentActive) {
        navLinks.forEach(l => l.classList.remove('active'));
        newActive.classList.add('active');
        currentActive = newActive;
        initNavIndicator();
      }
    }
  }, { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9], rootMargin: '-80px 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}

function initThemeToggle() {
  const toggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('bakeverseTheme');
  if (saved) html.setAttribute('data-theme', saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('bakeverseTheme', next);
      toggle.innerHTML = next === 'dark' ? '&#9790;' : '&#9728;';
      requestAnimationFrame(() => requestAnimationFrame(initNavIndicator));
    });
    const current = html.getAttribute('data-theme');
    toggle.innerHTML = current === 'dark' ? '&#9790;' : '&#9728;';
  }
}

function initCartSidebar() {
  const openBtn = document.querySelector('.cart-toggle');
  const sidebar = document.querySelector('.cart-sidebar');
  const closeBtn = document.querySelector('.cart-sidebar-close');

  if (openBtn && sidebar) {
    openBtn.addEventListener('click', () => {
      sidebar.classList.add('open');
      renderCartSidebar();
    });
  }
  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));
  }
  document.addEventListener('click', (e) => {
    if (sidebar?.classList.contains('open') && !sidebar.contains(e.target) && !e.target.closest('.cart-toggle')) {
      sidebar.classList.remove('open');
    }
  });
}

function renderCartSidebar() {
  const container = document.querySelector('.cart-sidebar-items');
  const totalEl = document.querySelector('.cart-sidebar-total span:last-child');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-state"><span class="icon">&#128722;</span><h3>Your cart is empty</h3><p>Add some delicious treats!</p></div>';
    if (totalEl) totalEl.textContent = '$0';
    return;
  }

  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return '';
    return `
      <div class="cart-sidebar-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-sidebar-item-info">
          <h4>${product.name}</h4>
          <p>$${product.price}</p>
        </div>
        <div class="cart-sidebar-item-qty">
          <button onclick="updateCartQty(${product.id}, ${item.qty - 1})">-</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${product.id}, ${item.qty + 1})">+</button>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = `$${getCartTotal()}`;
}

function addToCart(id, showToast = true) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  renderCartSidebar();
  if (showToast) showToastMsg('Added to cart!', 'success');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartBadge();
  renderCartSidebar();
  if (document.querySelector('.cart-page')) initCartPage();
}

function updateCartQty(id, qty) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = qty;
    saveCart();
    updateCartBadge();
    renderCartSidebar();
    if (document.querySelector('.cart-page')) initCartPage();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0).toFixed(2);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function saveCart() {
  localStorage.setItem('bakeverseCart', JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const count = getCartCount();
    if (count > 0) {
      badge.textContent = count > 99 ? '99+' : count;
      badge.classList.add('show');
    } else {
      badge.classList.remove('show');
    }
  }
}

function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToastMsg('Removed from wishlist', '');
  } else {
    wishlist.push(id);
    showToastMsg('Added to wishlist!', 'success');
  }
  localStorage.setItem('bakeverseWishlist', JSON.stringify(wishlist));
  document.querySelectorAll(`.product-wishlist[data-id="${id}"]`).forEach(el => {
    el.classList.toggle('liked');
  });
}

function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initSearch() {
  const searchToggle = document.querySelector('.search-toggle');
  const overlay = document.querySelector('.search-overlay');
  const input = overlay?.querySelector('input');
  const results = overlay?.querySelector('.search-results');

  if (searchToggle && overlay) {
    searchToggle.addEventListener('click', () => {
      overlay.classList.toggle('active');
      if (overlay.classList.contains('active')) {
        setTimeout(() => input?.focus(), 100);
      }
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
    if (input && results) {
      input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        if (q.length < 2) { results.innerHTML = ''; return; }
        const matches = products.filter(p =>
          p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
        ).slice(0, 8);
        if (matches.length === 0) {
          results.innerHTML = '<p style="color:var(--text-muted);padding:20px;text-align:center;">No results found</p>';
          return;
        }
        results.innerHTML = matches.map(p => `
          <div class="search-result-item" onclick="handleSearchSelect(${p.id})">
            <img src="${p.image}" alt="${p.name}">
            <div class="info">
              <h4>${p.name}</h4>
              <p>$${p.price}</p>
            </div>
          </div>
        `).join('');
      });
    }
  }
}

function handleSearchSelect(id) {
  document.querySelector('.search-overlay')?.classList.remove('active');
  window.location.href = 'product-detail.html?id=' + id;
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (els.length === 0) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

function openQuickView(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const modal = document.getElementById('quickViewModal');
  if (!modal) return;
  modal.querySelector('.modal-image').src = product.image;
  modal.querySelector('.modal-image').alt = product.name;
  modal.querySelector('.modal-info h2').textContent = product.name;
  modal.querySelector('.rating').innerHTML = '&#9733;'.repeat(Math.floor(product.rating)) + '&#9734;'.repeat(5 - Math.floor(product.rating)) + ` <span>(${product.rating})</span>`;
  modal.querySelector('.description').textContent = product.description;
  modal.querySelector('.price').textContent = `$${product.price}`;
  modal.querySelector('.add-to-cart-btn').onclick = () => {
    addToCart(product.id);
    modal.classList.remove('active');
  };
  modal.classList.add('active');
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.modal-backdrop') && !e.target.closest('.cart-sidebar')) {
    document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  }
  if (e.target.closest('.product-wishlist')) {
    const btn = e.target.closest('.product-wishlist');
    toggleWishlist(parseInt(btn.dataset.id));
  }
  if (e.target.closest('.add-to-cart')) {
    const btn = e.target.closest('.add-to-cart');
    const id = parseInt(btn.dataset.id);
    animateAddToCart(btn);
    addToCart(id);
    btn.innerHTML = '&#10003; Added';
    setTimeout(() => { btn.innerHTML = 'Add to Cart'; }, 1500);
  }
  if (e.target.closest('.quick-view')) {
    const btn = e.target.closest('.quick-view');
    openQuickView(parseInt(btn.dataset.id));
  }
  if (e.target.closest('.product-card') && !e.target.closest('.quick-view') && !e.target.closest('.product-wishlist') && !e.target.closest('.add-to-cart')) {
    const card = e.target.closest('.product-card');
    const id = card.querySelector('[data-id]')?.dataset.id;
    if (id) window.location.href = 'product-detail.html?id=' + id;
  }
});

function animateAddToCart(btn) {
  const cartIcon = document.querySelector('.cart-toggle');
  if (!cartIcon) return;
  const animEl = document.createElement('div');
  animEl.className = 'quantity-anim';
  animEl.textContent = '\uD83E\uDD50';
  document.body.appendChild(animEl);
  const btnRect = btn.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();
  animEl.style.left = btnRect.left + 'px';
  animEl.style.top = btnRect.top + 'px';
  animEl.style.position = 'fixed';
  animEl.style.zIndex = '99999';
  animEl.style.fontSize = '1.5rem';
  animEl.style.pointerEvents = 'none';
  animEl.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
  requestAnimationFrame(() => {
    animEl.style.left = cartRect.left + 'px';
    animEl.style.top = cartRect.top + 'px';
    animEl.style.transform = 'scale(0.3)';
    animEl.style.opacity = '0';
  });
  setTimeout(() => animEl.remove(), 900);
}

function showToastMsg(msg, type = '') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type}`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

const filterMap = {
  chocolate: p => /chocolate/i.test(p.name),
  fruit: p => /strawberry|blueberry|lemon|mango|raspberry|berry|coconut|lychee/i.test(p.name),
  cheese: p => /cheesecake|cheese/i.test(p.name),
  best: p => p.rating >= 4.8,
  croissant: p => /croissant/i.test(p.name),
  danishes: p => /danish/i.test(p.name),
  classic: p => !/chocolate/i.test(p.name),
  sourdough: p => /sourdough/i.test(p.name),
  french: p => /baguette|brioche/i.test(p.name),
  italian: p => /ciabatta|focaccia/i.test(p.name),
  cheesecake: p => /cheesecake/i.test(p.name),
  brownies: p => /brownie/i.test(p.name),
  cupcakes: p => /cupcake/i.test(p.name),
  donuts: p => /donut/i.test(p.name),
  macarons: p => /macaron/i.test(p.name),
  mousse: p => /mousse/i.test(p.name)
};

function renderProducts(category, containerId = 'productsContainer', filter = 'all', search = '') {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filtered = products.filter(p => p.category === category);
  if (filter !== 'all') {
    const filterFn = filterMap[filter];
    if (filterFn) filtered = filtered.filter(filterFn);
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><span class="icon">&#127860;</span><h3>No products found</h3><p>Try a different filter or search term.</p></div>';
    return;
  }

  container.innerHTML = filtered.map(p => {
    const inWishlist = wishlist.includes(p.id);
    const stars = '&#9733;'.repeat(Math.floor(p.rating)) + '&#9734;'.repeat(5 - Math.floor(p.rating));
    return `
      <div class="product-card reveal">
        <div class="product-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          ${p.rating >= 4.8 ? '<span class="product-badge">Best Seller</span>' : ''}
          <button class="product-wishlist ${inWishlist ? 'liked' : ''}" data-id="${p.id}" title="Add to wishlist">${inWishlist ? '&#9829;' : '&#9825;'}</button>
          <button class="quick-view" data-id="${p.id}" title="Quick view" style="position:absolute;bottom:12px;right:12px;width:36px;height:36px;border-radius:50%;border:none;background:rgba(255,255,255,0.9);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem;color:var(--text);transition:var(--transition);opacity:0;">&#128065;</button>
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-footer">
            <span class="product-price">$${p.price}</span>
            <span class="product-rating">${stars} <span>(${p.rating})</span></span>
          </div>
          <button class="btn btn-primary btn-sm add-to-cart" data-id="${p.id}">Add to Cart</button>
        </div>
      </div>
    `;
  }).join('');
  initScrollReveal();
}

function initCategoryPage(category) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.querySelector('.category-search');
  let currentFilter = 'all';
  let currentSearch = '';

  renderProducts(category, 'productsContainer', currentFilter, currentSearch);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      renderProducts(category, 'productsContainer', currentFilter, currentSearch);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentSearch = searchInput.value;
      renderProducts(category, 'productsContainer', currentFilter, currentSearch);
    });
  }
}

function initIndexPage() {
  renderBestSellers();
  initCountdown();
  initTestimonialCarousel();
  initParticles();
  initParallax();
}

function renderBestSellers() {
  const container = document.getElementById('bestSellersContainer');
  if (!container) return;
  const bestSellers = products.filter(p => p.rating >= 4.8).slice(0, 6);
  container.innerHTML = bestSellers.map(p => {
    const inWishlist = wishlist.includes(p.id);
    const stars = '&#9733;'.repeat(Math.floor(p.rating)) + '&#9734;'.repeat(5 - Math.floor(p.rating));
    return `
      <div class="product-card reveal">
        <div class="product-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="product-badge">Best Seller</span>
          <button class="product-wishlist ${inWishlist ? 'liked' : ''}" data-id="${p.id}">${inWishlist ? '&#9829;' : '&#9825;'}</button>
          <button class="quick-view" data-id="${p.id}" title="Quick view" style="position:absolute;bottom:12px;right:12px;width:36px;height:36px;border-radius:50%;border:none;background:rgba(255,255,255,0.9);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem;color:var(--text);transition:var(--transition);opacity:0;">&#128065;</button>
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-footer">
            <span class="product-price">$${p.price}</span>
            <span class="product-rating">${stars} <span>(${p.rating})</span></span>
          </div>
          <button class="btn btn-primary btn-sm add-to-cart" data-id="${p.id}">Add to Cart</button>
        </div>
      </div>
    `;
  }).join('');
  initScrollReveal();
}

function initCountdown() {
  const el = document.getElementById('countdownTimer');
  if (!el) return;
  function update() {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    const diff = end - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.innerHTML = `
      <div class="timer-item"><span class="number">${String(h).padStart(2,'0')}</span><span class="label">Hours</span></div>
      <div class="timer-item"><span class="number">${String(m).padStart(2,'0')}</span><span class="label">Mins</span></div>
      <div class="timer-item"><span class="number">${String(s).padStart(2,'0')}</span><span class="label">Secs</span></div>
    `;
  }
  update();
  setInterval(update, 1000);
}

function initTestimonialCarousel() {
  const track = document.querySelector('.testimonials-grid');
  if (!track) return;
  const cards = track.querySelectorAll('.testimonial-card');
  if (cards.length <= 3) return;

  let idx = 0;
  const total = cards.length;
  cards.forEach((c, i) => { c.dataset.pos = i; c.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; });

  function show() {
    const visible = window.innerWidth > 992 ? 3 : 1;
    cards.forEach((c, i) => {
      let show = false;
      for (let j = 0; j < visible; j++) {
        if ((idx + j) % total === i) { show = true; break; }
      }
      c.style.display = show ? 'block' : 'none';
      c.style.opacity = show ? '1' : '0';
      c.style.transform = show ? 'translateY(0)' : 'translateY(20px)';
    });
    idx = (idx + 1) % total;
  }
  show();
  setInterval(show, 4000);
}

function initParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 6 + 's';
    p.style.animationDuration = (4 + Math.random() * 4) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
    container.appendChild(p);
  }
}

function initParallax() {
  const hero = document.querySelector('.hero');
  const bg = hero?.querySelector('.hero-bg');
  if (!bg) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    bg.style.transform = `translateY(${scrolled * 0.4}px)`;
  });
}

function initCartPage() {
  const container = document.querySelector('.cart-items');
  const summaryContainer = document.querySelector('.cart-summary');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-state"><span class="icon">&#128722;</span><h3>Your cart is empty</h3><p>Browse our delicious products and add items to your cart.</p><a href="index.html" class="btn btn-primary">Start Shopping</a></div>';
    if (summaryContainer) {
      summaryContainer.querySelector('.summary-row.total span:last-child').textContent = '$0';
    }
    return;
  }

  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return '';
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <span class="cart-item-price">$${product.price}</span>
        </div>
        <div class="cart-item-qty">
          <button onclick="updateCartQty(${product.id}, ${item.qty - 1})">-</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${product.id}, ${item.qty + 1})">+</button>
        </div>
        <div class="cart-item-total">$${(product.price * item.qty).toFixed(2)}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${product.id})" title="Remove">&#10005;</button>
      </div>
    `;
  }).join('');

  if (summaryContainer) {
    const subtotal = getCartTotal();
    const discount = 0;
    const promoMsg = summaryContainer.querySelector('.promo-msg');
    let promoDiscount = 0;
    if (promoMsg?.classList.contains('success')) {
      promoDiscount = parseFloat(subtotal) * 0.1;
    }
    const total = (parseFloat(subtotal) - promoDiscount).toFixed(2);
    summaryContainer.querySelector('.subtotal-val').textContent = `$${subtotal}`;
    summaryContainer.querySelector('.discount-val').textContent = promoDiscount > 0 ? `-$${promoDiscount.toFixed(2)}` : '$0';
    summaryContainer.querySelector('.total-val').textContent = `$${total}`;
  }

  const promoInput = document.querySelector('.promo-input');
  const promoApply = document.querySelector('.promo-apply');
  const promoMsg = document.querySelector('.promo-msg');
  if (promoInput && promoApply && promoMsg) {
    promoApply.onclick = () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'BAKE10' || code === 'BAKERY10') {
        promoMsg.textContent = 'Promo applied! 10% off!';
        promoMsg.className = 'promo-msg success';
        initCartPage();
      } else {
        promoMsg.textContent = 'Invalid promo code';
        promoMsg.className = 'promo-msg error';
      }
    };
  }

  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      showToastMsg('Order placed successfully! Thank you!', 'success');
      cart = [];
      saveCart();
      updateCartBadge();
      initCartPage();
    };
  }
}

function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const close = lightbox?.querySelector('.lightbox-close');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });
  if (close && lightbox) {
    close.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }
}

function initContactForm() {
  const form = document.querySelector('.contact-form-card form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToastMsg('Message sent! We\'ll get back to you soon.', 'success');
    form.reset();
  });
}

function initAboutPage() {
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length === 0) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function initCursorGlow() {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

function animateCounter(el, target) {
  let current = 0;
  const step = Math.ceil(target / 60);
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current + (target > 1000 ? '+' : '');
  }, 25);
}

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    initNavIndicator();
  }, 100);
});

function getProductExtendedData(id) {
  const product = products.find(p => p.id === id);
  if (!product) return null;
  const cat = categoryMeta[product.category] || categoryMeta.cakes;
  const start = (product.id * 7 + product.category.length) % galleryPool.length;
  const gallery = [product.image.replace('w=400&h=300', 'w=800&h=800')];
  for (let i = 1; i < 5; i++) {
    const idx = (start + i * 3) % galleryPool.length;
    if (!gallery.includes(galleryPool[idx])) gallery.push(galleryPool[idx]);
  }
  while (gallery.length < 5) gallery.push(galleryPool[(start + gallery.length * 3) % galleryPool.length]);
  const catReviews = reviewTemplates[product.category] || reviewTemplates.cakes;
  const nameIdx = product.id % 7;
  const reviews = [];
  for (let i = 0; i < 3; i++) {
    reviews.push({
      name: reviewerNames[(nameIdx + i) % reviewerNames.length],
      rating: i === 1 ? 4 : 5,
      comment: catReviews[(product.id + i) % catReviews.length]
    });
  }
  return { ...product, gallery, ingredients: cat.ingredients, weightOptions: cat.weightOptions, flavors: cat.flavors, deliveryTime: cat.deliveryTime, isAvailable: true, categoryName: cat.name, reviews };
}

function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const container = document.getElementById('productDetailContainer');
  if (!container) return;
  if (!id || !products.find(p => p.id === id)) {
    container.innerHTML = '<div class=\"empty-state\" style=\"padding:120px 20px;\"><span class=\"icon\">&#127860;</span><h3>Product Not Found</h3><p>The product you are looking for does not exist or has been removed.</p><a href=\"index.html\" class=\"btn btn-primary\" style=\"margin-top:15px;\">Back to Shop</a></div>';
    return;
  }
  const data = getProductExtendedData(id);
  renderProductDetail(id, data, container);
  initScrollReveal();
  document.title = data.name + ' - Bakeverse Premium Bakery';
}

function renderProductDetail(id, p, container) {
  const stars = '&#9733;'.repeat(Math.floor(p.rating)) + '&#9734;'.repeat(5 - Math.floor(p.rating));
  container.innerHTML = '';
  const breadcrumb = document.createElement('nav');
  breadcrumb.className = 'pd-breadcrumb';
  breadcrumb.innerHTML = '<a href=\"index.html\">Home</a><span class=\"sep\">/</span><a href=\"' + p.category + '.html\">' + p.categoryName + '</a><span class=\"sep\">/</span><span>' + p.name + '</span>';
  container.appendChild(breadcrumb);
  const layout = document.createElement('div');
  layout.className = 'pd-layout reveal';
  layout.innerHTML = '<div class=\"pd-gallery\"><div class=\"pd-gallery-main\"><button class=\"pd-gallery-nav pd-gallery-prev\">&#10094;</button><button class=\"pd-gallery-nav pd-gallery-next\">&#10095;</button></div><div class=\"pd-gallery-thumbs\"></div></div><div class=\"pd-info\"></div>';
  container.appendChild(layout);
  const galleryMain = layout.querySelector('.pd-gallery-main');
  const mainImg = document.createElement('img');
  mainImg.id = 'pdMainImage';
  mainImg.src = p.gallery[0];
  mainImg.alt = p.name;
  galleryMain.insertBefore(mainImg, galleryMain.firstChild);
  const thumbsContainer = layout.querySelector('.pd-gallery-thumbs');
  p.gallery.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.className = 'pd-thumb' + (i === 0 ? ' active' : '');
    thumb.src = img;
    thumb.alt = p.name;
    thumb.dataset.index = i;
    thumbsContainer.appendChild(thumb);
  });
  const info = layout.querySelector('.pd-info');
  info.innerHTML = '<h1 class=\"pd-name\">' + p.name + '</h1><div class=\"pd-rating-row\"><span class=\"pd-stars\">' + stars + '</span><span class=\"pd-rating-num\">' + p.rating + '</span><span class=\"pd-review-count\">(' + p.reviews.length + ' reviews)</span></div><div class=\"pd-price\">$' + p.price.toFixed(2) + '</div><div class=\"pd-availability in-stock\">&#10003; In Stock</div><p class=\"pd-desc\">' + p.description + '</p><div class=\"pd-ingredients\"><h3>Ingredients</h3><p>' + p.ingredients + '</p></div>';
  if (p.weightOptions && p.weightOptions.length) {
    const woGroup = document.createElement('div');
    woGroup.className = 'pd-option-group';
    woGroup.innerHTML = '<h3>Select Size</h3><div class=\"pd-options pd-weight-options\">' + p.weightOptions.map((wo, i) => '<button class=\"pd-option-btn' + (i === 0 ? ' active' : '') + '\" data-index=\"' + i + '\" data-multiplier=\"' + wo.multiplier + '\" data-label=\"' + wo.label + '\">' + wo.label + '<br><small>$' + (p.price * wo.multiplier).toFixed(2) + '</small></button>').join('') + '</div></div>';
    info.appendChild(woGroup);
  }
  if (p.flavors && p.flavors.length) {
    const flGroup = document.createElement('div');
    flGroup.className = 'pd-option-group';
    flGroup.innerHTML = '<h3>Flavor</h3><div class=\"pd-options pd-flavor-options\">' + p.flavors.map((f, i) => '<button class=\"pd-option-btn' + (i === 0 ? ' active' : '') + '\" data-flavor=\"' + f + '\">' + f + '</button>').join('') + '</div></div>';
    info.appendChild(flGroup);
  }
  const qtyGroup = document.createElement('div');
  qtyGroup.className = 'pd-qty-group';
  qtyGroup.innerHTML = '<h3>Quantity</h3><div class=\"pd-qty\"><button class=\"pd-qty-btn pd-qty-minus\">&#8722;</button><input type=\"number\" class=\"pd-qty-input\" value=\"1\" min=\"1\" max=\"99\"><button class=\"pd-qty-btn pd-qty-plus\">&#43;</button></div></div>';
  info.appendChild(qtyGroup);
  const actions = document.createElement('div');
  actions.className = 'pd-actions';
  actions.innerHTML = '<button class=\"btn btn-primary btn-lg pd-add-to-cart\" data-id=\"' + p.id + '\">Add to Cart</button><button class=\"btn btn-dark btn-lg pd-buy-now\" data-id=\"' + p.id + '\">Buy Now</button>';
  info.appendChild(actions);
  const delivery = document.createElement('div');
  delivery.className = 'pd-delivery';
  delivery.innerHTML = '<div class=\"pd-delivery-icon\">&#128666;</div><div class=\"pd-delivery-info\"><strong>Estimated Delivery</strong><p>' + p.deliveryTime + '</p><p class=\"pd-delivery-note\">Free delivery on orders over $50</p></div></div>';
  info.appendChild(delivery);
  const reviewsSection = document.createElement('section');
  reviewsSection.className = 'pd-reviews-section';
  reviewsSection.innerHTML = '<h2 class=\"section-title\">Customer <span>Reviews</span></h2><div class=\"pd-reviews-summary\"><div class=\"pd-reviews-average\"><span class=\"pd-avg-num\">' + p.rating + '</span><span class=\"pd-avg-stars\">' + stars + '</span><span>' + p.reviews.length + ' reviews</span></div><div class=\"pd-reviews-list\">' + p.reviews.map(r => '<div class=\"pd-review-card\"><div class=\"pd-review-header\"><strong>' + r.name + '</strong><span class=\"pd-review-stars\">' + '&#9733;'.repeat(r.rating) + '&#9734;'.repeat(5 - r.rating) + '</span></div><p>' + r.comment + '</p></div>').join('') + '</div></div></section>';
  container.appendChild(reviewsSection);
  const relatedSection = document.createElement('section');
  relatedSection.className = 'pd-related-section';
  relatedSection.innerHTML = '<h2 class=\"section-title\">You May <span>Also Like</span></h2><div class=\"pd-related-grid\" id=\"pdRelatedGrid\">';
  container.appendChild(relatedSection);
  const related = products.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0, 4);
  const relatedGrid = document.getElementById('pdRelatedGrid');
  if (relatedGrid) {
    relatedGrid.innerHTML = related.map(pr => {
      const s = '&#9733;'.repeat(Math.floor(pr.rating)) + '&#9734;'.repeat(5 - Math.floor(pr.rating));
      return '<div class="product-card" onclick="window.location.href=\'product-detail.html?id=' + pr.id + '\'"><div class="product-image"><img src="' + pr.image + '" alt="' + pr.name + '" loading="lazy"><span class="product-badge">Best Seller</span></div><div class="product-info"><h3 class="product-name">' + pr.name + '</h3><div class="product-footer"><span class="product-price">$' + pr.price + '</span><span class="product-rating">' + s + ' <span>(' + pr.rating + ')</span></span></div></div></div>';
    }).join('');
  }
  const galleryPrev = layout.querySelector('.pd-gallery-prev');
  const galleryNext = layout.querySelector('.pd-gallery-next');
  let currentGalleryIndex = 0;
  const updateGallery = (idx) => {
    currentGalleryIndex = idx;
    const img = document.getElementById('pdMainImage');
    if (img) {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = p.gallery[idx];
        img.style.opacity = '1';
      }, 200);
    }
    document.querySelectorAll('.pd-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
  };
  if (galleryPrev) galleryPrev.addEventListener('click', () => {
    const prev = (currentGalleryIndex - 1 + p.gallery.length) % p.gallery.length;
    updateGallery(prev);
  });
  if (galleryNext) galleryNext.addEventListener('click', () => {
    const next = (currentGalleryIndex + 1) % p.gallery.length;
    updateGallery(next);
  });
  document.querySelectorAll('.pd-thumb').forEach(t => {
    t.addEventListener('click', () => updateGallery(parseInt(t.dataset.index)));
  });
  const qtyMinus = layout.querySelector('.pd-qty-minus');
  const qtyPlus = layout.querySelector('.pd-qty-plus');
  const qtyInput = layout.querySelector('.pd-qty-input');
  if (qtyMinus) qtyMinus.addEventListener('click', () => {
    const val = parseInt(qtyInput.value) - 1;
    if (val >= 1) qtyInput.value = val;
  });
  if (qtyPlus) qtyPlus.addEventListener('click', () => {
    const val = parseInt(qtyInput.value) + 1;
    if (val <= 99) qtyInput.value = val;
  });
  const addToCartBtn = layout.querySelector('.pd-add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const qty = parseInt(qtyInput?.value || 1);
      for (let i = 0; i < qty; i++) addToCart(id, false);
      showToastMsg('Added ' + qty + 'x ' + p.name + ' to cart!', 'success');
    });
  }
  const buyNowBtn = layout.querySelector('.pd-buy-now');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const qty = parseInt(qtyInput?.value || 1);
      for (let i = 0; i < qty; i++) addToCart(id, false);
      document.querySelector('.cart-toggle')?.click();
    });
  }
  const weightBtns = layout.querySelectorAll('.pd-weight-options .pd-option-btn');
  const priceEl = layout.querySelector('.pd-price');
  weightBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      weightBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const multiplier = parseFloat(btn.dataset.multiplier);
      if (priceEl) priceEl.textContent = '$' + (p.price * multiplier).toFixed(2);
    });
  });
  const flavorBtns = layout.querySelectorAll('.pd-flavor-options .pd-option-btn');
  flavorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      flavorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}
