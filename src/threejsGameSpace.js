
function GameSpace(renderwidth, renderheight) {

	this.idth = renderwidth;
	this.height = renderheight;

	this.container = document.body;

	this.renderer = new THREE.WebGLRenderer();
	this.scene = new THREE.Scene();

	console.log("Hey: " + this.scene);

}

// Wonky that renderer needs to be told about both the sceene *and( the camera
// Make sure there aren't cases where you attach more than one camera.
GameSpace.prototype._findCameraInScene = function() {

	var camera = null;

	var length = this.scene.children.length 

	for (var i = 0; i < length; i++) {

		if (this.scene.children[i].type.match("Camera")) {

			camera = this.scene.children[i];

		};

	};

	return camera 
}

GameSpace.prototype.add = function(anObject) {

	console.log(this.scene)

	this.scene.add(anObject);

}

GameSpace.prototype.show = function() {

	this.renderer.setSize(this.width, this.height)
	this.container.appendChild(this.renderer.domElement)

}

GameSpace.prototype.go = function() {

	this.renderer.render(this.scene, this._findCameraInScene())

}
