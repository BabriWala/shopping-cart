const phoneIncrease = document.getElementsByClassName('btnPlus')[0];
const coverIncrease = document.getElementsByClassName('btnPlus')[1];

const phoneQty = document.getElementsByTagName('input')[0];
const coverQty = document.getElementsByTagName('input')[1];

const phoneDecrease = document.getElementsByClassName('btnMinus')[0];
const coverDecrease = document.getElementsByClassName('btnMinus')[1];

const phonePrice = document.getElementsByClassName('phonePrice')[0];
const coverPrice = document.getElementsByClassName('coverPrice')[0];

const phoneRemove = document.getElementsByClassName('remove-item')[0]; 
const coverRemove = document.getElementsByClassName('remove-item')[1]; 

const subTotal = document.getElementsByClassName('subTotal')[0];
const tax = document.getElementsByClassName('tax')[0];
const total = document.getElementsByClassName('total')[0];


phoneIncrease.addEventListener('click', () =>{
    const phoneQtyValue = parseFloat(phoneQty.value);
    // console.log(phoneQtyValue);
    phoneQty.value = phoneQtyValue + 1;
    const newPhoneQtyValue = parseFloat(phoneQty.value);
    const phonePriceValue = parseFloat(phonePrice.innerText);
    // console.log(phonePriceValue);
    phonePrice.innerText = newPhoneQtyValue * 1219;
    const newPhonePriceValue = parseFloat(phonePrice.innerText);
    const currentCoverPrice = parseFloat(coverPrice.innerText);
    // console.log(newPhonePriceValue + currentCoverPrice);
    subTotal.innerText = newPhonePriceValue + currentCoverPrice;
})

phoneDecrease.addEventListener('click', () =>{
    const phoneQtyValue = parseFloat(phoneQty.value);
    console.log(phoneQtyValue);
    if(phoneQtyValue > 1){
        phoneQty.value = phoneQtyValue - 1;
    }
    const newPhoneQtyValue = parseFloat(phoneQty.value);
    const phonePriceValue = parseFloat(phonePrice.innerText);
    // console.log(phonePriceValue);
    phonePrice.innerText = newPhoneQtyValue * 1219;
    const newPhonePriceValue = parseFloat(phonePrice.innerText);
    const currentCoverPrice = parseFloat(coverPrice.innerText);
    // console.log(newPhonePriceValue + currentCoverPrice);
    subTotal.innerText = newPhonePriceValue + currentCoverPrice;
})


coverIncrease.addEventListener('click', () =>{
    const coverQtyValue = parseFloat(coverQty.value);
    // console.log(coverQtyValue);
    coverQty.value = coverQtyValue + 1;
    const newCoverQtyValue = parseFloat(coverQty.value);
    const coverPriceValue = parseFloat(coverPrice.innerText);
    // console.log(coverPriceValue);
    coverPrice.innerText = newCoverQtyValue * 59;
    const newCoverPriceValue = parseFloat(coverPrice.innerText);
    const currentPhonePrice = parseFloat(phonePrice.innerText);
    // console.log(newCoverPriceValue + currentCoverPrice);
    subTotal.innerText = newCoverPriceValue + currentPhonePrice;
})

coverDecrease.addEventListener('click', () =>{
    const coverQtyValue = parseFloat(coverQty.value);
    // console.log(coverQtyValue);
    if(coverQtyValue > 1){
        coverQty.value = coverQtyValue - 1;
    }
    const newCoverQtyValue = parseFloat(coverQty.value);
    const coverPriceValue = parseFloat(coverPrice.innerText);
    // console.log(coverPriceValue);
    coverPrice.innerText = newCoverQtyValue * 59;
    const newCoverPriceValue = parseFloat(coverPrice.innerText);
    const currentPhonePrice = parseFloat(phonePrice.innerText);
    // console.log(newCoverPriceValue + currentCoverPrice);
    subTotal.innerText = newCoverPriceValue + currentPhonePrice;
})

phoneRemove.addEventListener('click', () => {
    document.getElementsByClassName('cart-item')[0].style.display = 'none';
})

coverRemove.addEventListener('click', () => {
    document.getElementsByClassName('cart-item')[1].style.display = 'none';
    // console.log("Ok");
})