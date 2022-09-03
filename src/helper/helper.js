import jordan1Black from "../img/sneakers/Jordan1Black.jpg";
import jordan1Blue from "../img/sneakers/Jordan1Blue.webp";
import jordan1Red from "../img/sneakers/Jordan1Red.jpg";

const products = [
  {
    id: 1,
    img: [jordan1Black],
    name: "Nike Jordan 1 Black",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    category: "jordan",
  },
  {
    id: 2,
    img: [jordan1Blue],
    name: "Nike Jordan 1 Blue",
    price: 110,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    category: "jordan",
  },
  {
    id: 3,
    img: [jordan1Red],
    name: "Nike Jordan 1 Red",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    category: "jordan",
  },
  {
    id: 4,
    img: [jordan1Black],
    name: "Nike Jordan 1 Black",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    category: "jordan",
  },
  {
    id: 5,
    img: [jordan1Red],
    name: "Nike Jordan 1 Red",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    category: "jordan",
  },
  {
    id: 6,
    img: [jordan1Red],
    name: "Nike Jordan 1 Red",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
    type: "high",
    category: "jordan",
  }
];

const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
    reject((err) => console.log(err));
  }, 3000);
});

export default getFetch;
