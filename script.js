const reveals = document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach((element)=>{

const top = element.getBoundingClientRect().top;
const visible = window.innerHeight - 100;

if(top < visible){
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealElements);
revealElements();

const form = document.getElementById("orderForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const product = document.getElementById("product").value;
const quantity = document.getElementById("quantity").value;

const message =
`Hello AB Health Care,

Name: ${name}
Phone: ${phone}
Product: ${product}
Quantity: ${quantity}

Please contact me regarding this order.`;

const whatsappURL =
`https://wa.me/919944188595?text=${encodeURIComponent(message)}`;

window.open(whatsappURL, "_blank");

});
