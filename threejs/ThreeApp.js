import * as THREE from "three";
import {
    OrbitControls
} from "three/examples/jsm/controls/OrbitControls";
// import * as shader from "./Shaders/Shader";
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Sketch {
    constructor(selector) {
        console.log("========>", selector);
        this.scene = new THREE.Scene();
        this.scene.background = null;
        this.container = selector;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer = new THREE.WebGLRenderer({
            alpha: true
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        // this.renderer.setClearColor('#242935', 1);
        this.renderer.outputEncoding = THREE.sRGBEncoding;

        this.container.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(
            100,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );

        const pointLight = new THREE.PointLight(0xffffff, 1.2)
        pointLight.position.x = -20
        pointLight.position.y = 20
        pointLight.position.z = 20
        this.scene.add(pointLight)

        // var frustumSize = 10;
        // var aspect = window.innerWidth / window.innerHeight;
        // this.camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 1000 );
        this.camera.position.set(-2, 8, 5);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        // this.time = 0;

        // my code
        const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
        // Materials
        const material = new THREE.MeshBasicMaterial()
        material.color = new THREE.Color(0xff0000)
        this.sphere = new THREE.Mesh(geometry, material)



        // this.isPlaying = true;

        // this.addObjects();
        this.addDog();
        // this.addSphere();
        this.resize();
        // this.play();
        this.render();
        this.setupResize();
        // this.settings();
    }

    settings() {
        let that = this;
        this.settings = {
            progress: 0,
        };
        this.gui = new dat.GUI();
        this.gui.add(this.settings, "progress", 0, 1, 0.01);
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    addObjects() {
        let that = this;
        // this.material = new THREE.ShaderMaterial({
        //     extensions: {
        //         derivatives: "#extension GL_OES_standard_derivatives : enable",
        //     },
        //     side: THREE.DoubleSide,
        //     uniforms: {
        //         time: {
        //             type: "f",
        //             value: 0
        //         },
        //         resolution: {
        //             type: "v4",
        //             value: new THREE.Vector4()
        //         },
        //         uvRate1: {
        //             value: new THREE.Vector2(1, 1),
        //         },
        //     },
        //     // wireframe: true,
        //     // transparent: true,
        //     // vertexShader: shader.vertex,
        //     // fragmentShader: shader.fragment,
        // });

        // this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1)
        // this.plane = new THREE.Mesh(this.geometry, this.material);

        // const loader = new GLTFLoader();
        // // console.log("my loader here --> ", loader);
        // // console.log('my scene ---> ', this.scene);
        // let loader_scene = this.scene
        //     // console.log('x marks the spot', x);
        // loader.load('/dog2.glb', function(gltf) {
        //     // console.log('---> loader running...', loader_scene);
        //     // console.log('model to be loaded ---> ', gltf.scene);
        //     loader_scene.add(gltf.scene);
        // }, undefined, function(error) {

        //     console.error(error);

        // })

    }

    addSphere() {
        // Objects

        this.scene.add(this.sphere)
        this.sphere.rotation.x
        console.log("initial position x - ", this.sphere.rotation.x);
        this.sphere.rotation.x += 10;
        console.log("secondary position x - ", this.sphere.rotation.x);
        const tick = () => {
            // console.log("tock", this.sphere);
            const clock = new THREE.Clock()
            const elapsedTime = clock.getElapsedTime()
            this.sphere.rotation.x += .05;
            console.log("tock", this.sphere.rotation.x);
            window.requestAnimationFrame(tick)
        }

        // tick();


    }



    // tick() {
    //     console.log('tick')
    //     const clock = new THREE.Clock()
    //     const elapsedTime = clock.getElapsedTime()

    //     // Update objects
    //     console.log('my object', this.sphere);
    //     this.sphere.rotation.x = .5 * elapsedTime

    //     // Update Orbital Controls
    //     // controls.update()

    //     // Render
    //     this.renderer.render(this.scene, this.camera)

    //     // Call tick again on the next frame
    //     window.requestAnimationFrame(this.tick)
    // }

    addDog() {
        // const loader = new GLTFLoader();
        // let loader_scene = this.scene

        // loader.load('/dog2.glb', function(gltf) {

        //     loader_scene.add(gltf.scene);
        // }, undefined, function(error) {

        //     console.error("woof! woof!", error);

        // })
        //dog code
        const loader = new GLTFLoader();
        const loader_scene = this.scene;
        // let model = new THREE.Object3D();

        loader.load('/dog2.glb', function(gltf) {

            // model = gltf.scene;
            gltf.scene.name = 'dog';
            loader_scene.add(gltf.scene);
        }, undefined, function(error) {

            console.error("woof! woof!", error);

        })
    }

    rotateDog() {
        console.log("starting k9 rotation...");
        this.play();
    }

    // stop() {
    //     this.isPlaying = false;
    // }

    // play() {
    //     if (!this.isPlaying) {
    //         this.render();
    //         this.isPlaying = true;
    //     }
    // }

    render() {
        let dog = this.scene.getObjectByName('dog');
        if (dog) {
            // console.log('here', dog);
            dog.rotation.y += 0.0010;
        }
        console.log('hazaar', dog);
        const clock = new THREE.Clock()
        const elapsedTime = clock.getElapsedTime()
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}