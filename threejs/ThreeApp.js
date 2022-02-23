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
        this.container = selector;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xeeeeee, 1);
        this.renderer.outputEncoding = THREE.sRGBEncoding;

        this.container.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.001,
            1000
        );

        const pointLight = new THREE.PointLight(0xffffff, 0.8)
        pointLight.position.x = 2
        pointLight.position.y = 3
        pointLight.position.z = 4
        this.scene.add(pointLight)

        // var frustumSize = 10;
        // var aspect = window.innerWidth / window.innerHeight;
        // this.camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 1000 );
        this.camera.position.set(0, 0, 2);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.time = 0;

        this.isPlaying = true;

        // this.addObjects();
        this.addDog();
        this.resize();
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

    addDog() {
        const loader = new GLTFLoader();
        // console.log("my loader here --> ", loader);
        // console.log('my scene ---> ', this.scene);
        let loader_scene = this.scene
            // console.log('x marks the spot', x);
        loader.load('/dog2.glb', function(gltf) {
            // console.log('---> loader running', loader_scene);
            // console.log('model to be loaded ---> ', gltf.scene);
            loader_scene.add(gltf.scene);
        }, undefined, function(error) {

            console.error("woof! woof!", error);

        })
    }

    stop() {
        this.isPlaying = false;
    }

    play() {
        if (!this.isPlaying) {
            this.render();
            this.isPlaying = true;
        }
    }

    render() {
        if (!this.isPlaying) return;
        this.time += 0.05;
        // this.material.uniforms.time.value = this.time;
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}