
//funzionamento button Calculate


var calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){

    var prezzoBaseBurger = 50;
    console.log(prezzoBaseBurger);
    
    //lista elementi checkbox html
    var addCheckbox = document.getElementsByClassName('add');
    console.log(addCheckbox);

    //uso ciclo for per iterare elementi checkbox html
    for( var i = 0; i < addCheckbox.length; i++){
        var thisCheckbox = addCheckbox[i];
        //elementi
        console.log(thisCheckbox);
        //booleano che indica elementi check 
        console.log(i, thisCheckbox.checked);
        //valore dell' elemento
        console.log(i, thisCheckbox.value);

        if(thisCheckbox.checked == true){
            //trasformo stringa "value" in intero per sommarlo
            var addPrice = parseInt(thisCheckbox.value);
            console.log(addPrice);

            //somma prezzo base + valori elementi check
            prezzoBaseBurger = prezzoBaseBurger + addPrice;
            
        }
    
    }
    console.log(prezzoBaseBurger);

    //controllare se coupon presente nell' array
    var couponArray = ['123ABC', '456DEF', '789GHI'];

    var couponAdd = document.getElementById('coupon').value;
    console.log(couponAdd);

    var couponPresent = couponArray.includes(couponAdd);
    console.log(couponPresent);
    
    if ( couponPresent == true){
        prezzoBaseBurger = prezzoBaseBurger - (prezzoBaseBurger * 10 / 100);
    }else{
        prezzoBaseBurger = prezzoBaseBurger;
    }
    
    console.log(prezzoBaseBurger);

    //stampare risultato somma in forma umana
    var prezzoDaStampare = prezzoBaseBurger.toFixed(2);
    console.log(prezzoDaStampare);
    document.getElementById('prezzo-finale').innerHTML = 'Your Price ' + prezzoDaStampare + ' $';

})

