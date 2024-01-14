const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyFlag = document.querySelector(".currency-flag")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Valor em "REAL"
    const currencyValueConverted = document.querySelector(".currency-value")//Valor de "OUTRA MOEDA"

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const eurotoday = 6.2
    const libratoday = 6.19
    const bitcoinToday = 209.008
    const realToday = 9.0 


    if (currencySelect.value == "dolar") {// Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") {// Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / eurotoday)

    }
    if (currencySelect.value == "libra") {// Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",
            {
                style: "currency",
                currency: "GBR"
            }).format(inputCurrencyValue / libratoday)
    }
    if (currencySelect.value == "bitcoin") {// Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / bitcoinToday)
    }
    if (currencySelect.value == "real") {// Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)


}


function ChangeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-dolar")
    

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/Dolar.png"
        

    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
       
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/Libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
       
    }

    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/Real.png"
        
    }

    }
    function FlagChange(){
        const currencyImg = document.querySelector(".bandeira")
    
        if(currencyFlag.value == "dolar"){
            currencyImg.src ="./assets/Dolar.png"
        }

        if(currencyFlag.value == "libra"){
            currencyImg.src ="./assets/Libra.png"
        }
        
        if(currencyFlag.value == "biticoin"){
            currencyImg.src ="./assets/Bitcoin.png"
        }

        if(currencyFlag.value == "euro"){
            currencyImg.src ="./assets/Euro.png"
        }
   
     convertValues()
    
}
currencyFlag.addEventListener("change", FlagChange)
currencySelect.addEventListener("change", ChangeCurrency)
convertButton.addEventListener("click", convertValues)
