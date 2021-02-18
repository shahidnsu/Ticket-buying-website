let totalSum = 0;
let totalSum1= 0;
let seatNumber=0;
let total;

function ticketNumber(className,isIncrease)
{ 
    let classType = document.getElementById(className + '-class');
    
    let seat = (document.getElementById(className + '-input').value);
    seatNumber = parseInt(seat);
    

    


if (className === 'first' && isIncrease == true)
{
    seatNumber = seatNumber + 1;
    
    document.getElementById(className + '-input').value = seatNumber;

    totalSum =   (150 *  seatNumber);
    classType.innerText = totalSum;
}


else if (className === 'first' && isIncrease == false && seatNumber > 0)
{
    seatNumber = seatNumber - 1;
    
    document.getElementById(className + '-input').value = seatNumber;

   totalSum =  (100 *  seatNumber);
   classType.innerText = totalSum;
}

else if (className === 'economy' && isIncrease == true)
{
    seatNumber = seatNumber + 1;
    
    document.getElementById(className + '-input').value = seatNumber;

   totalSum1 =  (100 *  seatNumber);
   classType.innerText = totalSum1;
}




else if (className === 'economy' && isIncrease == false  && seatNumber > 0)
{
    seatNumber = seatNumber - 1;
    
    document.getElementById(className + '-input').value = seatNumber;

    totalSum1 = (100 *  seatNumber);
    console.log(totalSum1);
    classType.innerText = totalSum1;
}

//let subtotal = 0;

let subtotal = totalSum + totalSum1;
document.getElementById('subtotal').innerHTML = subtotal;
let vat = subtotal * 0.1
document.getElementById('vat').innerHTML = vat;
total = subtotal + vat;
document.getElementById('total').innerHTML = total;


}


let bookNow = document.getElementById('bookNow');
bookNow.addEventListener("click", function()
{
   let show = document.getElementById('book');
   show.style.display ="block";
   console.log("hello")
   document.getElementById("mainPart").style.display ="none";
})












