const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 13995,
    colors: [
      {
        code: "blue",
        img: "pics/nike 2.png",
      },
      {
        code: "aqua",
        img: "pics/nike 1.png",
      },
    ],
  },
  {
    id: 2,
    title: "ADIDAS Response",
    price: 3595,
    colors: [
      {
        code: "black",
        img: "pics/adidas.png",
      },
      {
        code: "white",
        img: "pics/adidas 2.png",
      },
    ],
  },
  {
    id: 3,
    title: "GUCCI Re-Web Sneaker",
    price: 95899,
    colors: [
      {
        code: "black",
        img: "pics/gucci.png",
      },
      {
        code: "white",
        img: "pics/gucci 2.png",
      },
    ],
  },
  {
    id: 4,
    title: "PUMA One 8 V2",
    price: 4299,
    colors: [
      {
        code: "white",
        img: "pics/puma 1.png",
      },
      {
        code: "black",
        img: "pics/puma 2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 8259,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

let popup=document.getElementById("popup");

function openpopup(){
  popup.classList.add("open-popup")
}
function closepopup(){
  popup.classList.remove("open-popup")
}

