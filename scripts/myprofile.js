/*---------SELECTORS---------------------------------------*/
const body = document.querySelector("body");

const modalEdit = document.querySelector('.add-bank__modal');
const modalOpenEditBtn = document.querySelector('.account-card-overlay-link');
const modalCloseEditBtn = document.querySelector('.add-bank__closeBtn');

const modalDetails = document.querySelector('.details__modal');
const modalOpenDetailsBtn = document.querySelector('.details__change-icon');
const modalOpenDetailsIcon = document.querySelector('.details__change-text');
const modalCloseDetailsBtn = document.querySelector('.details__closeBtn');

const modalVer = document.querySelector('.verification__modal');
const modalOpenVersBtn = document.querySelector('.verification__change-icon');
const modalOpenVerIcon = document.querySelector('.verification__change-text');
const modalCloseVerBtn = document.querySelector('.verification__closeBtn');

const modalEmail = document.querySelector('.email__modal');
const modalOpenEmailsBtn = document.querySelector('.email__change-icon');
const modalOpenEmailIcon = document.querySelector('.email__change-text');
const modalCloseEmailBtn = document.querySelector('.email__closeBtn');

const modalPhone = document.querySelector('.phone__modal');
const modalOpenPhonesBtn = document.querySelector('.phone__change-icon');
const modalOpenPhoneIcon = document.querySelector('.phone__change-text');
const modalClosePhoneBtn = document.querySelector('.phone__closeBtn');
/*---------SELECTORS---------------------------------------*/

/*---------ADD BANK ACCOUNT MODAL--------------------------*/

modalOpenEditBtn.addEventListener('click', () => modalOpenStyleHelper(modalEdit));
modalCloseEditBtn.addEventListener('click', () => modalCloseStyleHelper(modalEdit));

modalEdit.addEventListener('click', (e) => { 
    e.target.matches('.add-bank__closeBtn') || 
    !e.target.closest('.add-bank__modal-content') ? modalCloseStyleHelper(modalEdit) : false
})

/*---------END OF ADD BANK ACCOUNT MODAL-------------------*/

/*---------PERSONAL DETAILS MODAL--------------------------*/

modalOpenDetailsBtn.addEventListener('click', () => modalOpenStyleHelper(modalDetails));
modalOpenDetailsIcon.addEventListener('click', () => modalOpenStyleHelper(modalDetails));
modalCloseDetailsBtn.addEventListener('click', () => modalCloseStyleHelper(modalDetails));

modalDetails.addEventListener('click', (e) => { 
    e.target.matches('.details__closeBtn') || 
    !e.target.closest('.details__modal-content') ? modalCloseStyleHelper(modalDetails) : false
})

/*---------END OF PERSONAL DETAILS MODAL-------------------*/

/*---------VERIFICATION MODAL------------------------------*/

modalOpenVersBtn.addEventListener('click', () => modalOpenStyleHelper(modalVer));
modalOpenVerIcon.addEventListener('click', () => modalOpenStyleHelper(modalVer));
modalCloseVerBtn.addEventListener('click', () => modalCloseStyleHelper(modalVer));

modalVer.addEventListener('click', (e) => { 
    e.target.matches('.verification__closeBtn') || 
    !e.target.closest('.verification__modal-content') ? modalCloseStyleHelper(modalVer) : false
})

/*---------END OF VERIFICATION MODAL----------------------*/

/*---------EMAIL MODAL------------------------------------*/

modalOpenEmailsBtn.addEventListener('click', () => modalOpenStyleHelper(modalEmail));
modalOpenEmailIcon.addEventListener('click', () => modalOpenStyleHelper(modalEmail));
modalCloseEmailBtn.addEventListener('click', () => modalCloseStyleHelper(modalEmail));

modalEmail.addEventListener('click', (e) => { 
    e.target.matches('.email__closeBtn') || 
    !e.target.closest('.email__modal-content') ? modalCloseStyleHelper(modalEmail) : false
})

/*---------END OF EMAIL MODAL-----------------------------*/

/*---------PHONE MODAL------------------------------------*/

modalOpenPhonesBtn.addEventListener('click', () => modalOpenStyleHelper(modalPhone));
modalOpenPhoneIcon.addEventListener('click', () => modalOpenStyleHelper(modalPhone));
modalClosePhoneBtn.addEventListener('click', () => modalCloseStyleHelper(modalPhone));

modalPhone.addEventListener('click', (e) => { 
    e.target.matches('.phone__closeBtn') || 
    !e.target.closest('.phone__modal-content') ? modalCloseStyleHelper(modalPhone) : false
})

/*---------END OF PHONE MODAL-----------------------------*/