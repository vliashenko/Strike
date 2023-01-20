const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];
const getMonthName = (date) => {
    return monthNames[date.getMonth()];
};

const getShortMonthName = (date) => {
    return getMonthName(date).substr(0, 3);
};

const numberToCurrencyWithSign = new Intl.NumberFormat('sp-us', {
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    style: "currency",
})

const numberToCurrency = new Intl.NumberFormat('sp-us', {
    currency: "USD"
})

const formatToCurrencyWithSign = (amount) => {
    const str = numberToCurrencyWithSign.format(amount);
    return str.substr(str.length-1)+ str.substr(0,str.length-1)
}

const formatToCurrency = (amount) => {
    return numberToCurrency.format(amount)
}

const tableRowTemplate = (data) => {
    const { date, paymentAmount, paidBy, desc, status, currency } = data;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const curShortMonth = getShortMonthName(date);

    const formatPayment = formatToCurrency(paymentAmount);

    return `
        <td class="tddate__cell">
            <div class="date__cell-Q">${day}</div>
                <div class="date__cell-W"> ${curShortMonth} </div>
         </td>    

        <td class="tddesc__cell">
            <div class="desc__cell-Q">${paidBy}</div>
                <div class="desc__cell-W">${desc}</div>
         </td>    
         <td class="tdstatus__cell">    
            <div class="tooltip-bottom">    
                <i class="info-list-icon ${!status ? "fa-sharp fa-solid fa-circle-xmark" : "fas fa-check-circle"}"></i>
                    <div class="bottom"><h3>${!status ? "Failed" : "Completed"}</h3><i></i></div>  
            </div>
        </td>
        <td class="tdamount__cell">
            <div class="amount__cell-Q">${formatPayment}</div>
                <div class="amount__cell-W">(${currency})</div>
        </td>
    `;
};

const tableModalTamplate = (data) => {
    const { date, paymentAmount, paidBy, desc, status, totalAmount, fee, transactionID } = data;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const month = getShortMonthName(date);
    const year = date.getFullYear();

    const formatPayment = formatToCurrencyWithSign(paymentAmount);
    const formantFee = formatToCurrencyWithSign(fee);
    const formatTotal = formatToCurrencyWithSign(totalAmount);

    return `
            <div class="activity__modal-left-col">
                <div class="modal-left-col__content">
                    <div class="modal-left-col__icon-container">
                        <i class="modal-left-col__icon fas fa-building"></i>
                    </div>
                        <h3 class="modal-left-col__heading">${paidBy}</h3>
                            <p class="modal-left-col__amount">${formatPayment}</p>    
                                <p class="modal-left-col__date">${day} ${month} ${year}</p>
                </div>      
            </div>
            <div class="activity__modal-right-col">
                <div class="modal-right-col__header">
                    <h5 class="modal-right-col__heading">Transaction Details</h5>
                    <span class="modal-right-col__close-btn">&times;</span>
                </div>
                <hr class="modal-right-col__hr">
                <div class="modal-right-col__info">
                    <ul class="modal-right-col__payment-list">
                        <li class="payment-list__item">
                            Payment Amount:
                                <span class="payment-list__sub-item">${formatPayment}</span>
                        </li>
                        <li class="payment-list__item">
                            Fee:
                                <span class="payment-list__sub-item">-${formantFee}</span>
                        </li>
                    </ul>
                    <hr class="modal-right-col__hr-bottom">
                    <div class="modal-right-col__total">
                        <p class="modal__right-col__total-content">Total Amount: </p>
                            <p class="modal__right-col__total-amount">${formatTotal}</p>
                    </div>
                    <ul class="modal-right-col__payed-by">
                        <li class="payed-by__heading">Paid By:</li>
                            <li class="payed-by__amount">${paidBy}</li>
                    </ul>
                    <ul class="modal-right-col__trans-id">
                        <li class="trans-id__heading">Transaction ID:</li>
                            <li class="trans-id__amount">${transactionID}</li>
                    </ul>
                    <ul class="modal-right-col__desc">
                        <li class="desc__heading">Description:</li>
                            <li class="desc__amount">${desc}</li>
                    </ul>
                    <ul class="modal-right-col__status">
                        <li class="status__heading">Status:</li>
                            <li class="status__amount">
                                ${!status ? "Failed" : "Completed"}
                                    <i class="status__amount-icon ${!status ? "fa-sharp fa-solid fa-circle-xmark" : "fas fa-check-circle"}"></i>
                        </li>
                    </ul>
                </div>
            </div>
    `
}
