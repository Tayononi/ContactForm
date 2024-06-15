

const firstName= document.getElementById('fName');
const lastName = document.getElementById('lName');
const eMail = document.getElementById('email');
const generalEnquiryBtn=document.getElementById('gen-btn');
const supportRequestBtn=document.getElementById('sup-btn');
const generalEnquiryRadio=document.getElementById('gen-radio');
const supportRequestRadio=document.getElementById('sup-radio');
const message =document.getElementById('message-input');
const consent =document.getElementById('consent-checkbox');
const submitButton=document.getElementById('submit-button');
const firstnameError=document.getElementById('error-fname');
const lastnameError = document.getElementById('error-lname');
const messageError =document.getElementById('error-message');
const eMailError =document.getElementById('error-mail');
const queryError = document.getElementById('query-error');
const consentError=document.getElementById('consent-error');
const success = document.getElementById('success-div');



submitButton.addEventListener( 'click', ()=>{
let contactInformation =[firstName.value,lastName.value,eMail.value,message.value];
let count = 0;

 if (generalEnquiryRadio.checked){
  generalEnquiryBtn.classList.add('checked');
 }
 if (supportRequestRadio.checked){
 supportRequestBtn.classList.add('checked');
 }
 if (generalEnquiryRadio.checked || supportRequestRadio.checked){
  count++
 }else {
 queryError.textContent=`please select a query type`
 }
if(consent.checked){
  count++;
} else{
   consentError.textContent=`to submit this form,please consent to being contacted`;
}
for (let i = 0; i < 4; i++){
     if (contactInformation[0] ===''){
     firstName.classList.add('empty');
     firstnameError.textContent = `this field is required`;
      }else{
        count++;
      }
     if(contactInformation[1] === ''){
      lastName.classList.add('empty');
      lastnameError.textContent = `this field is required`;
      }else{
        count++;
      }
      if(contactInformation[2] === ''){
        eMail.classList.add('empty');
        eMailError.textContent=`please enter a valid E-mail`
      }else{
        count++;
      }
      if(contactInformation[3]=== ''){
        message.classList.add('empty');
        messageError.textContent=`this field is required`;
      }else{
        count++;
      }
      
}
if (count > 5){
   success.classList.add('filled');
firstName.value ='';
lastName.value ='' ;
eMail.value='';
message.value='';

}else{
  success.classList.remove('filled');
}

})
 
