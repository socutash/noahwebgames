
function GameSpace(renderwidth, renderheight) {

	this.width = renderwidth;
	this.height = renderheight;

	this.container = document.body;

	this.renderer = new THREE.WebGLRenderer();
	this.scene = new THREE.Scene();

	console.log("Hey: " + this.scene);

}

GameSpace.prototype.add = function(anObject) {

	console.log(this.scene)

	this.scene.add(anObject);

}

GameSpace.prototype.show = function() {

	this.renderer.setSize(this.width, this.height)
	this.container.appendChild(this.renderer.domElement)

}
