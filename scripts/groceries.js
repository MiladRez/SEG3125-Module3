
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
        name: "broccoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99,
        category: "vegetables",
        img: "https://www.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_294838064-min-696x520.jpg"
    },
    {
        name: "milk",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 2.35,
        category: "dairyProducts",
        img: "https://www.washingtonpost.com/resizer/DR2OXrvWdVNWUh70e_m-bmPhYDA=/arc-anglerfish-washpost-prod-washpost/public/OAEOY5GKSII6LJ5SLIXYESYCZE.jpg"
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 10.00,
        category: "meats",
        img: "https://www.easyhomemadesushi.com/wp-content/uploads/2019/03/raw-salmon.jpg"
    },
    {
        name: "oil",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 5.99,
        category: "cookingProducts",
        img: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2014/06/CookingOil.jpg"
    },
    {
        name: "chicken broth",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        price: 3.99,
        category: "cookingProducts",
        img: "https://thecozyapron.com/wp-content/uploads/2018/02/chicken-broth_thecozyapron_1.jpg"
    },
    {
        name: "banana",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99,
        category: "fruits",
        img: "https://thumbs-prod.si-cdn.com/GQWa1qJUrzp6l27gnhxhwMAtkpI=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg"
    },
    {
        name: "chicken thigh",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 11.99,
        category: "meats",
        img: "https://www.spendwithpennies.com/wp-content/uploads/2019/02/Baked-Chicken-Thighs-SpendWithPennies-25.jpg"
    },
    {
        name: "apple",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 5.99,
        category: "fruits",
        img: "https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg"
    },
    {
        name: "cream cheese",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 3.99,
        category: "dairyProducts",
        img: "https://www.servedfromscratch.com/wp-content/uploads/2014/11/cream-cheese-500x375.jpg"
    },
    {
        name: "tomato",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 2.99,
        category: "vegetables",
        img: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38="
    }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
    let product_names = [];

    // This sort function was inspired from https://stackoverflow.com/questions/2466356/sorting-objects-by-property-values 
    prods.sort(function(a, b) {
        return a.price - b.price;
    });

    for (let i = 0; i < prods.length; i += 1) {

        if ((restriction == "Veg") && (prods[i].vegetarian == true)) {
            product_names.push(prods[i]);
        }
        else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
            product_names.push(prods[i]);
        }
        else if ((restriction == "Organic") && (prods[i].organic == true)) {
            product_names.push(prods[i]);
        }
        else if ((restriction == "Veg-Org") && ((prods[i].vegetarian == true) && (prods[i].organic == true))) {
            product_names.push(prods[i]);
        }
        else if ((restriction == "GlutenFree-Org") && ((prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names.push(prods[i]);
        }
        else if ((restriction == "Veg-GlutenFree") && ((prods[i].glutenFree == true) && (prods[i].vegetarian == true))) {
            product_names.push(prods[i]);
        }
        else if ((restriction == "Veg-GlutenFree-Org") && ((prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names.push(prods[i]);
        }
        else if (restriction == "None") {
            product_names.push(prods[i]);
        }
    }
    return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        var prod_name_price = products[i].name + ": $" + products[i].price;
        if (chosenProducts.indexOf(prod_name_price) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}