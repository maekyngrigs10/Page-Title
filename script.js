
$('.btn1').click(function(){
	$('.btn3').show();
    $('.btn4').show();
    $('.btn1').hide();
    $('.btn2').hide();
});
$('.btn2').click(function(){
    $('.btn3').show();
    $('.btn4').show();
    $('.btn1').hide();
    $('.btn2').hide();
});

$('.btn3').click(function(){
    $('.btn4').show();
    $('.btn5').show();
    $('.btn3').hide();
    
});

$('.btn5').click(function(){
    $('.secret').show();
    $('.btn5').hide();
    $('.btn4').hide();
    $('.doit').show();
});

$('.secret').click(function(){
    $('.gameintro').show();
    $('.buttons').hide();
    $('.secret').hide();
    $('.doit').hide();
});

$('.start').click(function(){
    $('.game').show();
    $('.gameintro').hide();
    $('.open').hide();
});

$('.talk1').click(function(){
    $('.talk2').hide();
    $('.talk1').hide();
});