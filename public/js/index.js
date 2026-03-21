
let taxSwitch = document.getElementById("switchCheckDefault");

taxSwitch.addEventListener("click", () => {

    let taxInfo = document.getElementsByClassName("tax-info");
    let prices = document.getElementsByClassName("price");

    for (let i = 0; i < prices.length; i++) {
        let basePrice = parseFloat(prices[i].dataset.price);

        if (taxSwitch.checked) {
            let total = basePrice + (basePrice * 0.18);
            prices[i].innerText = total.toLocaleString("en-IN");
            taxInfo[i].style.display = "inline";
        } else {
            prices[i].innerText = basePrice.toLocaleString("en-IN");
            taxInfo[i].style.display = "none";
        }
    }
});