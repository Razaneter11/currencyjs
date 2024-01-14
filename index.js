
var register = document.querySelector(".registerForm");
register.onsubmit = function (e) {
    e.preventDefault();
    var elements = e.target.elements;
    var amount = elements['amount'].value;
    
    var price = { dollar: 3.73, dinar: 5.26, nis: 1 };
    var currency = document.querySelector(".exchange").value;
    
var re=0;
    if (currency == 'dollar') {
      re=(amount / price.dollar);
    } else if (currency == 'dinar') {
        re=(amount / price.dinar);
    } else if (currency == 'nis') {
        re=(amount * price.nis);
    }
    var result = document.querySelector(".result");
    result.innerHTML="value: "+ re+" "+currency;

}


