<script setup>
import DefaultTheme from 'vitepress/theme';
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image>
      <Renderer ref="renderer" :alpha="true" :resize="true" shadow pointer
        :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05, maxPolarAngle: Math.PI / 3, minPolarAngle: Math.PI / 3 }">
        <Camera :position="{ z: 12, y: 10, x: -10 }" :look-at="{ x: 0, y: 0, z: 0 }" />
        <Scene>
          <AmbientLight color="#FFF" :intensity="0.5" />
          <PointLight :position="{ y: 10, z: 10, x: -20 }" :look-at="{ x: 0, y: 0, z: 0 }"
            :shadow-map-size="{ width: 512, height: 512 }" :intensity="0.5" cast-shadow />
          <RoundedBox ref="box1" :width="10" :height="2" :depth="10" :widthSegments="100" :heightSegments="100"
            :depthSegments="100" :position="{ x: 0, y: 3 }" cast-shadow>
            <LambertMaterial color="#646cff" />
          </RoundedBox>
          <RoundedBox ref="box2" :width="10" :height="2" :depth="10" :widthSegments="100" :heightSegments="100"
            :depthSegments="100" :position="{ x: 0, y: 0 }" cast-shadow receive-shadow>
            <LambertMaterial color="#646cff" />
          </RoundedBox>
          <RoundedBox ref="box3" :width="10" :height="2" :depth="10" :widthSegments="100" :heightSegments="100"
            :depthSegments="100" :position="{ x: 0, y: -3 }" receive-shadow>
            <LambertMaterial color="#646cff" />
          </RoundedBox>
        </Scene>
      </Renderer>
    </template>
  </DefaultTheme.Layout>
</template>

<script>
import {
  Camera,
  LambertMaterial,
  PointLight,
  AmbientLight,
  Renderer,
  Scene,
} from 'troisjs';
import RoundedBox from './components/RoundedBox';
export default {
  mounted() {
    const bgImage = document.getElementsByClassName('image-bg');
    for (const bg of bgImage) {
      bg.remove();
    }
    const renderer = this.$refs.renderer;
    const box1 = this.$refs.box1?.mesh;
    const box2 = this.$refs.box2?.mesh;
    const box3 = this.$refs.box3?.mesh;
    renderer.onBeforeRender(() => {
      if (box1 && box2 && box3) {
        box1.rotation.y += 0.01;
        box2.rotation.y += 0.005;
        box3.rotation.y -= 0.008;
      }
    });
  },
};
</script>
