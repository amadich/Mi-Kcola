
// You can write more code here

/* START OF COMPILED CODE */

class wile extends Phaser.Scene {

	constructor() {
		super("wile");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// map
		const map = this.add.tilemap("map");
		map.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_1
		const map_1 = this.add.tilemap("map");
		map_1.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_2
		const map_2 = this.add.tilemap("map");
		map_2.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_3
		const map_3 = this.add.tilemap("map");
		map_3.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_4
		const map_4 = this.add.tilemap("map");
		map_4.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_5
		const map_5 = this.add.tilemap("map");
		map_5.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_6
		const map_6 = this.add.tilemap("map");
		map_6.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_7
		const map_7 = this.add.tilemap("map");
		map_7.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_8
		const map_8 = this.add.tilemap("map");
		map_8.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_9
		const map_9 = this.add.tilemap("map");
		map_9.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// map_10
		const map_10 = this.add.tilemap("map");
		map_10.addTilesetImage("Jungle_terrain", "Jungle_terrain");

		// sky_bg
		const sky_bg = this.add.rectangle(469, 318, 128, 128);
		sky_bg.scaleX = 8;
		sky_bg.scaleY = 6;
		sky_bg.isFilled = true;
		sky_bg.fillColor = 6212832;

		// bg_cloud6
		this.add.image(260, 165, "bg_cloud6");

		// bg_cloud2
		this.add.image(831, 190, "bg_cloud2");

		// bg_cloud01
		this.add.image(514, -26, "bg_cloud01");

		// bg_cloud5
		const bg_cloud5 = this.add.image(638, 288, "bg_cloud5");
		bg_cloud5.scaleX = 0.6;
		bg_cloud5.scaleY = 0.6;

		// grass_1
		map.createLayer("grass", ["Jungle_terrain"], 0, 0);

		// block_y_1
		map_1.createLayer("block_y", ["Jungle_terrain"], 0, 0);

		// sea_m_1
		map_2.createLayer("sea_m", ["Jungle_terrain"], 0, 0);

		// bg_tree_1
		map_3.createLayer("bg_tree", ["Jungle_terrain"], 0, 0);

		// bg2_tree_1
		map_4.createLayer("bg2_tree", ["Jungle_terrain"], 0, 0);

		// tree_1
		map_5.createLayer("tree", ["Jungle_terrain"], 0, 0);

		// item_tree_1
		map_6.createLayer("item_tree", ["Jungle_terrain"], 0, 0);

		// ston_1
		map_7.createLayer("ston", ["Jungle_terrain"], 0, 0);

		// sea_1
		map_8.createLayer("sea", ["Jungle_terrain"], 0, 0);

		// ob
		map_9.createLayer("ob2", ["Jungle_terrain"], 0, 0);

		// ob_1
		map_10.createLayer("ob", ["Jungle_terrain"], 0, 0);

		this.map = map;
		this.map_1 = map_1;
		this.map_2 = map_2;
		this.map_3 = map_3;
		this.map_4 = map_4;
		this.map_5 = map_5;
		this.map_6 = map_6;
		this.map_7 = map_7;
		this.map_8 = map_8;
		this.map_9 = map_9;
		this.map_10 = map_10;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	map;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_1;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_2;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_3;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_4;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_5;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_6;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_7;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_8;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_9;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_10;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

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

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
