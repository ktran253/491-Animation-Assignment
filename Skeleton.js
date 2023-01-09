class Skeleton {
	constructor(game) {
		this.game = game;
		// (spritesheet, XStart, YStart, width, height, frameCount, frameDuration)
		this.animator = new Animator(ASSET_MANAGER.getAsset("./Skeletonwalking.png"), 71, 0, 71, 75, 8, 0.1)
	};
	update() {

	};
	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
		//ctx.drawImage(ASSET_MANAGER.getAsset("./Skeletonwalking.png"), 0, 0);
	};
}