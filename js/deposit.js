// step 1 add event listener to btn
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step 2 get deposit amount from input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString =  depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString); 

    // step 7 clear deposit field
    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('give number');
        return;
    };

    // step 3 get current deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(typeof previousDepositTotal);

    // step 4 add number to the current amount 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step 5 get current total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    
});