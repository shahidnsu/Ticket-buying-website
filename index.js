let totalSumFirstClass = 0;
let totalSumEconomyClass= 0;
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

    totalSumFirstClass =   (150 *  seatNumber);
    classType.innerText = totalSumFirstClass;
}


else if (className === 'first' && isIncrease == false && seatNumber > 0)
{
    seatNumber = seatNumber - 1;
    
    document.getElementById(className + '-input').value = seatNumber;

   totalSum =  (100 *  seatNumber);
   classType.innerText = totalSumFirstClass;
}

else if (className === 'economy' && isIncrease == true)
{
    seatNumber = seatNumber + 1;
    
    document.getElementById(className + '-input').value = seatNumber;

   totalSumEconomyClass =  (100 *  seatNumber);
   classType.innerText = totalSumEconomyClass;
}




else if (className === 'economy' && isIncrease == false  && seatNumber > 0)
{
    seatNumber = seatNumber - 1;
    
    document.getElementById(className + '-input').value = seatNumber;

    totalSumEconomyClass = (100 *  seatNumber);
    console.log(totalSum1);
    classType.innerText = totalSumEconomyClass;
}

//let subtotal = 0;
//setting the values of subtotal, vat and total
let subtotal = totalSumFirstClass + totalSumEconomyClass;
document.getElementById('subtotal').innerHTML = subtotal;
let vat = subtotal * 0.1
document.getElementById('vat').innerHTML = vat;
total = subtotal + vat;
document.getElementById('total').innerHTML = total;


}

//hiding the content of the book now from
let bookNow = document.getElementById('bookNow');
bookNow.addEventListener("click", function()
{
   let show = document.getElementById('book');
   show.style.display ="block";
   console.log("hello")
   document.getElementById("mainPart").style.display ="none";
})












