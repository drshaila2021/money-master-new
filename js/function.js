function expenceAmount(expence){
      const expenceInput =document.getElementById(expence+'-input');
      const expenceInputText =expenceInput.value;
      const expenceInputNumber=parseFloat(expenceInputText);
      return expenceInputNumber;
      console.log(expenceInputNumber)
}

// Add enent handler at calculate button
document.getElementById("calculate-btn").addEventListener('click',function(){
      // income input
      const income =expenceAmount('income');
      console.log(income)
        //  food input  
   const foodExpence = expenceAmount('food')
// rent input
const rentExpence = expenceAmount('rent')
// cloth input
const clothExpence = expenceAmount('cloth')
// total expences calculate
 const totalExpence =document.getElementById('total-expences')
 totalExpence.innerText = foodExpence+rentExpence+clothExpence;
 const totalExpenceAmount=parseFloat(totalExpence.innerText);
 totalExpence.innerText=totalExpenceAmount;
 console.log(totalExpenceAmount);
 //  get balance 
const balance = document.getElementById('balance');
// balance calculation

const balanceTotal = income-totalExpenceAmount;
balance.innerText=balanceTotal;
console.log(balanceTotal)
})
