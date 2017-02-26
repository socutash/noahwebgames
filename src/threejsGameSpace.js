
function GameSpace(renderwidth, renderheight) {

	this.width = renderwidth;
	this.height = renderheight;

	const this.container = document.body

	const this.renderer = new THREE.WebGLRenderer()
	const this.scene = new THREE.Scene()

	console.log("Hey: " + this.scene)

}

GameSpace.prototype.add = function(anObject) {

	console.log(this.scene)

	this.scene.add(anObject);

}

GameSpace.prototype.show = function() {

	this.renderer.setSize(this.width, this.height)
	this.container.appendChild(this.renderer.domElement)

}
