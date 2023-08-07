const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function error(input,message){

    input.className = 'form-control is-invalid'

    const div = input.nextElementSibling;
    div.innerText =message;
    div.className = 'invalid-feedback'

}


function success(input){

    input.className = "form-control is-valid"

}

 function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ""){
            error(input,`${input.id} gerekli alan`)
        }else{
            success(input)
        }
    })
    
}

function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} en az ${min} karakter olmalıdır`)
    }else if (input.value.length>max){
        error(input,`${input.id} en fazla ${max} karakter olmalıdır`)
    }else{
        success(input)
    }
}

function checkpasswords(input1,input2){
    if(input1.value != input2.value){
        error(input2,'paralolar eşleşmiyor')
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    checkRequired([username,email,password,password2])

    checkLength(username,7,15)
    checkLength(password,7,12)
    checkpasswords(password,password2)
    
    

    
})