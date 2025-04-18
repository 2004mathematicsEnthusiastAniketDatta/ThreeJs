// import * as THREE from 'three';  -> for vite like bundler and reactjs or other libraries and frameworks

// const scene = new THREE.Scene(); -> Scene

// scene is the main container for all objects, lights, and cameras in a 3D scene.


//Camera -> PerspectiveCamera // The camera defines the viewpoint from which the scene is rendered. In this case, a perspective camera is used, which simulates the way the human eye sees the world. It has a field of view (FOV), aspect ratio, and near/far clipping planes.
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//new THREE.PerspectiveCamera( field of view , aspect, near, far ) -> PerspectiveCamera


// Camera is the viewpoint from which the scene is rendered. In this case, a perspective camera is used, which simulates the way the human eye sees the world. It has a field of view (FOV), aspect ratio, and near/far clipping planes.

//PerspectiveCamera is a type of camera that simulates the way the human eye sees the world. It has a field of view (FOV), aspect ratio, and near/far clipping planes.

// THREE.PerspectiveCamera( fov: 75, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000 );

// canvas selection from DOM



// const canvas = document.querySelector('#draw');

// renderer : // The renderer is responsible for rendering the scene from the perspective of the camera. In this case, a WebGL renderer is used, which utilizes the GPU for rendering.

// const renderer = new THREE.WebGLRenderer({ canvas: canvas}); 
//WebGL renderer is a type of renderer that uses the GPU to render 3D graphics. It is the most common renderer used in Three.js applications.
// renderer.setSize( window.innerWidth, window.innerHeight ); // Set the size of the renderer to match the window size.
// renderer.setPixelRatio( window.devicePixelRatio ); // Set the pixel ratio to match the device's pixel ratio.
// document.body.appendChild( renderer.domElement ); // Append the renderer's DOM element to the body of the document.

//Geometry -> BoxGeometry // The geometry defines the shape of the object. 
// 
// In this case, a box geometry is created with dimensions 1x1x1.

// const geometry = new THREE.BoxGeometry( l:1, b:1,h: 1 );

//Material: // The material defines the appearance of the object. In this case, a basic material with a green color is created.

// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); //// Mesh: // The mesh combines the geometry and material to create a 3D object. In this case, a mesh is created using the box geometry and basic material.

// const cube = new THREE.Mesh( geometry, material ); // Mesh is a 3D object that combines geometry and material. In this case, a mesh is created using the box geometry and basic material.
// scene.add( cube ); // Add the cube mesh to the scene.


//camera position : // The camera position is set to (0, 0, 5), which means the camera is positioned 5 units away from the origin along the z-axis.

// camera.position.z = 5;

//animate function: // The animate function is called repeatedly to update the scene and render it. In this case, the cube is rotated slightly on each frame. 

// function animate() {
//     requestAnimationFrame( animate ); // requestAnimationFrame is a method that tells the browser to perform an animation and calls the specified function before the next repaint.
//     window.requestAnimationFrame( animate );

//     renderer.render( scene, camera ); // render is a method that renders the scene from the perspective of the camera. In this case, the scene is rendered using the WebGL renderer.
//     renderer.setAnimationLoop( animate ); // setAnimationLoop is a method that sets the animation loop for the renderer. In this case, the animate function is called repeatedly to update the scene and render it.
   //rotatiom of cube

//     cube.rotation.x += 0.1;
//     cube.rotation.y += 0.1;
//   }
// animate();

//scale of cube

// cube.scale.set(2, 2, 2); // Set the scale of the cube to 2x2x2.
// cube.scale.set(1, 1, 1); // Set the scale of the cube to 1x1x1.
// cube.scale.set(0.5, 0.5, 0.5); // Set the scale of the cube to 0.5x0.5x0.5.
// cube.scale.set(0.1, 0.1, 0.1); // Set the scale of the cube to 0.1x0.1x0.1.
// cube.scale.set(0.01, 0.01, 0.01); // Set the scale of the cube to 0.01x0.01x0.01.

