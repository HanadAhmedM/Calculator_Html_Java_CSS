function appendTodisplay(value){

    document.getElementById('display').value+= value
}
function cleardisplay(){

    document.getElementById('display').value = ''
}

function calculate(){


    let express = document.getElementById('display').value

    try{
        let result=  eval(express)

document.getElementById('display').value = result;
    } catch(error){

        document.getElementById('display').value = 'error';
    }

    
}