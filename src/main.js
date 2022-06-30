const config = {
   type: Phaser.WEBGL,
   pixelArt: true,
   dom: {
      createContainer: true
   },
  // width: 800,
   //height: 600,
   backgroundColor: "#2b9286",


   scale: {
      mode: Phaser.Scale.FIT,
      parent: 'game',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 900,
      height: 600
  },

   scene: [
      {
         preload: preload,
         create: create
      },
      loading,
      menu,
      wile
   ]
}
let game = new Phaser.Game(config);

function preload() {
   this.load.image("logo_m","assets/atlas/logo/Logo_Mi_Kcola.png");
   this.load.image("about_mi_kcola","assets/atlas/logo/about_mi_kcola.png");
}
function create() {
   
   this.scene.start("bootGame");
   
}