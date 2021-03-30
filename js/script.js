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

            prezzoBaseBurger = prezzoBaseBurger + addPrice;
            
        }
    
    }

    console.log(prezzoBaseBurger);

})