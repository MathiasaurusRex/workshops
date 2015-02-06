window.onload = function() {

  // Set up some variables and add a mousemove handler to the page
  var mouseX = 0;                                               // Mouse X pos relative to window centre
  var mouseY = 0;                                               // Mouse Y pos relative to window centre
  var mouseZ = 0;                                                
  var windowCentreX = window.innerWidth / 2;                    // Window centre (X pos)
  var windowCentreY = window.innerHeight / 2;                   // Window centre (Y pos)
  var WebGLSupported = isWebGLSupported();                      // Check for WebGL support

  document.addEventListener( 'mousemove', function( event ) {

    // Update mouseX and mouseY based on the new mouse X and Y positions
    mouseX = ( event.clientX - windowCentreX );
  }, false );

  // Create the renderer and add it to the page's body element
  var renderer = WebGLSupported ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
  renderer.setSize( window.innerWidth, 600 );
  document.body.appendChild( renderer.domElement );

  // Create the scene to hold the object
  var scene = new THREE.Scene();

  // Create the camera
  var camera = new THREE.Camera(
      35,                       // Field of view
      window.innerWidth / 600,  // Aspect ratio
      .1,                       // Near plane distance
      10000                     // Far plane distance
  );

  // Position the camera
  camera.position.set( 15, -5, 15 );

  // Add the lights

  var light = new THREE.PointLight( 0xffffff, .4 );
  light.position.set( 10, 10, 10 );
  scene.addLight( light );

  ambientLight = new THREE.AmbientLight( 0xbbbbbb );
  scene.addLight( ambientLight );

  // Create the materials

  var materialClass = WebGLSupported ? THREE.MeshLambertMaterial : THREE.MeshBasicMaterial;
  var darkGrey =  new materialClass( { color: 0x333333 } );
  var cabinetCover = new materialClass( { color: 0xffffff, map: THREE.ImageUtils.loadTexture( 'assets/img/cabinet-front.png' ) } );
  var cabinetLeftRight = new materialClass( { color: 0xffffff, map: THREE.ImageUtils.loadTexture( 'assets/img/cabinet-left-right.png' ) } );
  var cabinetTopBottom = new materialClass( { color: 0xffffff, map: THREE.ImageUtils.loadTexture( 'assets/img/cabinet-top-bottom.png' ) } );


  var neptune = new materialClass( { color: 0xffffff, map: THREE.ImageUtils.loadTexture( 'assets/img/neptunemap.jpg' ) } );
  var jupiter = new materialClass( { color: 0xffffff, map: THREE.ImageUtils.loadTexture( 'assets/img/jupiter.jpg' ) } );
  
  var materials = [
    //Basic Material Assigned to all sides
    //darkGrey, darkGrey, darkGrey, darkGrey, darkGrey, darkGrey

    // Textures applied to left, right, top, bottom, front, and back. It also stretches each material so it fills the entire face.
    cabinetLeftRight,          // Left side
    cabinetLeftRight,          // Right side
    cabinetTopBottom,          // Top side
    cabinetTopBottom,          // Bottom side
    cabinetCover,              // Front side
    cabinetCover               // Back side
  ];

  // Create the door and add it to the scene
  var door =  new THREE.Mesh( new THREE.CubeGeometry( 7, 12, .5, 4, 4, 1, materials ), new THREE.MeshFaceMaterial() );

  //CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
  // var geometry2 = new THREE.CylinderGeometry( 3, 5, 5, 5 );
  // var material2 = new THREE.MeshBasicMaterial( {color: 0x333333} );
  // var door = new THREE.Mesh( geometry2, material2 );
  

  // var geometry3 = new THREE.SphereGeometry( 2, 32, 32 );
  // var material3 = new THREE.MeshBasicMaterial( {color: 0x333333} );
  // var door = new THREE.Mesh( geometry3, material3 );




  scene.addChild( door );

  // Begin the animation
  animate();


  /*
    Animate a frame
  */

  function animate() {

    // Rotate the door based on the current mouse position
    door.rotation.y = mouseX * 0.005;
    door.rotation.x = mouseY * 0.005;
    door.rotation.z = mouseZ * 0.005;

    // Render the frame
    renderer.render( scene, camera );

    // Keep the animation going
    requestAnimFrame( animate );
  }


}

/*
  Check if the browser supports WebGL
  Adapted from http://doesmybrowsersupportwebgl.com/
*/

function isWebGLSupported() {

  var cvs = document.createElement('canvas');
  var contextNames = ["webgl","experimental-webgl","moz-webgl","webkit-3d"];
  var ctx;

  if ( navigator.userAgent.indexOf("MSIE") >= 0 ) {
    try {
      ctx = WebGLHelper.CreateGLContext(cvs, 'canvas');
    } catch(e) {}
  } else {
    for ( var i = 0; i < contextNames.length; i++ ) {
      try {
        ctx = cvs.getContext(contextNames[i]);
        if ( ctx ) break;
      } catch(e){}
    }
  }

  if ( ctx ) return true;
  return false;
}