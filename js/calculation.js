document.getElementById('deposit-button').addEventListener('click',function(){
  const inputValue=document.getElementById('deposit-input');
  const value = inputValue.value;
  const currentValue=parseFloat(value);
  const depValue=document.getElementById('deposite');
  const prevValue=depValue.innerText;
  const previousValue=parseFloat(prevValue);
  const totalDeposite=currentValue+previousValue;
  depValue.innerText=totalDeposite;
  const totalValue=document.getElementById('total-balance');
  const tValue=totalValue.innerText;
  const total=parseFloat(tValue);
  const totalAmount=total+currentValue;
  totalValue.innerText=totalAmount;
  inputValue.value='';
});


document.getElementById('withdrow-button').addEventListener('click',function(){
  const withdrowAmount=document.getElementById('withdrow-input');
  const withdrowMoney=withdrowAmount.value;
  const wMoney=parseFloat(withdrowMoney);
  const withdrowValue=document.getElementById('w-value');
  const wValue=withdrowValue.innerText;
  const withdrow=parseFloat(wValue);
  const totalWithdrow=wMoney+withdrow;
  withdrowValue.innerText=totalWithdrow;

  const totalValue=document.getElementById('total-balance');
  const tValue=totalValue.innerText;
  const total=parseFloat(tValue);
  const totalAmount=total-wMoney;
  totalValue.innerText=totalAmount;


  withdrowAmount.value='';
  
});