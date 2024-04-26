let namastebtn = document.querySelector('button');
namastebtn.addEventListener('click',InputMsg);
function InputMsg(){
    let name = prompt('Enter your Name');
    namastebtn.textContent="HI " + name;
}