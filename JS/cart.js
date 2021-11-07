window.onload = function(){
    calculateCourse();
    cartValueChange();
    calculateTotal();
 }
 
 function calculateCourse() {
 
    //   Course Total Price Start
    const cartCoursePrice1 = document.getElementById('course-price1');
    const coursePrice1 = cartCoursePrice1.innerText;
    const courseNewPrice1 = parseInt(coursePrice1);
    // console.log(courseNewPrice1);
 
    const cartCoursePrice2 = document.getElementById('course-price2');
    const coursePrice2 = cartCoursePrice2.innerText;
    const courseNewPrice2 = parseInt(coursePrice2);
    // console.log(courseNewPrice2);
 
    const courseTotalPrice = courseNewPrice1 + courseNewPrice2;
    // console.log(courseTotalPrice);
 
    //   Course Total Price end
 
    //   Book Total Price start
 
    const cartBookPrice1 = document.getElementById('1cart2-total');
    const bookPrice1 = cartBookPrice1.innerText;
    const bookNewPrice1 = parseInt(bookPrice1);
    // console.log(bookNewPrice1)
 
    const cartBookPrice2 = document.getElementById('2cart2-total');
    const bookPrice2 = cartBookPrice2.innerText;
    const bookNewPrice2 = parseInt(bookPrice2);
    // console.log(bookNewPrice2)
 
    const cartBookPrice3 = document.getElementById('3cart2-total');
    const bookPrice3 = cartBookPrice3.innerText;
    const bookNewPrice3 = parseInt(bookPrice3);
    // console.log(bookNewPrice3)
 
    const bookTotalPrice = bookNewPrice1 + bookNewPrice2 + bookNewPrice3;
 
    // console.log(bookTotalPrice)
 
    const totalPrice = courseTotalPrice +  bookTotalPrice;
 
    // console.log(totalPrice);
 
    document.getElementById('totalPrice').innerText = totalPrice ;
 
 }
 
 function cartValueChange(number, isIncrease, cart1, cart2) {
 
    const cartValueCount = document.getElementById(number);
    const cartCount = parseInt(cartValueCount.value);
 
    let cartNewCount = cartCount;
    if (isIncrease == true) {
       cartNewCount = cartCount + 1;
    }
 
    else if (isIncrease == false && cartCount > 1) {
       cartNewCount = cartCount - 1;
    }
    cartValueCount.value = cartNewCount;
 
    //total
 
    const cartOldPrice = document.getElementById(cart1 + '-total');
    const cartPrice = cartOldPrice.innerText;
    const cartNewPrice = parseInt(cartPrice);
    let cartTotal = cartNewCount * cartNewPrice;
 
    // console.log(cartTotal)
    // console.log(cartNewCount)
 
    document.getElementById(cart2 + '-total').innerText = cartTotal;
 
    calculateCourse()
 }