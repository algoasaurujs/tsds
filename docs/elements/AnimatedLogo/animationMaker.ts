import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const sizes = {
    width: 800,
    height: 600
};

const aspectRatio = sizes.width / sizes.height;

export const animationMaker = (canvas: HTMLCanvasElement) => {
    const scene = new THREE.Scene();
    const geometry = new RoundedBoxGeometry(3, 0.8, 3,undefined, 0.15);
    const material = new THREE.MeshStandardMaterial({ color: "#BBC2C2" });

    const logoGroup = new THREE.Group();
    const segment1 = new THREE.Mesh(geometry, material);
    segment1.position.y = 1;
    segment1.castShadow = true;
    segment1.receiveShadow = false;
    const segment2 = new THREE.Mesh(geometry, material);
    segment2.castShadow = true;
    segment2.receiveShadow = true;
    const segment3 = new THREE.Mesh(geometry, material);
    segment3.castShadow = false;
    segment3.receiveShadow = true;

    segment3.position.y = -1;
    logoGroup.add(segment1, segment2, segment3);

    logoGroup.rotation.x = 0.28;
    logoGroup.rotation.y = 0.51;

    logoGroup.scale.setScalar(2);

    scene.add(logoGroup);

    const camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
    camera.position.z = 15;
    scene.add(camera);

    const ambientLight = new THREE.AmbientLight("#FFFFFF", 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight('#fff', 0.60);
    pointLight.castShadow = true;
    pointLight.position.x = 6;
    pointLight.position.y = 4;
    pointLight.position.z = 4;
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight('#fff', 0.3);
    pointLight2.castShadow = false;
    pointLight2.position.x = -6;
    pointLight2.position.y = -4;
    pointLight2.position.z = 4;
    scene.add(pointLight2);

    const renderer = new THREE.WebGL1Renderer({ canvas, alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    const render = () => {
        segment1.rotation.y += 0.005;
        segment2.rotation.y += -0.009;
        segment3.rotation.y += 0.002;
        renderer.render(scene, camera);
        window.requestAnimationFrame(render);
    }

    render();
}