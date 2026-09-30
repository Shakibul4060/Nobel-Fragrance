/* =========================================
   NOBLE FRAGRANCE
   PRODUCT + CART SYSTEM
========================================= */


const products = {

  aurelia: {
    number: "01",
    name: "AURELIA",
    image: "images/aurelia.png",
    tagline: "ELEGANT · RADIANT · TIMELESS",
    description:
      "A sophisticated fragrance created for moments that deserve a signature. Aurelia balances luminous freshness with a refined and lasting character.",
    price: 4500,
    top: "Bergamot · Mandarin · Citrus",
    heart: "Jasmine · Rose · White Florals",
    base: "Musk · Amber · Soft Woods",
    longevity: "8–10 Hours",
    occasion: "Evening",
    character: "Sophisticated"
  },


  bloom: {
    number: "02",
    name: "BLOOM",
    image: "images/bloom.png",
    tagline: "FRESH · FLORAL · MODERN",
    description:
      "A graceful floral composition created around freshness, softness and effortless elegance.",
    price: 4200,
    top: "Pear · Bergamot · Green Notes",
    heart: "Peony · Jasmine · Rose",
    base: "Musk · Cedar · Amber",
    longevity: "7–9 Hours",
    occasion: "Daytime",
    character: "Elegant"
  },


  elan: {
    number: "03",
    name: "ELAN",
    image: "images/elan.png",
    tagline: "BOLD · CLEAN · DISTINCTIVE",
    description:
      "A confident and clean fragrance designed for those who naturally command attention.",
    price: 4600,
    top: "Grapefruit · Lemon · Bergamot",
    heart: "Lavender · Geranium · Violet",
    base: "Vetiver · Cedar · Musk",
    longevity: "8–10 Hours",
    occasion: "Everyday",
    character: "Confident"
  },


  lumiere: {
    number: "04",
    name: "LUMIERE",
    image: "images/lumiere.png",
    tagline: "BRIGHT · REFINED · LUMINOUS",
    description:
      "A luminous composition inspired by light itself.",
    price: 4400,
    top: "Lemon · Bergamot · Neroli",
    heart: "Orange Blossom · Jasmine · Iris",
    base: "White Musk · Amber · Sandalwood",
    longevity: "7–9 Hours",
    occasion: "Day & Evening",
    character: "Luminous"
  },


  mist: {
    number: "05",
    name: "MIST",
    image: "images/mist.png",
    tagline: "SOFT · FRESH · AIRY",
    description:
      "An effortless fragrance built around freshness and quiet sophistication.",
    price: 3900,
    top: "Lime · Green Tea · Citrus",
    heart: "Lily · Jasmine · Fresh Florals",
    base: "White Musk · Cedar",
    longevity: "6–8 Hours",
    occasion: "Daytime",
    character: "Effortless"
  },


  noir: {
    number: "06",
    name: "NOIR",
    image: "images/noir.png",
    tagline: "DARK · INTENSE · MAGNETIC",
    description:
      "A deeper and more magnetic expression of modern luxury.",
    price: 4900,
    top: "Black Pepper · Bergamot",
    heart: "Spices · Leather · Rose",
    base: "Amber · Oud · Dark Woods",
    longevity: "9–12 Hours",
    occasion: "Evening",
    character: "Magnetic"
  },


  serene: {
    number: "07",
    name: "SERENE",
    image: "images/serene.png",
    tagline: "CALM · PURE · ELEGANT",
    description:
      "A quiet expression of understated luxury.",
    price: 4100,
    top: "Bergamot · Pear · Fresh Air",
    heart: "Iris · Jasmine · Lavender",
    base: "Musk · Sandalwood · Amber",
    longevity: "7–9 Hours",
    occasion: "Everyday",
    character: "Calm"
  },


  solara: {
    number: "08",
    name: "SOLARA",
    image: "images/solara.png",
    tagline: "WARM · RADIANT · CONFIDENT",
    description:
      "A warm and radiant composition created for days filled with energy and confidence.",
    price: 4500,
    top: "Mandarin · Orange · Bergamot",
    heart: "Jasmine · Ylang-Ylang · Solar Notes",
    base: "Vanilla · Amber · Sandalwood",
    longevity: "8–10 Hours",
    occasion: "Day & Evening",
    character: "Radiant"
  },


  velora: {
    number: "09",
    name: "VELORA",
    image: "images/velora.png",
    tagline: "SMOOTH · SENSUAL · MODERN",
    description:
      "A sophisticated signature with a contemporary edge.",
    price: 4700,
    top: "Pink Pepper · Bergamot",
    heart: "Rose · Jasmine · Violet",
    base: "Vanilla · Musk · Sandalwood",
    longevity: "8–10 Hours",
    occasion: "Evening",
    character: "Sensual"
  },


  verde: {
    number: "10",
    name: "VERDE",
    image: "images/verde.png",
    tagline: "GREEN · FRESH · NATURAL",
    description:
      "Inspired by the freshness of nature and open air.",
    price: 4000,
    top: "Lime · Basil · Green Citrus",
    heart: "Green Tea · Jasmine · Herbs",
    base: "Vetiver · Cedar · Musk",
    longevity: "7–9 Hours",
    occasion: "Daytime",
    character: "Natural"
  }

};



/* =========================================
   CURRENT PRODUCT
========================================= */

const params =
  new URLSearchParams(
    window.location.search
  );


const productId =
  params.get("id") || "aurelia";


const product =
  products[productId];


if (!product) {

  window.location.href =
    "index.html#experience";

}



/* =========================================
   DISPLAY PRODUCT
========================================= */

if (product) {

  document.title =
    `${product.name} — Noble Fragrance`;


  document.getElementById(
    "productImage"
  ).src = product.image;


  document.getElementById(
    "productImage"
  ).alt =
    `${product.name} fragrance`;


  document.getElementById(
    "productNumber"
  ).textContent =
    product.number;


  document.getElementById(
    "productName"
  ).textContent =
    product.name;


  document.getElementById(
    "productTagline"
  ).textContent =
    product.tagline;


  document.getElementById(
    "productDescription"
  ).textContent =
    product.description;


  document.getElementById(
    "productPrice"
  ).textContent =
    `৳${product.price.toLocaleString()}`;


  document.getElementById(
    "topNotes"
  ).textContent =
    product.top;


  document.getElementById(
    "heartNotes"
  ).textContent =
    product.heart;


  document.getElementById(
    "baseNotes"
  ).textContent =
    product.base;


  document.getElementById(
    "longevity"
  ).textContent =
    product.longevity;


  document.getElementById(
    "occasion"
  ).textContent =
    product.occasion;


  document.getElementById(
    "character"
  ).textContent =
    product.character;

}



/* =========================================
   CART STORAGE
========================================= */

let cart = [];

try {

  cart =
    JSON.parse(
      localStorage.getItem(
        "nobleFragranceCart"
      )
    ) || [];

} catch (error) {

  cart = [];

}



/* =========================================
   ELEMENTS
========================================= */

const cartButton =
  document.getElementById(
    "cartButton"
  );


const cartDrawer =
  document.getElementById(
    "cartDrawer"
  );


const cartOverlay =
  document.getElementById(
    "cartOverlay"
  );


const closeCart =
  document.getElementById(
    "closeCart"
  );


const cartItems =
  document.getElementById(
    "cartItems"
  );


const cartCount =
  document.getElementById(
    "cartCount"
  );


const cartTotal =
  document.getElementById(
    "cartTotal"
  );


const addToCart =
  document.getElementById(
    "addToCart"
  );


const buyNow =
  document.getElementById(
    "buyNow"
  );


const increaseQty =
  document.getElementById(
    "increaseQty"
  );


const decreaseQty =
  document.getElementById(
    "decreaseQty"
  );


const quantityElement =
  document.getElementById(
    "quantity"
  );


const checkoutButton =
  document.getElementById(
    "checkoutButton"
  );



/* =========================================
   CHECK ELEMENTS
========================================= */

if (
  !cartButton ||
  !cartDrawer ||
  !cartOverlay ||
  !closeCart ||
  !cartItems ||
  !cartCount ||
  !cartTotal
) {

  console.error(
    "Cart HTML elements are missing."
  );

}



/* =========================================
   QUANTITY
========================================= */

let quantity = 1;


if (increaseQty) {

  increaseQty.addEventListener(
    "click",
    () => {

      quantity++;

      quantityElement.textContent =
        quantity;

    }
  );

}


if (decreaseQty) {

  decreaseQty.addEventListener(
    "click",
    () => {

      if (quantity > 1) {

        quantity--;

        quantityElement.textContent =
          quantity;

      }

    }
  );

}



/* =========================================
   SAVE CART
========================================= */

function saveCart() {

  localStorage.setItem(
    "nobleFragranceCart",
    JSON.stringify(cart)
  );

}



/* =========================================
   ADD TO CART
========================================= */

if (addToCart) {

  addToCart.addEventListener(
    "click",
    () => {

      const existing =
        cart.find(
          item =>
            item.id === productId
        );


      if (existing) {

        existing.quantity +=
          quantity;

      } else {

        cart.push({

          id: productId,

          name: product.name,

          image: product.image,

          price: product.price,

          quantity: quantity

        });

      }


      saveCart();

      renderCart();

      openCart();


      quantity = 1;


      if (quantityElement) {

        quantityElement.textContent =
          "1";

      }

    }
  );

}



/* =========================================
   BUY NOW
========================================= */

if (buyNow) {

  buyNow.addEventListener(
    "click",
    () => {

      cart = [];


      cart.push({

        id: productId,

        name: product.name,

        image: product.image,

        price: product.price,

        quantity: quantity

      });


      saveCart();

      renderCart();

      openCart();

    }
  );

}



/* =========================================
   RENDER CART
========================================= */

function renderCart() {

  if (!cartItems) return;


  cartItems.innerHTML = "";


  if (cart.length === 0) {

    cartItems.innerHTML = `

      <div class="empty-cart">

        <h3>
          YOUR CART IS EMPTY
        </h3>

        <p>
          Discover a fragrance
          made to become yours.
        </p>

      </div>

    `;

  }


  let total = 0;

  let count = 0;


  cart.forEach(
    (item, index) => {

      total +=
        item.price *
        item.quantity;


      count +=
        item.quantity;


      const itemElement =
        document.createElement(
          "div"
        );


      itemElement.className =
        "cart-item";


      itemElement.innerHTML = `

        <img
          src="${item.image}"
          alt="${item.name}"
        >

        <div>

          <h3>
            ${item.name}
          </h3>

          <p>
            ${item.quantity} ×
            ৳${item.price.toLocaleString()}
          </p>

          <div class="cart-item-price">
            ৳${(
              item.price *
              item.quantity
            ).toLocaleString()}
          </div>

        </div>

        <button
          class="remove-item"
          data-index="${index}"
          type="button"
          aria-label="Remove ${item.name}"
        >
          ×
        </button>

      `;


      cartItems.appendChild(
        itemElement
      );

    }
  );


  cartCount.textContent =
    count;


  cartTotal.textContent =
    `৳${total.toLocaleString()}`;


  document
    .querySelectorAll(
      ".remove-item"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.index
              );


            cart.splice(
              index,
              1
            );


            saveCart();

            renderCart();

          }
        );

      }
    );

}



/* =========================================
   OPEN CART
========================================= */

function openCart() {

  if (!cartDrawer || !cartOverlay) {
    return;
  }


  cartDrawer.classList.add(
    "active"
  );


  cartOverlay.classList.add(
    "active"
  );


  document.body.style.overflow =
    "hidden";

}



/* =========================================
   CLOSE CART
========================================= */

function closeCartDrawer() {

  if (!cartDrawer || !cartOverlay) {
    return;
  }


  cartDrawer.classList.remove(
    "active"
  );


  cartOverlay.classList.remove(
    "active"
  );


  document.body.style.overflow =
    "";

}



/* =========================================
   CART BUTTON TOGGLE
========================================= */

if (cartButton) {

  cartButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      event.stopPropagation();


      const isOpen =
        cartDrawer.classList.contains(
          "active"
        );


      if (isOpen) {

        closeCartDrawer();

      } else {

        openCart();

      }

    }
  );

}



/* =========================================
   CLOSE BUTTON
========================================= */

if (closeCart) {

  closeCart.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      event.stopPropagation();

      closeCartDrawer();

    }
  );

}



/* =========================================
   OVERLAY CLICK
========================================= */

if (cartOverlay) {

  cartOverlay.addEventListener(
    "click",
    function () {

      closeCartDrawer();

    }
  );

}



/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      cartDrawer &&
      cartDrawer.classList.contains(
        "active"
      )
    ) {

      closeCartDrawer();

    }

  }
);



/* =========================================
   CHECKOUT
========================================= */

if (checkoutButton) {

  checkoutButton.addEventListener(
    "click",
    () => {

      if (cart.length === 0) {

        alert(
          "Your cart is empty."
        );

        return;

      }


      alert(
        "Your order selection is ready. Contact Noble Fragrance to complete your order."
      );

    }
  );

}



/* =========================================
   INITIAL STATE
========================================= */

if (cartDrawer) {

  cartDrawer.classList.remove(
    "active"
  );

}


if (cartOverlay) {

  cartOverlay.classList.remove(
    "active"
  );

}


document.body.style.overflow =
  "";


/* =========================================
   INITIAL CART
========================================= */

renderCart();