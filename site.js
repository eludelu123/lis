slide1();

function slide1(){
    document.getElementById('imag').src="img/frango.jpeg";
    setTimeout("slide2()", 1000)
    }
    function slide2(){
    document.getElementById('imag').src="img/calabresa.png";
    setTimeout("slide3()", 1000)
    }
    function slide3(){
    document.getElementById('imag').src="teste3.jpg";
    setTimeout("slide1()", 1000)
    }