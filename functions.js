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
    const finalCostAmount = getTotalExpenses(incomeAmount);

    // remaining balance 
    remainingBalance = incomeAmount - finalCostAmount;
    remainingBalanceOutput = document.getElementById('remaining-balance');
    remainingBalanceOutput.innerText = remainingBalance;
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
        savingAmount = remainingBalance * savingParcent;

        // saving amount output 
        savingAmountOutput = document.getElementById('saving-amount');
        savingAmountOutput.innerText = savingAmount;

        // remaining balance after saving 
        remainingBalanceAfterSaving = remainingBalance - savingAmount;
        remainingBalanceAfterSavingOutput = document.getElementById('remaining-balance-afterSaving');
        remainingBalanceAfterSavingOutput.innerText = remainingBalanceAfterSaving;
})