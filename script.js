import "/style.css"
// import * as THREE from "three"
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
// import {FlakesTexture} from "three/examples/jsm/textures/FlakesTexture"
// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
// import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";

// let renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(700,500);
// document.querySelector(".glbCont").appendChild(renderer.domElement);

// let texture = new THREE.CanvasTexture(new FlakesTexture())
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;

// const scene = new THREE.Scene();

// let camera = new THREE.PerspectiveCamera(
//     45,
//     window.innerWidth/window.innerHeight,
//     0.1,
//     1000
// )
// camera.position.set(-5,-2,-7)
// const orbit = new OrbitControls(camera,renderer.domElement);
// orbit.update();

// const ambientLight = new THREE.AmbientLight(0xffffff,1);
// scene.add(ambientLight);

// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath("/draco/");
// const gltfLoader = new GLTFLoader();
// gltfLoader.setDRACOLoader(dracoLoader)

// let boxGeom = new THREE.BoxGeometry(10,10);
// let boxMat = new THREE.MeshBasicMaterial({color: 0xff0000})
// let box = new THREE.Mesh(boxGeom,boxMat)
// scene.add(box)

// let example = new THREE.Object3D();
// gltfLoader.load("/free/scene.gltf" , (gltfScene)=>{
//     example = gltfScene.scene
//     example.position.y = -0.1
//     example.scale.set(0.5,0.5,0.5)
//     scene.add(example);
// })

// function animate()
// {
//     renderer.render(scene,camera);
// }

// renderer.setAnimationLoop(animate);