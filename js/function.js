function expenceAmount(expence){
      
      const expenceInput =document.getElementById(expence+'-input');
      const expenceInputText =expenceInput.value;
      if (isNaN(expenceInputText)){
            const massageString =document.getElementById('massage-string'); 
      const massageNumber = document.getElementById('massage-number');
          massageString.style.display='block';
          massageNumber.style.display='none';  
            console.log('Please enter valid numbers')
      } 
      else if(expenceInputText<0){
            const massageString =document.getElementById('massage-string'); 
      const massageNumber = document.getElementById('massage-number');
massageNumber.style.display='block';
massageString.style.display='none';
      }
      else {
            const massageString =document.getElementById('massage-string'); 
      const massageNumber = document.getElementById('massage-number');
            massageString.style.display='none';
            massageNumber.style.display='none';      
      const expenceInputNumber=parseFloat(expenceInputText);
      return expenceInputNumber;
      console.log(expenceInputNumber)
      }
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


// if (isNaN(income || foodExpence || rentExpence ||clothExpence )){
//       console.log('please enter number')

// } else if (income <0 || foodExpence <0 || rentExpence <0 ||clothExpence <0){
//       console.log('please enter positive number')

// } else {

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
