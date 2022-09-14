
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

$('.e1b2').click(function(){
    $('.intro').hide();
    $('.e1b1').hide();
    $('.e1b2').hide();
    $('.e3b1').show();
    $('.e3b2').show();
    $('.head').text('Gimme gimme food');
    $('.host').text('They realized how much food you must be wanting, you got a 5 course buffet, eat away young child');
    $('.body1').text('Now that you are happy, will you sleep or get some more of that food, broski?');
    $('.change').show();
});

$('.e2b1').click(function(){
    $('.e2b1').hide();
    $('.e2b2').hide();
    $('.phase2').show()
    $('.head').text('Quiet as a mouse');
    $('.host').text('Now that you finally decided to shut your mouth, your parents seem more relaxed, and fall into a nice peaceful sleep');
    $('.body1').text('You slept until the next phase of your life, KINDERGARTEN, YAYYAYAYAYYA');
    $('.change').show();
});

$('.e2b2').click(function(){
    $('.e2b1').hide();
    $('.e2b2').hide();
    $('.phase2').show()
    $('.head').text('In ya go');
    $('.host').text('The parents needed sleep, so they put you in the crib and that is where you stayed, for a long time');
    $('.body1').text('You slept until the next phase of your life, KINDERGARTEN, YAYYAYAYAYYA');
    $('.change').show();
});

$('.e3b1').click(function(){
    $('.e3b1').hide();
    $('.e3b2').hide();
    $('.phase2').show()
    $('.head').text('In ya go');
    $('.host').text('The parents needed sleep, so they put you in the crib and that is where you stayed, for a long time');
    $('.body1').text('You slept until the next phase of your life, KINDERGARTEN, YAYYAYAYAYYA');
    $('.change').show();
});

$('.e3b2').click(function(){
    $('.e3b1').hide();
    $('.e3b2').hide();
    $('.phase2').show()
    $('.head').text('Food please');
    $('.host').text('After you were fed,even more, the parents needed sleep, so they put you in the crib and that is where you stayed, for a long time');
    $('.body1').text('You slept until the next phase of your life, KINDERGARTEN, YAYYAYAYAYYA');
    $('.change').show();
});

$('.phase2').click(function(){
    $('.e4b1').show();
    $('.e4b2').show();
    $('.phase2').hide()
    $('.change').hide();
});

$('.e4b1').click(function(){
    $('.e4b1').hide();
    $('.e4b2').hide();
    $('.e5b1').show();
    $('.e5b2').show();
    $('.head').text('Read, reed, Spencer Reid');
    $('.host').text('Well arent you oh, so smart, reading them books, well now you are smarter than everybody');
    $('.body1').text('Being at the top of your 5th grade class comes with big decisions, make cooler friends, or have no friends and be a super cool lone wolf?');
    $('.change').show();
});

$('.e4b2').click(function(){
    $('.e4b1').hide();
    $('.e4b2').hide();
    $('.e11b1').show();
    $('.e11b2').show();
    $('.head').text('I said get back, get . . . back');
    $('.host').text('Hitting kids with sticks now are we, well welcome to loser town, population: you');
    $('.body1').text('As you go on to your next stage in life you have to make decisions, be cooler or be hotter?');
    $('.change').show();
});

$('.e5b1').click(function(){
    $('.e4b1').hide();
    $('.e4b2').hide();
    $('.phase3').show();
    $('.head').text('They didnt snitch, but got ditched');
    $('.host').text('One group of super cool friends coming right up, on to middle school now');
    $('.body1').text('What will happen when you take the next step in your life, I guess we are about to find out, huh');
    $('.change').show();
});

$('.e5b2').click(function(){
    $('.e5b1').hide();
    $('.e5b2').hide();
    $('.phase3').show();
    $('.head').text('Well aint that something');
    $('.host').text('Lone wolf route is definitely an interesting choice, but it is definitely fitting');
    $('.body1').text('Time to move on with life, to Middle School you go . . .');
    $('.change').show();
});

$('.phase3').click(function(){
    $('.phase3').hide();
    $('.head').text('Well aint that something');
    $('.host').text('Lone wolf route is definitely an interesting choice, but it is definitely fitting');
    $('.body1').text('Time to move on with life, to Middle School you go . . .');
    $('.change').show();
});

$('.continue').click(function(){
    $('.nogerald').show();
});

