/*---------------SELECTORS--------------------------------------------------------*/
const body = document.querySelector("body");

const formGroups = document.querySelectorAll('.security__form-group')
const passwordOpenIcon = document.querySelector('.right-col__password-change-icon');
const passwordOpenText = document.querySelector('.right-col__password-change-text');
const passwordModal = document.querySelector('.password-change__modal');
const passwordModalCloseBtn = document.querySelector('.password-change__closeBtn');

const securityOpenIcon = document.querySelector('.right-col__security-change-icon');
const securityOpenText = document.querySelector('.right-col__security-change-text');
const securityModal = document.querySelector('.security__modal');
const securityModalCloseBtn = document.querySelector('.security__closeBtn');

const transactionOpenIcon = document.querySelector('.right-col__transaction-change-icon');
const transactionOpenText = document.querySelector('.right-col__transaction-change-text');
const transactionModal = document.querySelector('.transaction__modal');
const transactionModalCloseBtn = document.querySelector('.transaction__closeBtn');
/*---------------SELECTORS--------------------------------------------------------*/

/*---------------PASSWORD MODAL---------------------------------------------------*/

passwordOpenIcon.addEventListener('click', () => modalOpenStyleHelper(passwordModal));
passwordOpenText.addEventListener('click', () => modalOpenStyleHelper(passwordModal));
passwordModalCloseBtn.addEventListener('click', () => modalCloseStyleHelper(passwordModal));

passwordModal.addEventListener('click', (e) => { 
    e.target.matches('.password-change__closeBtn') || 
    !e.target.closest('.password-change__modal-content') ? modalCloseStyleHelper(passwordModal) : false
})
/*---------------PASSWORD MODAL---------------------------------------------------*/

/*---------------SECURITY MODAL---------------------------------------------------*/

securityOpenIcon.addEventListener('click', () => modalOpenStyleHelper(securityModal));
securityOpenText.addEventListener('click', () => modalOpenStyleHelper(securityModal));
securityModalCloseBtn.addEventListener('click', () => modalCloseStyleHelper(securityModal));

securityModal.addEventListener('click', (e) => { 
    e.target.matches('.security__closeBtn') || 
    !e.target.closest('.security__modal-content') ? modalCloseStyleHelper(securityModal) : false
})
/*---------------SECURITY MODAL---------------------------------------------------*/

/*---------------TRANSACTIONS MODAL-----------------------------------------------*/

transactionOpenIcon.addEventListener('click', () => modalOpenStyleHelper(transactionModal));
transactionOpenText.addEventListener('click', () => modalOpenStyleHelper(transactionModal));
transactionModalCloseBtn.addEventListener('click', () => modalCloseStyleHelper(transactionModal));

transactionModal.addEventListener('click', (e) => { 
    e.target.matches('.transaction__closeBtn') || 
    !e.target.closest('.transaction__modal-content') ? modalCloseStyleHelper(transactionModal) : false
})
/*---------------TRANSACTIONS MODAL---------------------------------------------------*/

/*---------------SELECT TEMPLATE--------------------------------------------------------------*/


formGroups.forEach((item, i) => {
    item.innerHTML = createFormGroupTemplates(i + 1);
})
/*---------------SELECT TEMPLATE------------------------------------------------------------------*/