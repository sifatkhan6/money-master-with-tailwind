function getTotalExpenses(){
    // expennses amount 
    const foodCostInput = document.getElementById('food-cost');
    const foodCostAmountText = foodCostInput.value;
    const foodCostAmount = parseFloat(foodCostAmountText);

    const houseRentInput = document.getElementById('house-rent-cost');
    const houseRentAmountText = houseRentInput.value;
    const houseRentAmount = parseFloat(houseRentAmountText);

    const clothsCostInput = document.getElementById('cloths-cost');
    const clothsCostAmountText = clothsCostInput.value;
    const clothsCostAmount = parseFloat(clothsCostAmountText);

    if(isNaN(foodCostAmount) || foodCostAmount < 0 || isNaN(houseRentAmount) || houseRentAmount < 0 || isNaN(clothsCostAmount) || clothsCostAmount < 0){
        const error2 = document.getElementById('error-message2');
        error2.style.display = 'block';
        document.getElementById('remaining-balance').innerText = '';
        document.getElementById('total-expenses').innerText = '';
    }

    else{
    // total expenses 
    const totalCost = foodCostAmount + houseRentAmount + clothsCostAmount;
    const totalCostOutput = document.getElementById('total-expenses');
    totalCostOutput.innerText = totalCost;

    const error2 = document.getElementById('error-message2');
    error2.style.display = 'none';

    return totalCost;
    }
}

// Calculate Button 
document.getElementById('calculate-button').addEventListener('click', function(){
    // income amount 
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    incomeAmount = parseFloat(incomeAmountText);

    if(isNaN(incomeAmount) || incomeAmount < 0){
        const error1 = document.getElementById('error-message-1');
        error1.style.display = 'block';
        document.getElementById('remaining-balance').innerText = '';
        document.getElementById('total-expenses').innerText = '';
    }
    
    else{
    const finalCostAmount = getTotalExpenses(incomeAmount);
    
    // remaining balance 
    const remainingBalance = incomeAmount - finalCostAmount;
    const remainingBalanceOutput = document.getElementById('remaining-balance');
        if(incomeAmount < finalCostAmount){
            const error3 = document.getElementById('error3');
            error3.style.display = 'block';
            incomeInput.value = '';
            document.getElementById('food-cost').value = '';
            document.getElementById('house-rent-cost').value = '';
            document.getElementById('cloths-cost').value = '';
            document.getElementById('total-expenses').value = '';
            document.getElementById('remaining-balance').innerText = '';
            document.getElementById('total-expenses').innerText = '';
        }
        else{
            remainingBalanceOutput.innerText = remainingBalance;
            const error3 = document.getElementById('error3');
            error3.style.display = 'none';
        }

    const error = document.getElementById('error-message-1');
    error.style.display = 'none';
    }
})

// Saving Button 
document.getElementById('save-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    const finalCostAmount = getTotalExpenses(incomeAmount);
    
        // remaining balance 
        remainingBalance = incomeAmount - finalCostAmount;

        // saving amount 
        savingParcentInputText = document.getElementById('saving-input');
        savingParcentText = savingParcentInputText.value;
        savingParcentAmount = parseFloat(savingParcentText);
        savingParcent = savingParcentAmount / 100;
        savingAmount = incomeAmount * savingParcent;

        if(savingAmount > remainingBalance){
            const error4 = document.getElementById('error-message-4');
            error4.style.display = 'block';
            document.getElementById('saving-amount').innerText = '';
            document.getElementById('remaining-balance-afterSaving').innerText = '';
        }

        else{
        // saving amount output 
        savingAmountOutput = document.getElementById('saving-amount');
        savingAmountOutput.innerText = savingAmount;

        const error4 = document.getElementById('error-message-4');
        error4.style.display = 'none';

        // remaining balance after saving 
        remainingBalanceAfterSaving = remainingBalance - savingAmount;
        remainingBalanceAfterSavingOutput = document.getElementById('remaining-balance-afterSaving');
        remainingBalanceAfterSavingOutput.innerText = remainingBalanceAfterSaving;
        }
})