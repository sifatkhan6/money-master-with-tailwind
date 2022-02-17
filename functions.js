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

    // total expenses 
    const totalCost = foodCostAmount + houseRentAmount + clothsCostAmount;
    const totalCostOutput = document.getElementById('total-expenses');
    totalCostOutput.innerText = totalCost;

    return totalCost;
}

// Calculate Button 
document.getElementById('calculate-button').addEventListener('click', function(){
    // income amount 
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    incomeAmount = parseFloat(incomeAmountText);

    if(isNaN(incomeAmount) || incomeAmount < 0){
        const error = document.getElementById('error-message-1');
        error.style.display = 'block';
        incomeInput.value = '';
        document.getElementById('food-cost').value = '';
        document.getElementById('house-rent-cost').value = '';
        document.getElementById('cloths-cost').value = '';
        document.getElementById('total-expenses').value = '';
        document.getElementById('remaining-balance').value = '';
    }
    
    else{
    const finalCostAmount = getTotalExpenses(incomeAmount);
    
    // remaining balance 
    remainingBalance = incomeAmount - finalCostAmount;
    remainingBalanceOutput = document.getElementById('remaining-balance');
    remainingBalanceOutput.innerText = remainingBalance;

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

        // saving amount output 
        savingAmountOutput = document.getElementById('saving-amount');
        savingAmountOutput.innerText = savingAmount;

        // remaining balance after saving 
        remainingBalanceAfterSaving = remainingBalance - savingAmount;
        remainingBalanceAfterSavingOutput = document.getElementById('remaining-balance-afterSaving');
        remainingBalanceAfterSavingOutput.innerText = remainingBalanceAfterSaving;
})