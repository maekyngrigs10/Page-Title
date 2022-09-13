
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



$('.e1b1').click(function(){
    $('.intro').hide();
    $('.e1b1').hide();
    $('.e1b2').hide();
    $('.e2b1').show();
    $('.e2b2').show();
    $('.head').text('Oh did you cry, alright');
    $('.host').text('Well they seem pretty stressed out now that you decided to cry but look on bright side the lights are out');
    $('.body1').text('What will you do, finally shut up or try to get some more attention for that growing');
    $('.change').show();
});

$('.continue').click(function(){
    $('.nogerald').show();
});

