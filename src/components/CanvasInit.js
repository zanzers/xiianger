import * as THREE from 'three';

export class ThreeCanvas {
    constructor(canvasSelector) {
        this.canvas = document.querySelector(canvasSelector);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            75,
            this.canvas.clientWidth / this.canvas.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 3, 5);

  
        this.addHelpers();
        this.addLights();
        this.addObjects();
        window.addEventListener('resize', () => this.resizeRendererToCanvas());
        this.animate();
    }

    addHelpers() {
        const axesHelper = new THREE.AxesHelper(3);
        this.scene.add(axesHelper);

        const gridHelper = new THREE.GridHelper(30);
        this.scene.add(gridHelper);
    }

    addLights() {
        const directionLight = new THREE.DirectionalLight(0xffffff, 1);
        directionLight.position.set(0, 15, 10);
        this.scene.add(directionLight);

        const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
        this.scene.add(ambientLight);
    }

    addObjects() {
        const geometry = new THREE.BoxGeometry(1);
        const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
    }

    resizeRendererToCanvas() {
        const canvasWidth = this.canvas.clientWidth;
        const canvasHeight = this.canvas.clientHeight;

        this.renderer.setSize(canvasWidth, canvasHeight, false);
        this.camera.aspect = canvasWidth / canvasHeight;
        this.camera.updateProjectionMatrix();
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Object animations
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.resizeRendererToCanvas();
        this.renderer.render(this.scene, this.camera);
    }
}
