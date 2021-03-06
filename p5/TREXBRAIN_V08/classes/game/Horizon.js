function Horizon(game) {

	this.game = game;

	this.sprite1 = this.game.sprites['horizon'];
	this.x1 = 0;
	this.y1 = 130;

	this.sprite2 = this.game.sprites['horizon'];
	this.x2 = 1200;
	this.y2 = 130;
}


Horizon.prototype.update = function(speed) {

	if (this.x1 <= -1800)
		this.x1 = canvas.width - speed;
	
	if(this.x2 <= -1800)
		this.x2 = canvas.width - speed;

	this.x1 -= speed;
	this.x2 -= speed;
};


Horizon.prototype.show = function() {
	
	context.drawImage(this.sprite1, this.x1, this.y1);
	context.drawImage(this.sprite2, this.x2, this.y2);
};

