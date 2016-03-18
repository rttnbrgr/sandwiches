function videoHandler() {
	var videoToggle = $('.action--video');
	var videoCloseBtn = $('.video--close');
	var videoWrapper = $('.video__wrapper');

	// video toggle
	$(videoToggle).click( function() {				
		console.log('toggle video');
		videoWrapper.toggleClass('video--hidden');		
		blackOutToggle();

	});

	// close btn, 'x'
	$(videoCloseBtn).click( function() {
		videoWrapper.toggleClass('video--hidden');
		// blackOut();
		changeTheme();
	});
		
}

videoHandler(); 

// pikc random number
// var numberOfThemes = 3;
var themes = [ 'rasta', 'usa', 'rainbow' ]
// var themes = [ 'rasta', 'usa' ]
// console.log( themes.length );


// pick a random interger up to, not including the highest in the range
function randomInteger(range){
	return Math.floor( (Math.random() * range) );
}

function changeTheme() {
	
	var $body = $('body')[0];
	var numberOfThemes = themes.length;
	// console.log('number of themes = ' + numberOfThemes);
	
	// var randomThemeNumber = randomInteger(numberOfThemes);
	// console.log('our random theme number is ' + randomThemeNumber);

	// var newTheme = themes[randomThemeNumber];
	// console.log('our new theme will be ' + newTheme);

	var currentTheme = $body.dataset.theme;
	console.log('our current theme is ' + currentTheme);

	// if ( currentTheme === newTheme ){
	// 	console.log('SAME THEME :|')
		
	// 	// try again
	// 	do {
			
	// 		console.log('inside while')
	// 		var randomThemeNumber = randomInteger(numberOfThemes);
	// 		var newTheme = themes[randomThemeNumber];
	// 		console.log('our new theme will be ' + newTheme);

	// 	} while ( currentTheme === newTheme );

	// } else {
	// 	$body.dataset.theme = newTheme;
	// 	blackOut();
	// }

	// only while loop
	do {
			
			console.log('inside while')
			
			var randomThemeNumber = randomInteger(numberOfThemes);
			var newTheme = themes[randomThemeNumber];
			console.log('our new theme will be ' + newTheme);

	} while ( currentTheme === newTheme );

	$body.dataset.theme = newTheme;
	blackOutToggle();
	
}

function blackOut(){
	// $('body')[0].dataset.blackout = true;
	console.log('blackout');
	$('body').toggleClass('blackout');	
}

function blackOutToggle(){
	console.log('blackout toggle');
	$('body').toggleClass('blackout');
}

// why>?
function blackOutIf() {
	var $body = $('body');
	// var bodyBlackout? = $body.hasClass('blackout');
	// ????
	// bodyBlackout ?  : $body.toggleClass('blackout'); 
}


// random();

// test the loop format
do {
	console.log('doing');
} while ( false );

