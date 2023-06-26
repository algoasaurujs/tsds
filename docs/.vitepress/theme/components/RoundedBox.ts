import { ComponentPropsOptions, defineComponent } from 'vue'
import { BufferGeometry } from 'three'
import { Mesh } from 'troisjs';
import { props, createGeometry } from './RoundedBoxGeometry';

function meshComponent<P extends Readonly<ComponentPropsOptions>>(
  name: string,
  props: P,
  createGeometry: { (c: any): BufferGeometry }
) {
  return defineComponent({
    name,
    extends: Mesh,
    props,
    created() {
      this.createGeometry();
      this.addGeometryWatchers(props);
    },
    methods: {
      createGeometry() {
        this.geometry = createGeometry(this);
      },
    },
  });
}

export default meshComponent('RoundedBox', props, createGeometry);
