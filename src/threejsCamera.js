
function Camera(renderwidth, renderheight) {

	var viewAngle = 45;
	var aspect = renderwidth/renderheight;
	var near = 0.1;
	var far = 10000;

	const camera =
    		new THREE.PerspectiveCamera(
        	viewAngle,
        	aspect,
        	near,
        	far
    		);

}

Camera.prototype.aspect = function(aspect) {

	this.camera.aspect = aspect;

}
