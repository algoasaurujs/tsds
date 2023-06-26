import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { BufferGeometry } from 'troisjs';
import { ComponentPropsOptions, defineComponent } from 'vue';
import { BufferGeometry as BaseBufferGeometry } from 'three';

export const props = {
  size: Number,
  width: { type: Number, default: 1 },
  height: { type: Number, default: 1 },
  depth: { type: Number, default: 1 },
  widthSegments: { type: Number, default: 1 },
  heightSegments: { type: Number, default: 1 },
  depthSegments: { type: Number, default: 1 },
} as const;

export function createGeometry(comp: any): RoundedBoxGeometry {
  if (comp.size) {
    return new RoundedBoxGeometry(
      comp.size,
      comp.size,
      comp.size,
      comp.widthSegments,
      comp.heightSegments,
    );
  } else {
    return new RoundedBoxGeometry(
      comp.width,
      comp.height,
      comp.depth,
      comp.widthSegments,
      comp.heightSegments,
    );
  }
}
function geometryComponent<P extends Readonly<ComponentPropsOptions>>(
  name: string,
  props: P,
  createGeometry: { (c: any): BaseBufferGeometry }
) {
  return defineComponent({
    name,
    extends: BufferGeometry,
    props,
    methods: {
      createGeometry() {
        this.geometry = createGeometry(this);
        this.geometry.userData.component = this;
        this.$emit('created', this.geometry);
      },
    },
  });
}

export default geometryComponent('RoundedBoxGeometry', props, createGeometry);
