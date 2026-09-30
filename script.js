/* =========================================
   NOBLE FRAGRANCE
   3D HELIX EXPERIENCE
========================================= */

const canvas = document.getElementById("three-canvas");


// =========================================
// IMAGE ORDER
// =========================================

const imageFiles = [
  "aurelia.png",
  "bloom.png",
  "elan.png",
  "lumiere.png",
  "mist.png",
  "noir.png",
  "serene.png",
  "solara.png",
  "velora.png",
  "verde.png"
];


// =========================================
// THREE.JS SETUP
// =========================================

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x10150F);


const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.set(
  0,
  0,
  8
);


const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false
});

renderer.setPixelRatio(
  Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
  window.innerWidth,
  window.innerHeight
);

renderer.outputEncoding = THREE.sRGBEncoding;


// =========================================
// LIGHT
// =========================================

const ambientLight = new THREE.AmbientLight(
  0xffffff,
  1.2
);

scene.add(ambientLight);


const pointLight = new THREE.PointLight(
  0xffffff,
  1.8,
  30
);

pointLight.position.set(
  3,
  5,
  7
);

scene.add(pointLight);


// =========================================
// CARD SETTINGS
// =========================================

const cards = [];

const cardWidth = 2.8;
const cardHeight = 4.0;

const cardGeometry =
  new THREE.PlaneGeometry(
    cardWidth,
    cardHeight,
    28,
    22
);


// =========================================
// TEXTURE LOADER
// =========================================

const textureLoader =
  new THREE.TextureLoader();


// =========================================
// HELIX SETTINGS
// =========================================

const helixRadius = 3.2;
const helixDepth = 9.5;

const cardSpacing = 0.95;


// =========================================
// CREATE CARDS
// =========================================

imageFiles.forEach((file, index) => {

  const material =
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,

      roughness: 0.65,
      metalness: 0.0,

      transparent: true,

      opacity: 1
    });


  const card =
    new THREE.Mesh(
      cardGeometry.clone(),
      material
    );


  card.userData.index = index;

  card.userData.basePositions = [];


  // Save original geometry positions
  const position =
    card.geometry.attributes.position;

  for (
    let i = 0;
    i < position.count;
    i++
  ) {

    card.userData.basePositions.push({
      x: position.getX(i),
      y: position.getY(i),
      z: position.getZ(i)
    });

  }


  textureLoader.load(
    `images/${file}`,

    texture => {

      texture.encoding =
        THREE.sRGBEncoding;

      texture.minFilter =
        THREE.LinearFilter;

      texture.magFilter =
        THREE.LinearFilter;

      texture.anisotropy =
        renderer.capabilities
          .getMaxAnisotropy();

      material.map = texture;

      material.needsUpdate = true;

    },

    undefined,

    error => {

      console.error(
        `Image could not be loaded: images/${file}`,
        error
      );

    }
  );


  scene.add(card);

  cards.push(card);

});


// =========================================
// GUIDE CURVES
// =========================================

const guideMaterialBack =
  new THREE.LineBasicMaterial({
    color: 0x777777,
    transparent: true,
    opacity: 0.22
  });


const guideMaterialFront =
  new THREE.LineBasicMaterial({
    color: 0xbcbab0,
    transparent: true,
    opacity: 0.35
  });


function createHelixPoints(
  direction = 1,
  offsetY = 0
) {

  const points = [];

  const segments = 220;

  for (
    let i = 0;
    i <= segments;
    i++
  ) {

    const p = i / segments;

    const t =
      p * Math.PI * 5.2 * direction;

    const x =
      Math.cos(t) * helixRadius;

    const z =
      Math.sin(t) * helixRadius;

    const y =
      (p - 0.5) * helixDepth;

    points.push(
      new THREE.Vector3(
        x,
        y + offsetY,
        z - 1
      )
    );

  }

  return points;
}


const backCurve =
  new THREE.BufferGeometry()
    .setFromPoints(
      createHelixPoints(
        1,
        -0.12
      )
    );


const frontCurve =
  new THREE.BufferGeometry()
    .setFromPoints(
      createHelixPoints(
        -1,
        0.12
      )
    );


const backGuide =
  new THREE.Line(
    backCurve,
    guideMaterialBack
  );


const frontGuide =
  new THREE.Line(
    frontCurve,
    guideMaterialFront
  );


scene.add(backGuide);
scene.add(frontGuide);


// =========================================
// SCROLL
// =========================================

let targetScroll = 0;
let smoothScroll = 0;


function getScrollProgress() {

  const maxScroll =
    document.documentElement.scrollHeight -
    window.innerHeight;

  if (maxScroll <= 0) {
    return 0;
  }

  return (
    window.scrollY / maxScroll
  );

}


window.addEventListener(
  "scroll",
  () => {

    targetScroll =
      getScrollProgress();

  },
  { passive: true }
);


// =========================================
// HELIX POSITION
// =========================================

function updateCard(
  card,
  index,
  progress
) {

  const total =
    cards.length;

  /*
    Each card receives a different
    position along the helix.
  */

  const base =
    index / total;


  let raw =
    base +
    progress * 2.3;


  const turns =
    raw * Math.PI * 2.6;


  const x =
    Math.cos(turns) *
    helixRadius;


  const z =
    Math.sin(turns) *
    helixRadius;


  const y =
    (0.5 - raw) *
    helixDepth;


  card.position.set(
    x,
    y,
    z - 1.3
  );


  // =====================================
  // CARD ORIENTATION
  // =====================================

  const tangentX =
    -Math.sin(turns);

  const tangentZ =
    Math.cos(turns);


  const angle =
    Math.atan2(
      tangentX,
      tangentZ
    );


  card.rotation.y =
    angle;


  // Slight X rotation
  card.rotation.x =
    Math.sin(turns) * 0.12;


  // =====================================
  // CARD DEFORMATION
  // =====================================

  const position =
    card.geometry.attributes.position;


  const original =
    card.userData.basePositions;


  for (
    let i = 0;
    i < position.count;
    i++
  ) {

    const baseVertex =
      original[i];


    const localX =
      baseVertex.x;


    const bend =
      Math.sin(
        localX /
        cardWidth *
        Math.PI
      ) * 0.30;


    position.setZ(
      i,
      baseVertex.z +
      bend
    );

  }


  position.needsUpdate = true;


  // =====================================
  // SCALE
  // =====================================

  const distance =
    Math.abs(
      Math.sin(turns)
    );


  const scale =
    0.82 +
    (1 - distance) *
    0.18;


  card.scale.set(
    scale,
    scale,
    scale
  );


  // =====================================
  // OPACITY
  // =====================================

  const material =
    card.material;


  material.opacity =
    0.45 +
    (1 - distance) *
    0.55;

}


// =========================================
// EDITORIAL TEXT
// =========================================

const editorials =
  document.querySelectorAll(
    ".editorial"
  );


function updateEditorial(progress) {

  editorials.forEach(
    (item, index) => {

      const start =
        0.15 +
        index * 0.16;


      const end =
        start + 0.13;


      let opacity = 0;


      if (
        progress >= start &&
        progress <= end
      ) {

        const local =
          (progress - start) /
          (end - start);


        opacity =
          Math.sin(
            local * Math.PI
          );

      }


      item.style.opacity =
        opacity;

    }
  );

}


// =========================================
// SCENE COLOR
// =========================================

const darkColor =
  new THREE.Color(
    0x10150F
  );

const midColor =
  new THREE.Color(
    0x303522
  );

const lightColor =
  new THREE.Color(
    0xD8D0BD
  );

function updateSceneColor(
  progress
) {

  let currentColor;


  if (progress < 0.55) {

    currentColor =
      darkColor.clone().lerp(
        midColor,
        progress / 0.55
      );

  } else {

    currentColor =
      midColor.clone().lerp(
        lightColor,
        (progress - 0.55) / 0.45
      );

  }


  scene.background =
    currentColor;

}


// =========================================
// CAMERA
// =========================================

function updateCamera(progress) {

  const cameraX =
    Math.sin(
      progress * Math.PI * 1.8
    ) * 0.65;


  const cameraY =
    Math.sin(
      progress * Math.PI * 2
    ) * 0.25;


  const cameraZ =
    8 -
    progress * 1.1;


  camera.position.x +=
    (
      cameraX -
      camera.position.x
    ) * 0.04;


  camera.position.y +=
    (
      cameraY -
      camera.position.y
    ) * 0.04;


  camera.position.z +=
    (
      cameraZ -
      camera.position.z
    ) * 0.04;


  camera.lookAt(
    0,
    0,
    0
  );

}


// =========================================
// GUIDE ANIMATION
// =========================================

function updateGuides(progress) {

  backGuide.rotation.y =
    progress * Math.PI * 1.4;


  frontGuide.rotation.y =
    -progress * Math.PI * 1.4;

}


// =========================================
// RESIZE
// =========================================

function resize() {

  camera.aspect =
    window.innerWidth /
    window.innerHeight;


  camera.updateProjectionMatrix();


  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );


  renderer.setPixelRatio(
    Math.min(
      window.devicePixelRatio,
      2
    )
  );

}


window.addEventListener(
  "resize",
  resize
);


// =========================================
// ANIMATION LOOP
// =========================================

function animate() {

  requestAnimationFrame(
    animate
  );


  // Smooth scrolling
  smoothScroll +=
    (
      targetScroll -
      smoothScroll
    ) * 0.075;


  // Cards
  cards.forEach(
    (card, index) => {

      updateCard(
        card,
        index,
        smoothScroll
      );

    }
  );


  // Editorial
  updateEditorial(
    smoothScroll
  );


  // Background
  updateSceneColor(
    smoothScroll
  );


  // Camera
  updateCamera(
    smoothScroll
  );


  // Guides
  updateGuides(
    smoothScroll
  );


  renderer.render(
    scene,
    camera
  );

}


animate();
/* =========================================
   PRODUCT DETAILS NAVIGATION
   Existing design/animation remains unchanged
========================================= */

const productCards =
  document.querySelectorAll(".product-card");

productCards.forEach((card) => {

  card.style.cursor = "pointer";

  card.addEventListener("click", () => {

    const titleElement =
      card.querySelector("h3");

    if (!titleElement) return;

    const productName =
      titleElement.textContent
        .trim()
        .toLowerCase();

    window.location.href =
      `product.html?id=${productName}`;

  });

});