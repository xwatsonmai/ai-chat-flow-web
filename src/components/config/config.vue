<script setup lang="ts">
import {LogicFlow} from "@logicflow/core";
import {onMounted} from "vue";

const data = {
  // 节点
  nodes: [
    {
      id: 50,
      type: 'rect',
      x: 100,
      y: 150,
      text: '你好',
    },
    {
      id: 21,
      type: 'circle',
      x: 300,
      y: 150,
    },
  ],
  // 边
  edges: [
    {
      type: 'polyline',
      sourceNodeId: 50,
      targetNodeId: 21,
    },
  ],
};
onMounted(() => {
  const lf = new LogicFlow({
    container: document.querySelector('#container'),
    stopScrollGraph: true,
    stopZoomGraph: true,
    grid: {
      type: 'dot',
      size: 20,
    },
  });
  lf.render(data);
})
</script>

<template>
  <div  id="container"></div>
</template>

<style scoped>
#container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>