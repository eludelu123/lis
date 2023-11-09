slide1();

function slide1(){
    document.getElementById('imag').src="frango.png";
    setTimeout("slide2()", 1000)
    }
    function slide2(){
    document.getElementById('imag').src="calabresa.png";
    setTimeout("slide3()", 1000)
    }
    function slide3(){
    document.getElementById('imag').src="fundo.jpg";
    setTimeout("slide1()", 1000)
    }
