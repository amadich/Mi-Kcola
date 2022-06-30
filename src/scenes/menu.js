
// You can write more code here

/* START OF COMPILED CODE */

class menu extends Phaser.Scene {

	constructor() {
		super("menu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// desert
		const desert = this.add.image(362, 302, "desert");
		desert.scaleX = 0.3;
		desert.scaleY = 0.3;

		// logo_Mi_Kcola
		const logo_Mi_Kcola = this.add.image(450, -83, "logo_menu");

		// loading_run
		const loading_run = this.add.sprite(450, 428, "loading_run", 0);
		loading_run.scaleX = 2;
		loading_run.scaleY = 2;
		loading_run.tintTopLeft = 0;
		loading_run.tintTopRight = 598531;
		loading_run.tintBottomLeft = 1795;
		loading_run.tintBottomRight = 0;

		this.logo_Mi_Kcola = logo_Mi_Kcola;
		this.loading_run = loading_run;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	logo_Mi_Kcola;
	/** @type {Phaser.GameObjects.Sprite} */
	loading_run;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();
		this.tweens.add({
			targets: this.logo_Mi_Kcola,
			y: 150,
			ease: 'Power1',
			duration: 3000,
			yoyo: false,
			//repeat: 1,
	  });

	  this.loading_run.anims.play("load_run",true);




	  var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(300, 500, 320, 50);

            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            /*var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
				*/

            var percentText = this.make.text({
                x: width / 2 + 10,
                y: height / 2 - 5 + 230,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);

            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            assetText.setOrigin(0.5, 0.5);

            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(300, 510, 300 * value, 30);
            });

            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });
            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                //loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });

				// loading ...
            this.load.pack("pack1","assets/asset-pack_tiles.json");



	}

	create() {
		// Full screen Page
		var FKey = this.input.keyboard.addKey('F');

		FKey.on('down', function () {

			 if (this.scale.isFullscreen)
			 {
				  //button.setFrame(0);
				  this.scale.stopFullscreen();
			 }
			 else
			 {
				 // button.setFrame(1);
				  this.scale.startFullscreen();
			 }

		}, this);
		// End Full_Screen
		//this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("wile"));
		this.scene.start("wile")
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
