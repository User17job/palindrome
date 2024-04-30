const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");
const form =document.querySelector('form')
const hh = document.querySelector("h1")


result.textContent= `nothing yet`;

btn.addEventListener("click", letra);

function letra(e){
e.preventDefault();        
let valor = input.value;
  function letre(string){
    if(input.value!==""){
        result.classList.remove("alert");
        hh.classList.remove("move");
        hh.textContent='Is it a Palindrome?';
        document.body.classList.remove('body');  
        form.style.backgroundColor='aliceblue';
                        
        const semiPalin = string.toLowerCase().replace(/[^a-z0-9]/g, '');
        return semiPalin === semiPalin.split('').reverse().join('');
   }else{
      Swal.fire("Please input a value");
        // creating an alert with color
        result.classList.add('alert');
        document.body.classList.add("body");
        hh.classList.add('move');
        hh.textContent='Code BreaK';
        form.style.backgroundColor='transparent';
   }
  }
  const letree = letre(valor);
  if(letree === true){
        // alert(` ${valor} is a palindrome`);
        result.textContent= `${input.value} is a palindrome`;
        result.style.backgroundColor="aqua";
  }else{
        // alert(` ${valor}is not a palindrome`);
        result.textContent= `${input.value} is not a palindrome`;
        result.style.backgroundColor="yellow";
  }
  form.reset();
};

