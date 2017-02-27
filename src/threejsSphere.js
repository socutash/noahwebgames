
function Sphere(radius, segments, rings) {

	this.radius = radius;
	this.segments = sphere;
	this.rings = rings;

	this.sphereGeometry = new THREE.SphereGeometry(
		this.radius,
		this.segments,
		this.rings
	);

	this.sphereMaterial = new THREE.MeshLambertMaterial(

		{
			color: 0xCC0000;
		}
	)

	this.sphere = new THREE.Mesh(

		this.sphereGeometry,
		this.sphereMaterial

	);

}

