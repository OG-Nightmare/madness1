import img1 from "./assets/pics/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg";
import img2 from "./assets/pics/henry-be-d8woejhlLlA-unsplash.jpg";
import img3 from "./assets/pics/pablo-merchan-montes-MXovqM130UI-unsplash.jpg";
import img4 from "./assets/pics/pexels-ella-olsson-572949-1640773.jpg";
import img5 from "./assets/pics/tangerine-newt-ogqaFRY7hAc-unsplash.jpg";
import img6 from "./assets/pics/pexels-aibek-skakov-418917601-29957494.jpg"
import img7 from "./assets/pics/pexels-alexandra-stroescu-1044324559-29021173.jpg"
import img8 from "./assets/pics/pexels-ali-dashti-506667798-17649371.jpg"
import img9 from "./assets/pics/pexels-dana-tentis-118658-691114.jpg"
import img10 from "./assets/pics/pexels-eat-kubba-15863701-11842142.jpg"
import img11 from "./assets/pics/pexels-fariphotography-905847.jpg"
import img12 from "./assets/pics/pexels-huzaifabukhari-16845335.jpg"
import img13 from "./assets/pics/pexels-lum3n-44775-1410235.jpg"
import img14 from "./assets/pics/pexels-olgalioncat-7245484.jpg"
import img15 from "./assets/pics/pexels-renestrgar-13814644.jpg"
import img16 from "./assets/pics/pexels-vince-2147491.jpg"


export const restos = [
  { img: img1, name: "911", cusine: "", price: "pizza "},
  { img: img2, name: "P1", cusine: "", price: "pasta " },
  { img: img3, name: "M2", cusine: "", price: "paneer" },
  // { img: img4, name: "M8", cusine: "", price: "" },
  // { img: img5, name: "Macan", cusine: "", price: "" },
  // { img: img6, name: "corvet", cusine: "", price: "" },
  // { img: img7, name: "Mustang", cusine: "", price: "" },
  // { img: img8, name: "Camaro", cusine: "", price: "" },
  // { img: img9, name: "Challenger", cusine: "", price: "" },
  // { img: img10, name: "Charger", cusine: "", price: "" },
  // { img: img11, name: "Civic", cusine: "", price: "" },
  // { img: img12, name: "Accord", cusine: "", price: "" },
  // { img: img13, name: "Pagani ", cusine: "", price: "" },
  // { img: img14, name: "Revolto", cusine: "", price: "" },
  // { img: img15, name: "Lexus LFA", cusine: "", price: "" },
  // { img: img16, name: "Panamara", cusine: "", price: "" }
];
export const Mdata = [
  { img: img1, name: "911",catogs:"Pizza, Beverages, Deserts", location:"New Delhi",contact: "9999242198" ,timings: "11:00 AM - 11:00 PM",}
]




export const Ndata = [
  {
    id: 1,
    img: img1,
    name: "Pizza",
    catogs: "Pizza, Beverages, Deserts",
    location: "New Delhi",
    contact: "9999242198",
    timings: "11:00 AM - 11:00 PM",
    variations: [
      { flavor: "Margherita", price: "$10" },
      { flavor: "Pepperoni", price: "$12" },
      { flavor: "BBQ Chicken", price: "$15" },
    ],
  },
  {
    id: 2,
    img: img2,
    name: "Burger",
    catogs: "Fast Food",
    location: "Mumbai",
    contact: "8888888888",
    timings: "10:00 AM - 10:00 PM",
    variations: [
      { flavor: "Cheese Burger", price: "$8" },
      { flavor: "Veggie Burger", price: "$7" },
      { flavor: "Chicken Burger", price: "$9" },
    ],
  },

  {
    id: 3,
    img: img3,
    name: "Pasta",
    catogs: "Italian, Fast Food",
    location: "Bangalore",
    contact: "7777777777",
    timings: "12:00 PM - 12:00 AM",
    variations: [
      { flavor: "Alfredo", price: "$11" },
      { flavor: "Carbonara", price: "$13" },
      { flavor: "Pesto", price: "$14" },
    ],
  },
  {
    id: 4,
    img: img4,
    name: "Paneer",
    catogs: "Indian, Vegetarian",
    location: "Chennai",
    contact: "6666666666",
    timings: "1:00 PM - 11:00 PM",
    variations: [
      { flavor: "Paneer Butter Masala", price: "$10" },
      { flavor: "Palak Paneer", price: "$12" },
      { flavor: "Paneer Tikka", price: "$15" },
    ],
  },
  {
    id: 5,
    img: img5,
    name: "Sushi",
    catogs: "Japanese, Seafood",
    location: "Kolkata",
    contact: "5555555555",
    timings: "11:00 AM - 10:00 PM",
    variations: [
      { flavor: "California Roll", price: "$18" },
      { flavor: "Spicy Tuna Roll", price: "$20" },
      { flavor: "Dragon Roll", price: "$22" },
    ],
  },
  {
    id: 6,
    img: img6,
    name: "Tacos",
    catogs: "Mexican, Fast Food",
    location: "Hyderabad",
    contact: "4444444444",
    timings: "10:00 AM - 9:00 PM",
    variations: [
      { flavor: "Chicken Tacos", price: "$9" },
      { flavor: "Beef Tacos", price: "$11" },
      { flavor: "Veggie Tacos", price: "$8" },
    ],
  },
  {
    id: 7,
    img: img7,
    name: "Salad",
    catogs: "Healthy, Vegetarian",
    location: "Pune",
    contact: "3333333333",
    timings: "9:00 AM - 8:00 PM",
    variations: [
      { flavor: "Caesar Salad", price: "$7" },
      { flavor: "Greek Salad", price: "$8" },
      { flavor: "Cobb Salad", price: "$9" },
    ],
  },
  {
    id: 8,
    img: img8,
    name: "Ice Cream",
    catogs: "Desserts, Beverages",
    location: "Ahmedabad",
    contact: "2222222222",
    timings: "10:00 AM - 10:00 PM",
    variations: [
      { flavor: "Vanilla", price: "$5" },
      { flavor: "Chocolate", price: "$6" },
      { flavor: "Strawberry", price: "$5" },
    ],
  },
  ,
  {
    id: 10,
    img: img10,
    name: "Soup",
    catogs: "Healthy, Vegetarian",
    location: "Lucknow",
    contact: "0000000000",
    timings: "11:00 AM - 9:00 PM",
    variations: [
      { flavor: "Tomato Soup", price: "$5" },
      { flavor: "Minestrone", price: "$6" },
      { flavor: "Chicken Noodle", price: "$7" },
    ],
  },
];







