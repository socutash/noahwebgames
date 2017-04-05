
function GameSpace(renderwidth, renderheight) {

	this.width = renderwidth;
	this.height = renderheight;

	this.container = document.body;

	this.renderer = new THREE.WebGLRenderer();
	this.scene = new THREE.Scene();
	this.light = null;
	this.myCamera = null;

	_appcontext = this;

	this._setDefaultLight()

	console.log("Hey: " + this.scene);

}

GameSpace.prototype._setDefaultLight = function() {

	_appcontext.light = new THREE.AmbientLight(0xffffff, 0.3);
	_appcontext.add(_appcontext.light);

}

// Wonky that renderer needs to be told about both the scene *and* the camera
// Make sure there aren't cases where you attach more than one camera.
GameSpace.prototype._findCameraInScene = function() {

	var camera = null;

	var length = _appcontext.scene.children.length 

	for (var i = 0; i < length; i++) {

		console.log(_appcontext.scene.children[i].type);

		if (_appcontext.scene.children[i].type.match("Camera")) {

			console.log("Found a camera.")

			camera = _appcontext.scene.children[i];

		};

	};

	console.log(camera)

	_appcontext.myCamera = camera 
}

GameSpace.prototype.add = function(anObject) {

	console.log("Adding an object to the scene: " + _appcontext.scene)

	_appcontext.scene.add(anObject);

}

GameSpace.prototype.show = function() {

	_appcontext.renderer.setSize(_appcontext.width, _appcontext.height)
	_appcontext.container.appendChild(_appcontext.renderer.domElement)

}

GameSpace.prototype.go = function() {

	// Get the camera and set a light
	_appcontext._findCameraInScene()

	console.log("Here is the camera I found: " + _appcontext.myCamera)

	console.log("Here is my renderer, right before I start rendering: " + _appcontext.renderer)

	//_appcontext.renderer.render(_appcontext.scene, _appcontext.myCamera);

	function update() {

		console.log("updating?")

		_appcontext.renderer.render(_appcontext.scene, _appcontext.myCamera)

		requestAnimationFrame(update)

	}

	update()

	//requestAnimationFrame(_appcontext.go);

}
