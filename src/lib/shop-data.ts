import catProduce from "@/assets/cat-produce.jpg";
import catFruits from "@/assets/cat-fruits.jpg";
import catVeg from "@/assets/cat-veg.jpg";
import catDairy from "@/assets/cat-dairy.jpg";
import catBakery from "@/assets/cat-bakery.jpg";
import catDrinks from "@/assets/cat-drinks.jpg";
import catPantry from "@/assets/cat-pantry.jpg";
import catHome from "@/assets/cat-home.jpg";
import pTomato from "@/assets/p-tomato.jpg";
import pHerbs from "@/assets/p-herbs.jpg";
import pMilk from "@/assets/p-milk.jpg";
import pBread from "@/assets/p-bread.jpg";
import pBerries from "@/assets/p-berries.jpg";
import pOil from "@/assets/p-oil.jpg";

export const BRAND = "SAHL";

export const FREE_DELIVERY_THRESHOLD = 300;
export const DELIVERY_FEE = 25;

export type Product = {
  id: string;
  name: string;
  unit: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: "tomato", name: "Vine Tomatoes", unit: "1 kg", price: 42, image: pTomato },
  { id: "herbs", name: "Mint & Parsley", unit: "2 bunches", price: 18, image: pHerbs },
  { id: "milk", name: "Fresh Whole Milk", unit: "1 L bottle", price: 65, image: pMilk },
  { id: "bread", name: "Country Sourdough", unit: "600 g", price: 55, image: pBread },
  { id: "berries", name: "Strawberries", unit: "500 g", price: 78, image: pBerries },
  { id: "oil", name: "Extra Virgin Olive Oil", unit: "500 ml", price: 210, image: pOil },
];

export const categories = [
  { name: "Fresh Produce", line: "Picked for today.", image: catProduce, span: "wide" },
  { name: "Fruits", line: "Ripe, never rushed.", image: catFruits, span: "tall" },
  { name: "Vegetables", line: "Straight from the crate.", image: catVeg, span: "tall" },
  { name: "Dairy & Eggs", line: "Cold, clean, honest.", image: catDairy, span: "wide" },
  { name: "Bakery", line: "Baked this morning.", image: catBakery, span: "tall" },
  { name: "Drinks", line: "Something cold.", image: catDrinks, span: "tall" },
  { name: "Pantry", line: "The quiet essentials.", image: catPantry, span: "tall" },
  { name: "Home Essentials", line: "For the everyday.", image: catHome, span: "tall" },
] as const;

export type Basket = {
  id: string;
  label: string;
  note: string;
  items: { name: string; unit: string; price: number }[];
};

export const baskets: Basket[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    note: "Slow mornings, properly stocked.",
    items: [
      { name: "Farm Eggs", unit: "10 pcs", price: 92 },
      { name: "Fresh Whole Milk", unit: "1 L", price: 65 },
      { name: "White Cheese", unit: "400 g", price: 88 },
      { name: "Baladi Bread", unit: "6 pcs", price: 20 },
      { name: "Orange Juice", unit: "1 L", price: 48 },
      { name: "Honey", unit: "350 g", price: 130 },
    ],
  },
  {
    id: "family-dinner",
    label: "Family Dinner",
    note: "One table, everyone fed.",
    items: [
      { name: "Vine Tomatoes", unit: "1 kg", price: 42 },
      { name: "Potatoes", unit: "2 kg", price: 54 },
      { name: "Whole Chicken", unit: "1.4 kg", price: 195 },
      { name: "Egyptian Rice", unit: "1 kg", price: 46 },
      { name: "Onions", unit: "1 kg", price: 28 },
      { name: "Salad Greens", unit: "400 g", price: 32 },
      { name: "Mango Juice", unit: "1 L", price: 45 },
    ],
  },
  {
    id: "healthy-week",
    label: "Healthy Week",
    note: "Seven days, sorted.",
    items: [
      { name: "Baby Spinach", unit: "300 g", price: 36 },
      { name: "Avocado", unit: "3 pcs", price: 96 },
      { name: "Greek Yoghurt", unit: "900 g", price: 110 },
      { name: "Chicken Breast", unit: "1 kg", price: 220 },
      { name: "Brown Rice", unit: "1 kg", price: 58 },
      { name: "Mixed Berries", unit: "500 g", price: 78 },
    ],
  },
  {
    id: "movie-night",
    label: "Movie Night",
    note: "Lights down, snacks up.",
    items: [
      { name: "Popcorn Kernels", unit: "500 g", price: 40 },
      { name: "Dark Chocolate", unit: "100 g", price: 62 },
      { name: "Salted Cashews", unit: "250 g", price: 145 },
      { name: "Sparkling Lemonade", unit: "4 x 330 ml", price: 72 },
      { name: "Ice Cream", unit: "1 L", price: 120 },
    ],
  },
  {
    id: "weekend",
    label: "Weekend Essentials",
    note: "The full reset.",
    items: [
      { name: "Country Sourdough", unit: "600 g", price: 55 },
      { name: "Extra Virgin Olive Oil", unit: "500 ml", price: 210 },
      { name: "Vine Tomatoes", unit: "1 kg", price: 42 },
      { name: "Feta & Olives", unit: "400 g", price: 96 },
      { name: "Fresh Coffee Beans", unit: "250 g", price: 165 },
      { name: "Cleaning Essentials", unit: "bundle", price: 130 },
    ],
  },
];

export const testimonials = [
  {
    quote: "Finally, grocery shopping that actually feels effortless.",
    name: "Nour Hassan",
    place: "Badr City",
  },
  {
    quote: "The produce arrives cooler and fresher than anything I pick myself.",
    name: "Kareem Adel",
    place: "Badr City, District 3",
  },
  {
    quote: "I order on the way home from work and it's at the door before I am.",
    name: "Salma Fouad",
    place: "El Shorouk",
  },
  {
    quote: "It's the only app my mother lets me order the vegetables from.",
    name: "Youssef Tarek",
    place: "Badr City",
  },
];

export const egp = (value: number) => `${value.toLocaleString("en-EG")} EGP`;
