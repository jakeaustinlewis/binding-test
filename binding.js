'use strict';

(() => {
    
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let nameHere = document.getElementById('nameHere');

    const dataObj = {
        firstName: '',
        lastName: ''
    };

    function setObject(key, value) {
        dataObj[key] = value;
        document.getElementById(`${key}View`).innerHTML = value;
    }
    
    function update(e){
        // nameHere.innerHTML = e.target.value;
        setObject(e.target.id, e.target.value);
    }

    firstName.addEventListener('keyup', update);
    lastName.addEventListener('keyup', update);

})();