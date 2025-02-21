



function gerarsenha(){

let sliderElement = document.querySelector("#slider")
let buuton =  document.querySelector("#button")



let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassoword = document.querySelector("#conteiner-passoword");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";




sizepassword.innerHTML = sliderElement.value ;

slider.oninput = function(){
        sizepassword.innertext = this.value;
}


    let pass = '';
   
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
       pass += charset.charAt(Math.floor(Math.random() * n)) ;
      }
console.log(pass)
containerPassoword.classList.remove("hide")
password.innerHTML = pass;
this.novaSenha = pass;


}


function copypassoword(){
    navigator.clipboard.writeText(senha);
    alert('senha copiada');
  
}









