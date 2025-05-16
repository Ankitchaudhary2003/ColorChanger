function fun(){
 let random_no= Math.floor(Math.random()*16777215);
 let random_code="#"+random_no.toString(16);
document.body.style.backgroundColor=random_code
document.querySelector(".colorname").innerHTML=random_code ;




navigator.clipboard.writeText(random_code)

}
document.querySelector('button').addEventListener('click',fun
)


fun();