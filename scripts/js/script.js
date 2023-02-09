var btn = document.querySelector('.button-inscreva');
btn.onclick = function() {
 displayMessage('*****👏 PARABÉNS DEV!!! 👏*****   Agora você receberá em seu e-mail nossas ofertas, descontos e promoções!!!');
 
};

 function displayMessage(msgText, msgType) {

 var html = document.querySelector('html');

 var panel = document.createElement('div');
 panel.setAttribute('class', 'msgBox');
 html.appendChild(panel);
 var msg = document.createElement('p');
 msg.textContent = msgText;
 panel.appendChild(msg);

 var closeBtn = document.createElement('button');
 closeBtn.textContent = 'x';
 panel.appendChild(closeBtn);

 closeBtn.onclick = function() {
 panel.parentNode.removeChild(panel);
}


}