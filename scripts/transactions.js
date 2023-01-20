let data = [
    {
        date: new Date('12.08.2022'),
        paymentAmount: 201.89,
        fee: 0,
        totalAmount: 201.89,
        paidBy: 'PFA regulation',
        transactionID: '17577502661907985936',
        desc: 'Сommission',
        status: false,
        currency: 'USD',
        paymentSend: true,
        paymentRecieved:false,
        withdraw: false,
        deposit: false,
        refunds: false
    },
    {
        date: new Date('12.05.2022'),
        paymentAmount: 9378.83,
        fee: 201.89,
        totalAmount: 9176.94,
        paidBy: 'Transit withdrawal',
        transactionID: '10865298281176987529',
        desc: '040702615 40817810960350117018',
        status: true,
        currency: 'USD',
        paymentSend: false,
        paymentRecieved:false,
        withdraw: true,
        deposit: false,
        refunds: false
    },
    {
        date: new Date('12.02.2022'),
        paymentAmount: 401.28,
        fee: 0,
        totalAmount: 401.28,
        paidBy: 'PFA regulation',
        transactionID: '15977979422130673826',
        desc: 'Payment',
        status: true,
        currency: 'USD',
        paymentSend: true,
        paymentRecieved:false,
        withdraw: true,
        deposit: false,
        refunds: false
    },
    {
        date: new Date('11.02.2022'),
        paymentAmount: 8775.66,
        fee: 0,
        totalAmount: 8775.66,
        paidBy: 'Irish Regulator',
        transactionID: '12873337551639220811',
        desc: 'Confirmed',
        status: true,
        currency: 'USD',
        paymentSend: false,
        paymentRecieved:true,
        withdraw: false,
        deposit: true,
        refunds: false
    },
    {
        date: new Date('10.18.2022'),
        paymentAmount: 201.89,
        fee: 0,
        totalAmount: 201.89,
        paidBy: 'Regulation',
        transactionID: '17577502661907985936',
        desc: 'Сommission',
        status: false,
        currency: 'USD',
        paymentSend: true,
        paymentRecieved:false,
        withdraw: true,
        deposit: false,
        refunds: false
    },
    {
        date: new Date('10.05.2022'),
        paymentAmount: 9378.83,
        fee: 201.89,
        totalAmount: 9176.94,
        paidBy: 'Transit',
        transactionID: '10865298281176987529',
        desc: '040702615 40817810960350117018',
        status: true,
        currency: 'USD',
        paymentSend: false,
        paymentRecieved:true,
        withdraw: false,
        deposit: false,
        refunds: true
    },
    {
        date: new Date('10.02.2022'),
        paymentAmount: 401.28,
        fee: 0,
        totalAmount: 401.28,
        paidBy: 'CRCP',
        transactionID: '15977979422130673826',
        desc: 'Payment',
        status: true,
        currency: 'USD',
        paymentSend: false,
        paymentRecieved:true,
        withdraw: false,
        deposit: false,
        refunds: false
    },
    {
        date: new Date('09.29.2022'),
        paymentAmount: 8775.66,
        fee: 0,
        totalAmount: 8775.66,
        paidBy: 'Refund',
        transactionID: '12873337551639220811',
        desc: 'Confirmed',
        status: false,
        currency: 'USD',
        paymentSend: true,
        paymentRecieved:false,
        withdraw: true,
        deposit: false,
        refunds: false
    },
    {
        date: new Date('08.22.2022'),
        paymentAmount: 201.89,
        fee: 0,
        totalAmount: 201.89,
        paidBy: 'Transit',
        transactionID: '17577502661907985936',
        desc: 'Сommission',
        status: true,
        currency: 'USD',
        paymentSend: false,
        paymentRecieved:true,
        withdraw: false,
        deposit: true,
        refunds: false
    },
    {
        date: new Date('07.15.2022'),
        paymentAmount: 9378.83,
        fee: 201.89,
        totalAmount: 9176.94,
        paidBy: 'Transit withdrawal',
        transactionID: '10865298281176987529',
        desc: '040702615 40817810960350117018',
        status: true,
        currency: 'USD',
        paymentSend: true,
        paymentRecieved:false,
        withdraw: false,
        deposit: false,
        refunds: false
    },
    {
        date: new Date('07.01.2022'),
        paymentAmount: 401.28,
        fee: 0,
        totalAmount: 401.28,
        paidBy: 'Refund',
        transactionID: '15977979422130673826',
        desc: 'Payment',
        status: false,
        currency: 'USD',
        paymentSend: false,
        paymentRecieved:true,
        withdraw: false,
        deposit: false,
        refunds: false
    },
    {
        date: new Date('06.12.2022'),
        paymentAmount: 8775.66,
        fee: 0,
        totalAmount: 8775.66,
        paidBy: 'CRCP',
        transactionID: '12873337551639220811',
        desc: 'Confirmed',
        status: false,
        currency: 'USD',
        paymentSend: false,
        paymentRecieved:true,
        withdraw: false,
        deposit: false,
        refunds: true
    },
].sort((a,b) => b.date - a.date);

let filteredData = [];

/*---------SELECTORS---------------------------------------*/

const body = document.querySelector('body');

const filterTextInput = document.querySelector('.form__date-input');
const filterInputError = document.querySelector('.input__error');
const filterReset = document.querySelector('.form__date-input-reset');
const filterBtnIcon = document.querySelector('.form__filter-btn__icon')
const filterBtnText = document.querySelector('.form__filter-btn-text')
const filterOptions = document.querySelector('.right-col__table-handlers');

const table = document.querySelector('.activity__table');
const tableBody = document.querySelector('.tbody');
const tableHeading = document.querySelector('.activity__heading');
const tableBottomHandlers = document.querySelector('.activity__more');
const tableMinusPage = document.querySelector('.activity__decr');
const tablePaginationValue = document.querySelector('.activity__value');
const tablePlusPage = document.querySelector('.activity__incr');

const modal = document.querySelector('.activity__modal');
const modalBody = document.querySelector('.activity__modal-row')
const closeBtn = document.querySelector('.modal-right-col__close-btn');

const allTransactionsBtn = document.querySelector('#a-option');
const sendBtn = document.querySelector('#b-option');
const recievedBtn = document.querySelector('#c-option');
const refundsBtn = document.querySelector('#d-option');
const withdrawBtn = document.querySelector('#e-option');
const depositBtn = document.querySelector('#f-option');
const bottomHandlers = document.querySelectorAll('.l-radio-input');
/*---------SELECTORS---------------------------------------*/

/*---------Table & Modal-----------------------------------*/

const emptyTableHandler = () => {
    tableHeading.style.padding = "0px 24px 24px 24px"
        tableHeading.innerHTML = "No recent activity";
            table.style.display = "none";
                tableBottomHandlers.style.display = "none";
}

const resetEmptyTableHandler = () => {
    tableHeading.style.padding = "0px 24px"
        tableHeading.innerHTML = "Recent Activity";
            table.style.display = "table";
                tableBottomHandlers.style.display = "block";
}

const createTable = (node, data, i) => {
    node.classList.add('tbody-row');
        node.innerHTML = tableRowTemplate(data[i]);
            tableBody.appendChild(node);    
}

const createModal = (data, i) => {
    modalOpenStyleHelper(modal);
        modalBody.innerHTML = tableModalTamplate(data[i])
        closeBtn.addEventListener('click', () => modalCloseStyleHelper(modal));
            modal.addEventListener('click', (e) => { 
                e.target.matches(".modal-right-col__close-btn") || 
                !e.target.closest('.activity__modal-content') ? modalCloseStyleHelper(modal) : false
            })
}

const setTable = (data) => {
    if(!data.length) emptyTableHandler();
   
    for (let i = 0; i < data.length; i++) {
        let node = document.createElement('tr');    
            createTable(node, data, i);   
            node.addEventListener('click', () => createModal(data, i))   
    }
};

/*--------------PAGINATION-----------------------------------*/

const paginate = (data, page = 1, perPage = 4) => data.slice(perPage * (page - 1), perPage * page);

let page = 1;
const paginatedData = paginate(data, page);
const pageCount = Math.ceil(data.length / 4);

if(pageCount === 1) tableBottomHandlers.style.display = 'none';

const onPageChangeHandler = (data, page) => {
    let newList = paginate(data, page);
        tableBody.innerHTML="";
            setTable(newList);
}

const nextPage = (data) => {
    if(pageCount !== page) {
        page += 1;
            onPageChangeHandler(data, page);
    } else {
        page = 1;
            onPageChangeHandler(data, page);
    }
    tablePaginationValue.innerHTML = page
}

const prevPage = (data) => {
    if(page > 1) {
        page -= 1;
            onPageChangeHandler(data, page);
    } else {
        page = pageCount;
            onPageChangeHandler(data, page);
    }
    tablePaginationValue.innerHTML = page
}


tablePlusPage.addEventListener('click', () => nextPage(data));
tableMinusPage.addEventListener('click', () => prevPage(data));

setTable(paginatedData);

/*---------FILTERS-----------------------------------------*/

 const pattern = /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g;

const toggleFormOptions = () => {
   if(!filterOptions.classList.contains('activated')){
    filterOptions.classList.add('activated')
   } else {
    filterOptions.classList.remove('activated')
   }
}

const refreshTable = () => {
    filteredData = [];
    tableBody.innerHTML = "";
        filterTextInput.value = "";
            tablePaginationValue.innerHTML = 1;
                page = 1;
                    resetEmptyTableHandler();
                        setTable(paginatedData);
}

const filterDate = (data, e) => {
    if(!data) return;
    const { value } = e.target;

    if(value) {
        let res = data.filter(data => {        
            const { date } = data;
            return new Date() >= date  && date >= new Date(value);
        });
        resetEmptyTableHandler();
            tableBottomHandlers.style.display = "none";
                tableBody.innerHTML = "";
                    filteredData = res;
                        setTable(res);
    } else if(!value.length) {
        tableBody.innerHTML = "";
            tableBottomHandlers.style.display = "block"
                setTable(paginatedData);
    } else {
        tableBody.innerHTML = "";
            filterInputError.style.display = 'block';
                    tableBottomHandlers.style.display = "block"
                        setTable(paginatedData);

        setTimeout(() => filterInputError.style.display = 'none', 4000)
    }
}

function prop(key) {
    var keys = key.split('.');
  
    return keys.reduce.bind(keys, function(obj, name) {
      return obj[name]
    })
}

const sortTableByKey = (data, key) => {
    const getKey = prop(key)

    const sorted = data.sort((a,b) => {
        const first = getKey(a);
        const second = getKey(b);

        if(first && !second) return -1;
        if(!second && b.first) return 1;
        return 0;
    })

    tableBody.innerHTML = '';
    data = sorted;

    if(!filteredData.length) {
        const paginatedData = paginate(sorted, page)
        setTable(paginatedData);
    } else {
        setTable(sorted)
    }
};



allTransactionsBtn.addEventListener('change', function() {
    this.checked && refreshTable();
});
sendBtn.addEventListener('change', function() {
    this.checked && sortTableByKey(!filteredData.length ? data : filteredData, 'paymentSend');
});
recievedBtn.addEventListener('change', function() {
    this.checked && sortTableByKey(!filteredData.length ? data : filteredData, 'paymentRecieved');
});
refundsBtn.addEventListener('change', function() {
    this.checked && sortTableByKey(!filteredData.length ? data : filteredData, 'refunds');
});
withdrawBtn.addEventListener('change', function() {
    this.checked && sortTableByKey(!filteredData.length ? data : filteredData, 'withdraw');
});
depositBtn.addEventListener('change', function() {
    this.checked && sortTableByKey(!filteredData.length ? data : filteredData, 'deposit');
});

filterTextInput.addEventListener('change', (e) => {
    filterDate(data, e);
})

filterBtnIcon.addEventListener('click', () => toggleFormOptions());
filterBtnText.addEventListener('click', () => toggleFormOptions());

filterReset.addEventListener('click', () => refreshTable())
/*-----------------END OF FILTERS----------------------------*/
