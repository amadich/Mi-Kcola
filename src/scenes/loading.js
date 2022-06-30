class loading extends Phaser.Scene {
   constructor() {
      super("bootGame");
   }
   preload() {
      this.input.setDefaultCursor('url(assets/atlas/pointer.png), pointer');
      let logo_m = this.add.image(400,100,"logo_m");
      let about_mi_kcola = this.add.image(400,450,"about_mi_kcola").setScale(.75);
      var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(240, 270, 320, 50);
            
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
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
                progressBar.fillRect(250, 280, 300 * value, 30);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });
            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });

            // loading ...
            this.load.pack("pack","assets/asset-pack.json");
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

      this.scene.start("menu");
   }

}