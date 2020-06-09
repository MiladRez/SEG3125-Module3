
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";

    // Hide Home Page contents
    welcomePage = document.getElementsByClassName("welcomePage");
    for(i = 0; i < welcomePage.length; i++) {
        welcomePage[i].style.display = "none";
    }

    closeNav();
}

// NEW NAVIGATION
// It is adapted from https://www.w3schools.com/howto/howto_js_sidenav.asp

// Set the width of the side navigation to 250px
function openNav() {
    document.getElementById("menuSideNav").style.width = "250px";
}
  
// Set the width of the side navigation to 0
function closeNav() {
    document.getElementById("menuSideNav").style.width = "0";
}

// function below for accordion was adapted from https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkboxes

function populateListProductChoices() {

    var restrictions = "";

    if (document.getElementById("Vegetarian").checked) {
        restrictions += "Veg";
        if (document.getElementById("GlutenFree").checked) {
            restrictions += "-GlutenFree";
            if (document.getElementById("Organic").checked) {
                restrictions += "-Org";
            }
        } else if(document.getElementById("Organic").checked) {
            restrictions += "-Org";
        }
    } else if (document.getElementById("GlutenFree").checked) {
        restrictions += "GlutenFree";
        if (document.getElementById("Organic").checked) {
            restrictions += "-Org";
        }
    } else if (document.getElementById("Organic"). checked) {
        restrictions += "Organic";
    } else {
        restrictions += "None";
    }

    // obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, restrictions);

    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>

    for (i = 0; i < optionArray.length; i++) {

        var productName = optionArray[i].name + ": $" + optionArray[i].price;

        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;

        // create a label for the checkbox, and also add in HTML DOM
        var label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName));

        var img = document.createElement("img");
        img.alt = optionArray[i].name;
        img.width = 300;
        img.height = 200;
        img.src = optionArray[i].img;

        var category = document.getElementById(optionArray[i].category);
        category.appendChild(img);
        category.appendChild(checkbox);
        category.appendChild(label);
        category.appendChild(document.createElement("br"));
        category.appendChild(document.createElement("br"));
    }
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

    var ele = document.getElementsByName("product");
    var chosenProducts = [];

    var c = document.getElementById('displayCart');
    c.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    para.innerHTML = "You selected : ";
    para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    // add paragraph and total price
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));

}