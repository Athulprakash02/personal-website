// function validateForm() {
//     const NAMEValue = document.getElementById('NAME').value.trim();
//     const eMAILValue = document.getElementById('eMAIL').value.trim();
//     const MESSAGEValue = document.getElementById('MESSAGE').value.trim();
//     const PHONEValue = document.getElementById('PHONE').value.trim();

//     if (NAMEValue === '' || eMAILValue === '' || MESSAGEValue === '' || PHONEValue === '') {
//         alert('Please fill all fields');
//         return false;
//     }


//     if (!/^\d+$/.test(PHONEValue)) {
//         alert('Phone number can only contain numbers');
//         return false;
//     }


//     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(eMAILValue)) {
//         alert('Please enter a valid email address');
//         return false;
//     }

//     return true;
// }


function btnClick(){
    let btn;

    var name=document.getElementById("name").value.trim();
    var eMAIL=document.getElementById("email").value.trim();
    var num=document.getElementById("mobile").value.trim();
    var msg=document.getElementById("message").value.trim();


    if(name==="" || eMAIL==="" || num==="" || msg==="")
    {
        alert('Please fill all fields');
        btn=false;
    }else if(!/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(eMAIL)){
        alert('Please enter a valid Email adress');

    
        btn=flase;
    }
    else if(!/^\d+$/.test(num)){
        alert('Please enter a valid Phone number');

        btn=false;
    }
    
    return btn;
}