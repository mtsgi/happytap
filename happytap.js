class Game{
    static init() {
        Game.active = true;
        $('#p1 h3').text(Game.p1);
        $('#p2 h3').text(Game.p2);
        Game.countdown();
    }

    static countdown() {
        $('aside').text(Game.countremain);
        Game.countremain -= 1;
        if( Game.countremain < 0 ){
            Game.start();
        }
        else setTimeout(Game.countdown, 1000);
    }

    static start() {
        $('aside').hide();
        $('#p1').off().on(Game.event, () => {
            Game.p1 += 1;
            if( Game.timeremain <= 2 ) $('#p1 h3').text('???');
            else $('#p1 h3').text(Game.p1);
        });
        $('#p2').off().on(Game.event, () => {
            Game.p2 += 1;
            if( Game.timeremain <= 2 ) $('#p2 h3').text('???');
            else $('#p2 h3').text(Game.p2);
        });
        Game.timecount();
    }

    static timecount() {
        $('header').text(Game.timeremain);
        Game.timeremain -= 1;
        if( Game.timeremain == 2 ){
            $('#p1 h3').text('???');
            $('#p2 h3').text('???');
        }
        if( Game.timeremain < 0 ) Game.end();
        else setTimeout(Game.timecount, 1000);
    }

    static end() {
        alert('Finish');
        $('#p1').off();
        $('#p2').off();
        $('#p1 h3').text(Game.p1);
        $('#p2 h3').text(Game.p2);
        $('aside').show().text('Click to Restart');
        Game.countremain = 3;
        Game.timeremain = 10;
        Game.p1 = 0;
        Game.p2 = 0;
        Game.active = false;
    }
}

Game.countremain = 3;
Game.timeremain = 10;
Game.p1 = 0;
Game.p2 = 0;
Game.event = null;

$('aside').on('touchstart', () => {
    if( !Game.active ){
        Game.event = 'touchstart';
        Game.init();
    }
});


$('aside').on('mousedown', () => {
    if( !Game.active ){
        Game.event = 'mousedown';
        Game.init();
    }
});
