// first street: complete
class Street1 extends AdventureScene {
    constructor() {
        super("street1", "First Street");
    }

    preload() {
        // loaded images
        this.load.image('alfred', "images/alfred.png");
        this.load.image('street1', "images/street1.png");
        this.load.image('trash_can', "images/trash_can.png");
        this.load.image('arrow', "images/arrow.png");
        this.load.audio('main', "audio/main_theme.mp3");
        this.load.audio('ding', "audio/ding_sound.mp3");
    }

    onEnter() {
        
        // background settings
        let street1bg = this.add.image(0,0,'street1')
        street1bg.setOrigin(0);
        street1bg.setDepth(0);
        street1bg.setScale(2.85,2);

        let bgtheme = this.sound.add("main")
        bgtheme.play();
        let ding = this.sound.add("ding");

        // alfred settings
        let alfred = this.add.image(300, 800,'alfred')
            .setInteractive()
            .on('pointerover', () => this.showMessage("That's Alfred (you), he's pretty chill."))
            .on('pointerdown', () => {
                ding.play()
                this.showMessage("Please don't poke him, he'll cry (not really but you get the idea).");
                
            });
        alfred.setScale(0.7)
        
        // first trash can settings
        let trash_can = this.add.image(600, 750, 'trash_can')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Trash can. What else is it gonna be?")
            })
            .on('pointerdown', () => {
                ding.play()
                this.showMessage("You check the trash. Nothing there, now you got your hands dirty. Nasty.");
            })
        trash_can.setScale(0.1)
        
        // second trash can settings
        let trash_can2 = this.add.image(1000, 900, 'trash_can')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Trash can. What else is it gonna be?")
        })
        .on('pointerdown', () => {
            ding.play()
            this.showMessage("You check the trash. Nothing there, now you got your hands dirty. Nasty.");
        })
        trash_can2.setScale(0.3)
        
        // third trash can settings
        let trash_can3 = this.add.image(750, 800, 'trash_can')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Trash can. What else is it gonna be?")
        })
        .on('pointerdown', () => {
            ding.play()
            this.showMessage("You check the trash. Wait, car keys?! Well, that's convenient.");
            this.gainItem('Car keys');
        })
        trash_can3.setScale(0.2)


        let arrow = this.add.image(1300, 500, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Second Street")
        })
        .on('pointerdown', () => {
            ding.play()
            bgtheme.stop()
            this.gotoScene('street2')
        })
        arrow.setScale(0.4)

        let arrow2 = this.add.image(1300, 900, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Third Street");
        })
        .on('pointerdown', () => {
            ding.play()
            bgtheme.stop()
            this.gotoScene('street3');
        })
        arrow2.setScale(0.4)
        arrow2.angle = 45
    }
}

// second street: complete
class Street2 extends AdventureScene {
    constructor() {
        super("street2", "Second Street");
    }

    preload() {
        this.load.image('alfred', "images/alfred.png");
        this.load.image('street2', "images/street2.png");
        this.load.image('arrow', "images/arrow.png");
        this.load.audio('main', "audio/main_theme.mp3");
        this.load.audio('ding', "audio/ding_sound.mp3");
    }
    onEnter() {

        let street2bg = this.add.image(0,0,'street2')
        street2bg.setOrigin(0);
        street2bg.setDepth(0);
        street2bg.setScale(2.85,2);

        let bgtheme = this.sound.add('main')
        bgtheme.play()
        let ding = this.sound.add('ding')


        let arrow = this.add.image(150, 500, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To First Street")
        })
        .on('pointerdown', () => {
            ding.play()
            bgtheme.stop()
            this.gotoScene('street1')
        })
        arrow.setScale(0.4)
        arrow.angle = 180

        let arrow2 = this.add.image(150, 900, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Third Street");
        })
        .on('pointerdown', () => {
            ding.play()
            bgtheme.stop()
            this.gotoScene('street3');
        })
        arrow2.setScale(0.4)
        arrow2.angle = 135

        let arrow3 = this.add.image(1300, 500, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Store");
        })
        .on('pointerdown', () => {
            ding.play()
            bgtheme.stop()
            this.gotoScene('store');
        })
        arrow3.setScale(0.4)

        let alfred = this.add.image(500, 850,'alfred')
            .setInteractive()
            .on('pointerover', () => this.showMessage("That's Alfred (you), he's pretty chill."))
            .on('pointerdown', () => {
                ding.play()
                this.showMessage("Please don't poke him, he'll cry (not really but you get the idea).");
            });
        alfred.setScale(0.7)
    }
}

class Street3 extends AdventureScene {
    constructor() {
        super("street3", "Third Street");
    }

    preload() {
        this.load.image('alfred', "images/alfred.png");
        this.load.image('street3', "images/street3.png");
        this.load.image('arrow', "images/arrow.png");
        this.load.image('car', "images/car.png");
        this.load.audio('main', "audio/main_theme.mp3");
        this.load.audio('ding', "audio/ding_sound.mp3");
    }
    onEnter() {

        let street3bg = this.add.image(0,0,'street3')
        street3bg.setOrigin(0);
        street3bg.setDepth(0);
        street3bg.setScale(2.85,2);

        let bgtheme = this.sound.add('main')
        bgtheme.play()
        let ding = this.sound.add('ding')

        let arrow = this.add.image(200, 200, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To First Street")
        })
        .on('pointerdown', () => {
            ding.play()
            bgtheme.stop()
            this.gotoScene('street1')
        })
        arrow.setScale(0.4)
        arrow.angle = 225

        let arrow2 = this.add.image(1200, 200, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Second Street");
        })
        .on('pointerdown', () => {
            ding.play()
            bgtheme.stop()
            this.gotoScene('street2');
        })
        arrow2.setScale(0.4)
        arrow2.angle = -45

        let car = this.add.image(900, 850, 'car')
        .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Car keys")) {
                    this.showMessage("The keys belong to this car.");
                } else {
                    this.showMessage("It's locked. Keys should be on one of the streets.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("Car keys")) {
                    if(this.hasItem("Gas tank")) {
                        this.loseItem("Car keys");
                        ding.play()
                        bgtheme.stop()
                        this.showMessage("It turned on!");
                        this.gotoScene('outro');
                    }
                    else {
                        ding.play()
                        this.showMessage("Car is not starting, needs gas. Great.");
                    }
                }
                else {
                    ding.play()
                    this.showMessage("You need the car keys to open the car.");
                }
            })
        car.setScale(0.8)

        let alfred = this.add.image(300, 850,'alfred')
            .setInteractive()
            .on('pointerover', () => this.showMessage("That's Alfred (you), he's pretty chill."))
            .on('pointerdown', () => {
                ding.play()
                this.showMessage("Please don't poke him, he'll cry (not really but you get the idea).");
            });
        alfred.setScale(0.7)
    }
}

class Store extends AdventureScene {
    constructor () {
        super("store", "Store");
    }
    
    preload() {
        this.load.image('alfred', "images/alfred.png");
        this.load.image('store', "images/store.png");
        this.load.image('arrow', "images/arrow.png");
        this.load.image('box', "images/box.png");
        this.load.image('door', "images/door.png");
        this.load.audio('main', "audio/main_theme.mp3");
        this.load.audio('ding', "audio/ding_sound.mp3");
    }
    onEnter() {
        let storebg = this.add.image(0,0,'store')
        storebg.setOrigin(0);
        storebg.setDepth(0);
        storebg.setScale(2.85,2);

        let bgtheme = this.sound.add('main')
        bgtheme.play()
        let ding = this.sound.add('ding')

        let arrow = this.add.image(1000, 1000, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Second Street")
        })
        .on('pointerdown', () => {
            ding.play()
            bgtheme.stop()
            this.gotoScene('street2')
        })
        arrow.setScale(0.4)
        arrow.angle = 90

        let arrow2 = this.add.image(800, 500, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Back Alley");
        })
        .on('pointerdown', () => {
            ding.play()
            bgtheme.stop()
            this.gotoScene('alley_behind_the_store');
        })
        arrow2.setScale(0.4)

        let door = this.add.image(1100, 530, 'door');
        door.setScale(0.4)

        let alfred = this.add.image(500, 800,'alfred')
        .setInteractive()
        .on('pointerover', () => this.showMessage("That's Alfred (you), he's pretty chill."))
        .on('pointerdown', () => {
            ding.play()
            this.showMessage("Please don't poke him, he'll cry (not really but you get the idea).");
        });
        alfred.setScale(0.7)
    
        // first box settings
        let box = this.add.image(400, 450, 'box')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A box. Open?")
            })
            .on('pointerdown', () => {
                ding.play()
                this.showMessage("Nothing there. Well, that's upsetting.");
            })
        box.setScale(0.5)
    
        // second box settings
        let box2 = this.add.image(1200, 800, 'box')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("A box. Open?")
        })
        .on('pointerdown', () => {
            ding.play()
            this.showMessage("Boxing gloves? Maybe they'll be useful later.");
            this.gainItem('Boxing gloves');
        })
        box2.setScale(0.5)
    
        // third box settings
        let box3 = this.add.image(750, 800, 'box')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("A box. Open?")
        })
        .on('pointerdown', () => {
            ding.play()
            this.showMessage("Nothing there. Well, that's upsetting.");
        })
        box3.setScale(0.5)
    }
}

// Alley: completed
class Alley extends AdventureScene {
    constructor () {
        super("alley_behind_the_store", "Alley Behind the Store");
    }

    preload() {
        this.load.image('alfred', "images/alfred.png");
        this.load.image('alley', "images/alley_behind_the_store.png");
        this.load.image('arrow', "images/arrow.png");
        this.load.image('garr', "images/garr.png");
        this.load.image('gas_tank', "images/gas_tank.png");
        this.load.audio('battle', "audio/battle_theme.mp3");
        this.load.audio('ding', "audio/ding_sound.mp3");
    }

    onEnter() {
        // background settings
        let alleybg = this.add.image(0,0,'alley')
        alleybg.setOrigin(0);
        alleybg.setDepth(0);
        alleybg.setScale(2.85,2);

        //audio settings
        let bgaudio = this.sound.add('battle')
        bgaudio.play()
        let ding = this.sound.add('ding')

        // assets settings
        let gastank = this.add.image(1000,900,'gas_tank')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Gas. Cars drink it...and the Garr.")
        })
        .on('pointerdown', () => {
            ding.play()
            this.gainItem('Gas tank');
            this.tweens.add({
                targets: gastank,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => gastank.destroy()
            })
        })
        gastank.setScale(0.4)

        let garr = this.add.image(1000, 900, 'garr')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("This is a Garr. Green, slimy, likes to drink gas, and smells musty. Ew.")
        })
        .on('pointerdown', () => {
            if (this.hasItem("Boxing gloves")) {
                ding.play()
                this.loseItem("Boxing gloves");
                this.showMessage("You punched it! Somehow that defeats it?");
                this.tweens.add({
                    targets: garr,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => garr.destroy()
                });
            }
            else {
                ding.play()
                this.showMessage("There's no way you can fight the Garr like that! You need a special item!");
            }
            
        })
        garr.setScale(0.7)

        let alfred = this.add.image(500, 850,'alfred')
        .setInteractive()
        .on('pointerover', () => this.showMessage("That's Alfred (you), he's pretty chill."))
        .on('pointerdown', () => {
            ding.play()
            this.showMessage("Please don't poke him, he'll cry (not really but you get the idea).");
        });
        alfred.setScale(0.7)

        let arrow = this.add.image(200, 100, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Store")
        })
        .on('pointerdown', () => {
            ding.play()
            bgaudio.stop()
            this.gotoScene('store')
        })
        arrow.setScale(0.4)
        arrow.angle = 180
    }
}
//Intro scene: completed
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {

        this.add.text(this.game.renderer.width / 2.8, this.game.renderer.height / 2, "Are you ready?")
        .setFontSize(70)
        .setFontFamily('Courier New');
        
        this.add.text(this.game.renderer.width / 3.1, this.game.renderer.height * 0.6,"Click to begin your adventure!")
        .setFontSize(40)
        .setFontFamily('Courier New');

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('loading_screen'));
        });
    }
}

// Loding screen: completed
class Loading_Screen extends Phaser.Scene{
    constructor() {
        super('loading_screen')
    }
    preload(){
        this.cameras.main.setBackgroundColor('#705335')
    }
    create() {
        this.cameras.main.fadeIn(1000);
        let square = this.add.rectangle(this.game.renderer.width / 1.7, this.game.renderer.height / 2.05,75,75, 0xc9bdbd)
        square.setStrokeStyle(6, 0x000000)
        this.add.tween({
            targets: square,
            duration: 2000,
            repeat: -1,
            angle: 360,
        })
        let txt = this.add.text(this.game.renderer.width / 3, this.game.renderer.height / 2.3,'Loading').setFontSize(100).setFontFamily('Impact');
        txt.setStroke('#000000',16);

        this.time.delayedCall(3000, () => {
            this.cameras.main.fadeOut(2000);
        });

        this.time.delayedCall(5000, () => this.scene.start('street1'));
    }
}

// Outro: completed
class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {

        this.add.text(this.game.renderer.width / 3.7, this.game.renderer.height / 2, 
        "Congrats, you escaped!")
        .setFontSize(70)
        .setFontFamily('Courier New');

        this.add.text(this.game.renderer.width / 3, this.game.renderer.height * 0.6, 
        "Click anywhere to start over!")
        .setFontSize(40)
        .setFontFamily('Courier New');

        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Loading_Screen, Street1, Street2, Street3, Store, Alley, Outro],
    title: "Adventure Game",
});

