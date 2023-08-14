// step 1 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    // step 2
    const WithdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = WithdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

    // 
    WithdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('give number');
        return;
    }
    // step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);
  
    // step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('you can not withdraw more than your balance');
        return;
    };
     // step 4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

   
});

