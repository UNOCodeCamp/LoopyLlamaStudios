hud = new Object();


hud.draw = function()
{
	hud.drawText("Score: " +game.score, 32, 32, "left", 24)
	hud.drawText("Time" + ~~game.timer, viewport.width - 32, 32, "right")
};

hud.drawText = function(text, x, y, align, size)
{
	// #Score
	renderer.ctx.fillStyle = "rgb(250, 250, 250)"; //set to white
	renderer.ctx.font =  size + "px Helvetica";  //set the font
	renderer.ctx.textAlign = align; //set to left
	renderer.ctx.textBaseline = "top"; //set to top
	renderer.ctx.fillText(text, x, y); //set the contents
};


hud.drawGameOver = function()
{
	//fade viewport
	renderer.ctx.fillStyle = "rgba(255,255,255,.01)";
	renderer.ctx.fillRect(0,0,viewport.width, viewport.height);
	//print Game Over
	renderer.ctx.fillStyle = "rgb(255, 0, 0)"; //set to white
	renderer.ctx.font = "42px Helvetica";  //set the font
	renderer.ctx.textAlign = "center"; //set to left
	renderer.ctx.textBaseline = "center"; //set to top
	renderer.ctx.fillText("Game Over!", scene.width*16, scene.height*16); //set the contents

	renderer.canvas.style="cursor: auto;";
}
