function moneyAmount(money){
      
      const moneyInput =document.getElementById(money+'-input');
      const moneyInputText =moneyInput.value;
      if (isNaN(moneyInputText)){
            const massageString =document.getElementById('massage-string'); 
            const massageNumber = document.getElementById('massage-number');
          massageString.style.display='block';
          massageNumber.style.display='none';  
            console.log('Please enter valid numbers')
            
      }
      else if(moneyInputText<0){
            const massageString =document.getElementById('massage-string'); 
      const massageNumber = document.getElementById('massage-number');
massageNumber.style.display='block';
massageString.style.display='none';
      } 
      
      else {
      //       const massageString =document.getElementById('massage-string'); 
      // const massageNumber = document.getElementById('massage-number');
            // massageString.style.display='none';
            // massageNumber.style.display='none';      
      const moneyInputNumber=parseFloat(moneyInputText);
       return moneyInputNumber;

      console.log(moneyInputNumber)
      }
}

// Add enent handler at calculate button
document.getElementById("calculate-btn").addEventListener('click',function(){
      // income input
      const income =moneyAmount('income');
      console.log(income)
        //  food input  
   const foodExpence = moneyAmount('food')
// rent input
const rentExpence = moneyAmount('rent')
// cloth input
const clothExpence = moneyAmount('cloth')

// total expences calculate
const totalExpence =document.getElementById('total-expences')
totalExpence.innerText = foodExpence+rentExpence+clothExpence;
const totalExpenceAmount=parseFloat(totalExpence.innerText);
totalExpence.innerText=totalExpenceAmount;
console.log(totalExpenceAmount);
if (totalExpenceAmount> income){
const massageRight = document.getElementById('massage-right');
massageRight.style.display='block';
}
else{
      const massageRight = document.getElementById('massage-right');
massageRight.style.display='none';
//  get balance 
const balance = document.getElementById('balance');
// balance calculation

const balanceTotal = income-totalExpenceAmount;
balance.innerText=balanceTotal;
console.log(balanceTotal)
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
  saveAmount.innerText='';
  
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
