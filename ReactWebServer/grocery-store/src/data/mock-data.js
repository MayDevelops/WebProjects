import {
    Avocado_Oil,
    Baguette,
    Bananas,
    Canteloupe,
    Capers,
    Cheddar_Cheese,
    Coconut,
    Crackers,
    Cranberries,
    Cucumber,
    Curry_Paste,
    Dried_Apricots, Egg_Salad,
    Fava_Beans,
    Feta_Cheese,
    Focaccia,
    Granny_Smith,
    Grapefruit_Juice, Heavy_Cream,
    Jerusalem_Artichoke,
    Key_Lime_Pie,
    Lasagna_Pasta,
    Leather_Leaf,
    Lemon,
    Lotus_Rootlets,
    Mango_Nectar,
    Muffin_Mix,
    Mushrooms,
    Navel_Orange, Olive_Oil, Perrier,
    Pesto,
    Pied_De_Vents,
    Potato_Chips,
    Proscuitto,
    Queso_Fresco, Red_Bell_Pepper,
    Rye_Flour,
    Sage_Rubbed,
    Salami, Salmon_Fillet, Smoked_Paprika,
    Sunflower_Oil,
    Sweet_Potato, Tilapia, Tomato_Pesto,
    Toothpicks,
    Turtle_Beans, Yellow_Tomatoes, Yukon_Potatoes
} from '../images/products/'

let mock = [{
    id: 1,
    name: "Egg Salad",
    price: "$5.62",
    country: "United States",
    image: Egg_Salad
},
    {
        id: 2,
        name: "Sweet Potato",
        price: "$2.41",
        country: "Brazil",
        image: Sweet_Potato
    },
    {
        id: 3,
        name: "Foccacia Bread",
        price: "$5.92",
        country: "United States",
        image: Focaccia
    },
    {
        id: 4,
        name: "Canned Lotus Rootlets",
        price: "$3.58",
        country: "United States",
        image: Lotus_Rootlets
    },
    {
        id: 5,
        name: "Frilled Toothpicks",
        price: "$2.47",
        country: "Canada",
        image: Toothpicks

    },
    {
        id: 6,
        name: "Rubbed Sage",
        price: "$8.77",
        country: "Brazil",
        image: Sage_Rubbed
    },
    {
        id: 7,
        name: "Langers Mango Nectar",
        price: "$9.24",
        country: "Brazil",
        image: Mango_Nectar
    },
    {
        id: 8,
        name: "Cucumber",
        price: "$3.02",
        country: "Canada",
        image: Cucumber
    },
    {
        id: 9,
        name: "Fava Beans",
        price: "$4.76",
        country: "Brazil",
        image: Fava_Beans

    },
    {
        id: 10,
        name: "Coconut",
        price: "$2.50",
        country: "Brazil",
        image: Coconut
    },
    {
        id: 11,
        name: "Kettle Potato Chips",
        price: "$6.70",
        country: "United States",
        image: Potato_Chips
    },
    {
        id: 12,
        name: "Flour - Rye",
        price: "$1.14",
        country: "Canada",
        image: Rye_Flour
    },
    {
        id: 13,
        name: "Feta Chees",
        price: "$6.92",
        country: "Brazil",
        image: Feta_Cheese
    },
    {
        id: 14,
        name: "Cheddar Cheese",
        price: "$5.36",
        country: "Mexico",
        image: Cheddar_Cheese
    },
    {
        id: 15,
        name: "Capers",
        price: "$4.18",
        country: "United States",
        image: Capers
    },
    {
        id: 16,
        name: "Baguette",
        price: "$9.18",
        country: "Mexico",
        image: Baguette
    },
    {
        id: 17,
        name: "Lasagna Noodles",
        price: "$4.73",
        country: "Brazil",
        image: Lasagna_Pasta
    },
    {
        id: 18,
        name: "Pied De Vents Cheese",
        price: "$5.16",
        country: "Canada",
        image: Pied_De_Vents
    },
    {
        id: 19,
        name: "Sweet Potato Crackers",
        price: "$6.81",
        country: "United States",
        image: Crackers
    },
    {
        id: 20,
        name: "Mushrooms",
        price: "$8.62",
        country: "United States",
        image: Mushrooms
    },
    {
        id: 21,
        name: "Jerusalem Artichoke",
        price: "$3.16",
        country: "United States",
        image: Jerusalem_Artichoke
    },
    {
        id: 22,
        name: "Leather Leaf Fern",
        price: "$9.41",
        country: "Brazil",
        image: Leather_Leaf
    },
    {
        id: 23,
        name: "Dried Apricots",
        price: "$7.42",
        country: "Brazil",
        image: Dried_Apricots
    },
    {
        id: 24,
        name: "Navel Orange",
        price: "$3.53",
        country: "Brazil",
        image: Navel_Orange
    },
    {
        id: 25,
        name: "Sunflower Oil",
        price: "$1.90",
        country: "Mexico",
        image: Sunflower_Oil
    },
    {
        id: 26,
        name: "Black Turtle Beans",
        price: "$4.67",
        country: "Canada",
        image: Turtle_Beans
    },
    {
        id: 27,
        name: "Bananas",
        price: "$2.64",
        country: "Canada",
        image: Bananas

    },
    {
        id: 28,
        name: "Salami",
        price: "$8.72",
        country: "Brazil",
        image: Salami
    },
    {
        id: 29,
        name: "Proscuitto",
        price: "$9.86",
        country: "Brazil",
        image: Proscuitto
    },
    {
        id: 30,
        name: "Cranberries",
        price: "$5.85",
        country: "United States",
        image: Cranberries

    },
    {
        id: 31,
        name: "Canteloupe",
        price: "$4.49",
        country: "United States",
        image: Canteloupe
    },
    {
        id: 32,
        name: "Lemon",
        price: "$2.8Lemon5",
        country: "United States",
        image: Lemon
    },
    {
        id: 33,
        name: "Pesto",
        price: "$2.67",
        country: "Brazil",
        image: Pesto
    },
    {
        id: 34,
        name: "Grapefruit Juice",
        price: "$4.88",
        country: "Brazil",
        image: Grapefruit_Juice

    },
    {
        id: 35,
        name: "Curry Paste",
        price: "$2.02",
        country: "Brazil",
        image: Curry_Paste
    },
    {
        id: 36,
        name: "Avocado Oil",
        price: "$4.45",
        country: "Canada",
        image: Avocado_Oil
    },
    {
        id: 37,
        name: "Queso Fresco",
        price: "$9.24",
        country: "Canada",
        image: Queso_Fresco
    },
    {
        id: 38,
        name: "Key Lime Pie",
        price: "$5.32",
        country: "Mexico",
        image: Key_Lime_Pie
    },
    {
        id: 39,
        name: "Granny Smith Apple",
        price: "$2.12",
        country: "United States",
        image: Granny_Smith
    },
    {
        id: 40,
        name: "Morning Glory Muffin Mix",
        price: "$9.22",
        country: "Brazil",
        image: Muffin_Mix
    },
    {
        id: 41,
        name: "Heavy Whipping Cream",
        price: "$8.78",
        country: "Brazil",
        image: Heavy_Cream
    },
    {
        id: 42,
        name: "Red Bell Pepper",
        price: "$9.03",
        country: "Brazil",
        image: Red_Bell_Pepper
    },
    {
        id: 43,
        name: "Perrier",
        price: "$9.36",
        country: "United States",
        image: Perrier
    },
    {
        id: 44,
        name: "Yukon Gold Potatoes",
        price: "$8.76",
        country: "Mexico",
        image: Yukon_Potatoes
    },
    {
        id: 45,
        name: "Salmon Fillets",
        price: "$6.21",
        country: "United States",
        image: Salmon_Fillet
    },
    {
        id: 46,
        name: "Tilapia Fillets",
        price: "$4.37",
        country: "Mexico",
        image: Tilapia
    },
    {
        id: 47,
        name: "Tomato Pesto",
        price: "$9.70",
        country: "Brazil",
        image: Tomato_Pesto
    },
    {
        id: 48,
        name: "Oil - Olive Bertolli",
        price: "$8.92",
        country: "Brazil",
        image: Olive_Oil
    },
    {
        id: 49,
        name: "Tear Drop Yellow Tomatoes",
        price: "$3.32",
        country: "Mexico",
        image: Yellow_Tomatoes
    },
    {
        id: 50,
        name: "Smoked Paprika",
        price: "$8.31",
        country: "Brazil",
        image: Smoked_Paprika
    }
]

export default mock;
