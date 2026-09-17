// my javascript

var products = [
    { name: "Signature Sourdough", category: "bread", price: "$6.00 - $8.00" },
    { name: "Whole Wheat Loaf", category: "bread", price: "$5.50 - $7.00" },
    { name: "Rustic Baguette", category: "bread", price: "$3.50 - $4.50" },
    { name: "Butter Croissants", category: "pastry", price: "$3.50 - $4.50" },
    { name: "Chocolate Danish", category: "pastry", price: "$4.00 - $5.00" },
    { name: "Cinnamon Buns", category: "pastry", price: "$4.00 - $4.50" },
    { name: "Small Celebration Cake", category: "cake", price: "$25.00 - $35.00" },
    { name: "Large Celebration Cake", category: "cake", price: "$45.00 - $60.00" },
    { name: "Seasonal Fruit Tart", category: "cake", price: "$20.00 - $30.00" }
];

function showProducts(category) {
    var list = document.getElementById("product-list");
    list.innerHTML = "";

    for (var i = 0; i < products.length; i++) {
        if (category == "all" || products[i].category == category) {
            var li = document.createElement("li");
            li.textContent = products[i].name + " - " + products[i].price;
            list.appendChild(li);
        }
    }
}

function onFilterChange() {
    var select = document.getElementById("category-filter");
    localStorage.setItem("myCategory", select.value);
    showProducts(select.value);
}

function checkForm(event) {
    var name = document.getElementById("full-name").value;
    var email = document.getElementById("user-email").value;
    var errorMsg = document.getElementById("error-message");

    // 空白チェック（.trim()なしで === "" のみ判定）
    if (name == "") {
        event.preventDefault();
        errorMsg.textContent = "Please enter your name.";
        return;
    }

    // メールチェック（@が含まれるかだけ判定）
    if (!email.includes("@")) {
        event.preventDefault();
        errorMsg.textContent = "Please enter your email.";
        return;
    }

    // 完了はalertのみ
    alert("Thank you!");
}

window.onload = function() {
    var select = document.getElementById("category-filter");
    if (select) {
        var saved = localStorage.getItem("myCategory");
        if (saved) {
            select.value = saved;
            showProducts(saved);
        } else {
            showProducts("all");
        }
        select.onchange = onFilterChange;
    }

    var form = document.querySelector("form");
    if (form) {
        form.onsubmit = checkForm;
    }
};
