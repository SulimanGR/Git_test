function checkAge(age){

    if(age >= 18){
        return true;
    }
    else{
        return alert('Access Denied');
    }

}

let age = prompt("how old are you? ")

if(checkAge(age)){
    alert('Access Granted');
}
