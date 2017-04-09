
function Sphere(radius, segments, rings) {

	this.radius = radius;
	this.segments = segments;
	this.rings = rings;

	this.sphereGeometry = new THREE.SphereGeometry(
		this.radius,
		this.segments,
		this.rings
	);

	this.sphereMaterial = new THREE.MeshLambertMaterial(

		{
			color: 0xCC0000,
			wireframe: true
		}
	);

	this.sphere = new THREE.Mesh(

		this.sphereGeometry,
		this.sphereMaterial

	);

	_context = this

};

Sphere.prototype.position =  function(x, y, z) {

	_context.sphere.position.x = x;
	_context.sphere.position.y = y;
	_context.sphere.position.z = z;

};
