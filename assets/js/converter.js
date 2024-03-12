export function setupCurrencyDropdown() {
    const currencyLists = document.querySelectorAll(".currency-list");
    const selectedCurrencies = document.querySelectorAll(".selected");

    if (currencyLists.length > 0 && selectedCurrencies.length > 0) {
        currencyLists.forEach((currencyList, index) => {
            currencyList.addEventListener("click", function(event) {
                if (event.target.tagName === "LI") {
                    selectedCurrencies[index].innerHTML = event.target.innerHTML;
                }
            });
        });
    } else {
        console.error("Elementos não encontrados.");
    }

    const invertButton = document.querySelector(".middle");
    invertButton.addEventListener("click", function() {
        const selectedCurrencies = document.querySelectorAll(".selected");
        if (selectedCurrencies.length === 2) {
            const firstCurrency = selectedCurrencies[0].innerHTML;
            const secondCurrency = selectedCurrencies[1].innerHTML;
            selectedCurrencies[0].innerHTML = secondCurrency;
            selectedCurrencies[1].innerHTML = firstCurrency;
        } else {
            console.error("Você precisa selecionar exatamente duas moedas.");
        }
    });
}


