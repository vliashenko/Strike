const data = [
    {
        date: new Date('12.08.2022'),
        paymentAmount: 201.89,
        fee: 0,
        totalAmount: 201.89,
        paidBy: 'PFA regulation',
        transactionID: '17577502661907985936',
        desc: 'Сommission',
        status: false,
        withdrawal: 'USD'
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
        withdrawal: 'USD'
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
        withdrawal: 'USD'
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
        withdrawal: 'USD'
    },
];
/*---------SELECTORS---------------------------------------*/

const body = document.querySelector("body");
const modalOpenEditBtn = document.querySelector('.account-card-overlay-link');
const modalCloseEditBtn = document.querySelector('.add-bank__closeBtn');
const modalEdit = document.querySelector('.add-bank__modal');
const tableHeading = document.querySelector('.activity__heading');
const table = document.querySelector('.activity__table');
const tableBody = document.querySelector('.tbody');
const tableBottomHandlers = document.querySelector('.activity__more');
const modal = document.querySelector(".activity__modal");
const modalBody = document.querySelector('.activity__modal-row')
const closeBtn = document.querySelector(".modal-right-col__close-btn");

/*---------SELECTORS---------------------------------------*/

/*---------ADD BANK ACCOUNT MODAL--------------------------*/

modalOpenEditBtn.addEventListener('click', () => modalOpenStyleHelper(modalEdit));
modalCloseEditBtn.addEventListener('click', () => modalCloseStyleHelper(modalEdit));

modalEdit.addEventListener('click', (e) => { 
    e.target.matches('.add-bank__closeBtn') || 
    !e.target.closest('.add-bank__modal-content') ? modalCloseStyleHelper(modalEdit) : false
})

/*---------END OF ADD BANK ACCOUNT MODAL-------------------*/

/*---------Table & Modal-----------------------------------*/

const emptyTableHandler = () => {
    tableHeading.style.padding = "0px 24px 24px 24px"
        tableHeading.innerHTML = "No recent activity";
            table.style.display = "none";
                tableBottomHandlers.style.display = "none";
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

function setTable () {
    if(!data.length) emptyTableHandler();
    
    for (let i = 0; i < data.length; i++) {
        let node = document.createElement('tr');    
            createTable(node, data, i);   
            node.addEventListener('click', () => createModal(data, i))   
    }
};

setTable();
