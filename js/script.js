document.getElementById('submit-button').addEventListener('click',function(){
  const inputEmail=document.getElementById('input-email');
  const inputPassword=document.getElementById('input-password');
  const email=inputEmail.value;
  const pass=inputPassword.value;
  if(email==='muhib@babu.com' && pass==='12345'){
    window.location.href='bankcalculation.html';

  }
  else{
    alert('Entre valid info');
  }

});