export default ()=>{
    console.log("hello");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
        $('.navbar').css('background','red');
        } else {
        $('.navbar').css('background','transparent');
        }
        });
}