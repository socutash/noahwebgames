
function GameSpace(renderwidth, renderheight) {

	this.idth = renderwidth;
	this.height = renderheight;

	this.container = document.body;

	this.renderer = new THREE.WebGLRenderer();
	this.scene = new THREE.Scene();

	console.log("Hey: " + this.scene);

	_appcontext = this

}

// Wonky that renderer needs to be told about both the sceene *and( the camera
// Make sure there aren't cases where you attach more than one camera.
GameSpace.prototype._findCameraInScene = function() {

	var camera = null;

	var length = _appcontext.scene.children.length 

	for (var i = 0; i < length; i++) {

		if (_appcontext.scene.children[i].type.match("Camera")) {

			camera = _appcontext.scene.children[i];

		};

	};

	console.log(camera)

	return camera 
}

GameSpace.prototype.add = function(anObject) {

	console.log(_appcontext.scene)

	_appcontext.scene.add(anObject);

}

GameSpace.prototype.show = function() {

	_appcontext.renderer.setSize(_appcontext.width, _appcontext.height)
	_appcontext.container.appendChild(_appcontext.renderer.domElement)

}

GameSpace.prototype.go = function() {

	_appcontext.renderer.render(_appcontext.scene, _appcontext._findCameraInScene());

	//function update() {
	
	//	this.renderer.render(this.scene, this._findCameraInScene())

	//	requestAnimationFrame(update)

	//}

	requestAnimationFrame(_appcontext.go);

}
