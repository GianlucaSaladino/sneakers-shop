import jordan1Black from "../img/sneakers/Jordan1Black.jpg";
import jordan1Blue from "../img/sneakers/Jordan1Blue.webp";
import jordan1Red from "../img/sneakers/Jordan1Red.jpg";
import jordan1LowWhite from "../img/sneakers/Jordan1LowWhite.webp";
import jordan1LowPink from "../img/sneakers/Jordan1LowPink.jpg";
import converseHighBlack from "../img/sneakers/ConverseHighBlack.jfif";
import converseHighWhite from "../img/sneakers/ConverseHighWhite.jfif";

export const products = [
  {
    id: 1,
    img: [jordan1Black],
    name: "Nike Jordan 1 Black",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    brand: "jordan",
  },
  {
    id: 2,
    img: [jordan1Blue],
    name: "Nike Jordan 1 Blue",
    price: 110,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    brand: "jordan",
  },
  {
    id: 3,
    img: [jordan1Red],
    name: "Nike Jordan 1 Red",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    brand: "jordan",
  },
  {
    id: 4,
    img: [jordan1Black],
    name: "Nike Jordan 1 Black",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    brand: "jordan",
  },
  {
    id: 5,
    img: [jordan1Red],
    name: "Nike Jordan 1 Red",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    brand: "jordan",
  },
  {
    id: 6,
    img: [jordan1LowWhite],
    name: "Nike Jordan 1 Low White",
    price: 99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "low",
    brand: "jordan",
  },
  {
    id: 7,
    img: [jordan1LowPink],
    name: "Nike Jordan 1 Low Pink",
    price: 95,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "low",
    brand: "jordan",
  },
  {
    id: 8,
    img: [converseHighBlack],
    name: "Converse High Black",
    price: 80,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    brand: "converse",
  },
  {
    id: 9,
    img: [converseHighWhite],
    name: "Converse High White",
    price: 85,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    brand: "converse",
  },
];


const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
    reject((err) => console.log(err));
  }, 3000);
});

export default getFetch;
