function moneyAmount(money){
      
      const moneyInput =document.getElementById(money+'-input');
      const moneyInputText =moneyInput.value
      
       return moneyInputText;

      console.log(moneyInputText)
      
}
function reset (money){
      const moneyInput =document.getElementById(money+'-input');
      moneyInput.value=0;
}
function resetAmount(){
      reset('income')
      reset('food')
      reset('rent')
      reset('cloth')
}

// Add event handler at calculate button
document.getElementById("calculate-btn").addEventListener('click',function(){
      // income input
      const income =moneyAmount('income');
      const incomeP=parseFloat(income)
      console.log(incomeP)
        //  food input  
   const foodExpence = moneyAmount('food')
   const foodExpenceP=parseFloat(foodExpence)
// rent input
const rentExpence = moneyAmount('rent')
const rentExpenceP=parseFloat(rentExpence);
// cloth input
const clothExpence = moneyAmount('cloth')
const clothExpenceP=parseFloat(clothExpence)
if(isNaN(foodExpence)|| isNaN(income)|| isNaN(rentExpence)|| isNaN(clothExpence) || income<0 || foodExpence<0 || rentExpence<0 ||clothExpence<0){
      document.getElementById('massage-string').style.display='block';
      resetAmount();
      document.getElementById('total-expences').innerText=0;
      document.getElementById('balance').innerText=0;  
}
else{
// total expences calculate
document.getElementById('massage-string').style.display='none';
const totalExpence =document.getElementById('total-expences');
const totalExpenceAmount =foodExpenceP+rentExpenceP+clothExpenceP;
totalExpence.innerText=totalExpenceAmount;
console.log(totalExpenceAmount)
//  get balance 
const balance = document.getElementById('balance');
// balance calculation

const balanceTotal = incomeP-totalExpenceAmount;

console.log(balanceTotal)
if (balanceTotal<0){
      const massageRight = document.getElementById('massage-right');
      massageRight.style.display='block';
      resetAmount()
      totalExpence.innerText=0;
      balance.innerText=0
      }
      else{
            const massageRight = document.getElementById('massage-right');
      massageRight.style.display='none';
      balance.innerText=balanceTotal;
      }

}



})
// add event handler on save button
document.getElementById('save-btn').addEventListener('click',function(){
      // get income 
      const income =moneyAmount('income'); 
      // get persentage value
    const persentageInput= document.getElementById('persentage-input');
    const persentageText = persentageInput.value;
    const persentage= parseFloat(persentageText);
//    get saving amount
 const saveAmount= document.getElementById('save-amount');
 let totalSaveAmount=persentage/100*income;
 saveAmount.innerText=totalSaveAmount;
//  get balance
const balance = document.getElementById('balance');
  const balanceTotal2=parseFloat( balance.innerText);
  if(totalSaveAmount>balanceTotal2){
  const massageSmaller = document.getElementById('massage-smaller');
  massageSmaller.style.display='block';
  

  saveAmount.innerText=0;
  document.getElementById('remaining-balance').innerText=0;
  }
  else{
      const massageSmaller = document.getElementById('massage-smaller');
      massageSmaller.style.display='none';
      saveAmount.innerText=totalSaveAmount;
      console.log(saveAmount.innerText)
// console.log(totalSaveAmount);
     const remainingBalance = document.getElementById('remaining-balance');
     const remaining= balanceTotal2- totalSaveAmount;
     remainingBalance.innerText=remaining;
//      console.log(remainingBalance.innerText)
console.log(remaining)
  } 

})
