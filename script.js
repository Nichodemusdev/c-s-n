   function calculateResults() {
        const totalAmount = parseFloat(document.getElementById('totalAmount').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const currentRate = parseFloat(document.getElementById('currentRate').value);
        const percentage = parseFloat(document.getElementById('percentage').value);
    
        if (isNaN(totalAmount) || isNaN(rate) || isNaN(currentRate) || isNaN(percentage)) {
            alert('Please enter valid numbers in all fields');
            return;
        }
    
        const percentageAmount = (totalAmount * percentage) / 100;
        const remainingAmount = totalAmount - percentageAmount;
        const customerResultNaira = remainingAmount * rate;
        const customerResultDollar = customerResultNaira / currentRate;
        const accountHolderResultDollar = percentageAmount * rate / rate;
    
        document.getElementById('customerResult').innerHTML = `₦${formatNumber(customerResultNaira)} <span>$${formatNumber(customerResultDollar)}</span>`;
        document.getElementById('accountHolderResult').innerHTML = `$${formatNumber(accountHolderResultDollar)}`;
    }
    
    function formatNumber(num) {
        return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    
    function clearAll() {
        document.getElementById('totalAmount').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('currentRate').value = '';
        document.getElementById('percentage').value = '';
        document.getElementById('customerResult').innerHTML = '';
        document.getElementById('accountHolderResult').innerHTML = '';
    }    
