/* 
  HTML5 AUDIO FORMATS
  mp3, mp4, ogg, opus, wav 
*/

soundManager.setup({

  // location: path to SWF files, as needed (SWF file name is appended later.)
  url: 'js/vendor/swf/soundmanager2.swf',

  // use soundmanager2-nodebug-jsmin.js, or disable debug mode (enabled by default) after development/testing
  debugMode: true,

  // good to go: the onready() callback
  onready: function() {
    // test on ready
    console.log('sm2 ready! TO GO XXX');

    
    /* 
    LOAD ALL THE SOUNDS
    */

    // SM2 has started - now you can create and play sounds!
    var mySound1 = soundManager.createSound({
      id: 'badSanta1', // optional: provide your own unique id
      url: '/audio/AMB_BD_1.mp3',
      onload: function() { 
        console.log('sound loaded!', this); 
      }
      // other options here..
    });

    var mySound2 = soundManager.createSound({
      id: 'badSanta2',
      url: '/audio/AMB_FTM2.mp3'
    });

    var mySound3 = soundManager.createSound({
      id: 'badSanta3',
      url: 'audio/AMB_HHCL.mp3',
      autoload: true
    });

    // mySound.play();

    /*
        PLAY A RANDOM SOUND
    */

    // sound play link
    var soundToggle = $('a.action--audio');
    
    
    soundToggle.click( function(event){
      event.preventDefault();
      console.log('fun');
      
      // mySound1.play();
      // soundManager.play('badSanta1');
      // soundManager.play('badSanta3');

      // pick random number
      var randomSound = randomInteger(3) + 1;
      console.log('randomSound = ' + randomSound);
      soundManager.play( 'badSanta' + randomSound);

    });

  },














  // optional: ontimeout() callback for handling start-up failure
  ontimeout: function() {

    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? No HTML5 audio support? Show an error, etc.?
    // See the flashblock demo when you want to start getting fancy.

  }

});

