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
    }

    onEnter() {
        
        // background settings
        let street1bg = this.add.image(0,0,'street1')
        street1bg.setOrigin(0);
        street1bg.setDepth(0);
        street1bg.setScale(2.85,2);

        // alfred settings
        let alfred = this.add.image(300, 800,'alfred')
            .setInteractive()
            .on('pointerover', () => this.showMessage("That's Alfred (you), he's pretty chill."))
            .on('pointerdown', () => {
                this.showMessage("Please don't poke him, he'll cry (not really but you get the idea).");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });
        alfred.setScale(0.7)
        
        // first trash can settings
        let trash_can = this.add.image(600, 750, 'trash_can')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Trash can. What else is it gonna be?")
            })
            .on('pointerdown', () => {
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
            this.showMessage("You check the trash. Wait, car keys?! Well, that's convenient.");
            this.gainItem('Car keys');
            this.tweens.add({
                targets: t,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => key.destroy()
            });
        })
        trash_can3.setScale(0.2)


        let arrow = this.add.image(1300, 500, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Second Street")
        })
        .on('pointerdown', () => {
            this.gotoScene('street2')
        })
        arrow.setScale(0.4)

        let arrow2 = this.add.image(1300, 900, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To Third Street");
        })
        .on('pointerdown', () => {
            this.gotoScene('street3');
        })
        arrow2.setScale(0.4)
        arrow2.angle = 45


        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Street2 extends AdventureScene {
    constructor() {
        super("street2", "Second Street");
    }

    preload() {
        this.load.image('alfred', "images/alfred.png");
        this.load.image('street2', "images/street2.png");
        this.load.image('arrow', "images/arrow.png");
    }
    onEnter() {

        let street2bg = this.add.image(0,0,'street2')
        street2bg.setOrigin(0);
        street2bg.setDepth(0);
        street2bg.setScale(2.85,2);


        let arrow = this.add.image(150, 500, 'arrow')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("To First Street")
        })
        .on('pointerdown', () => {
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
            this.gotoScene('store');
        })
        arrow3.setScale(0.4)

        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('street1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
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
    }
    onEnter() {

        let street3bg = this.add.image(0,0,'street3')
        street3bg.setOrigin(0);
        street3bg.setDepth(0);
        street3bg.setScale(2.85,2);
    }
}
//Intro scene: completed
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(this.game.renderer.width / 2.8, this.game.renderer.height / 2, "Are you ready?").setFontSize(70).setFontFamily('Courier New');
        this.add.text(this.game.renderer.width / 3.5, this.game.renderer.height * 0.6,"Click to begin your adventure!").setFontSize(50).setFontFamily('Courier New');
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('street1'));
        });
    }
}

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

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(this.game.renderer.width / 2.8, this.game.renderer.height / 2, "Congrats, you escaped!")
        .setFontSize(70)
        .setFontFamily('Courier New');
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
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
    scene: [Intro, Street1, Street2, Street3, Outro],
    title: "Adventure Game",
});

