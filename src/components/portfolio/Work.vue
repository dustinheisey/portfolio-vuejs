<template>
  <div>
    <div v-if="direction === 0">
        <work-left :heading="heading" :subheading="subheading" :grid="grid" :link="link" :src="src"></work-left>
        <div v-if="grid === 1"><grid-1></grid-1></div>
        <div v-else-if="grid === 2"><grid-2></grid-2></div>
        <div v-else-if="grid === 3"><grid-3></grid-3></div>
        <div v-else-if="grid === 4"><grid-4></grid-4></div>
        <div v-else-if="grid === 5"><grid-5></grid-5></div>
        <div v-else-if="grid === 6"><grid-6></grid-6></div>
    </div>
    <div v-else-if="direction === 1">
      <work-right :heading="heading" :subheading="subheading" :grid="grid" :link="link" :src="src"></work-right>
        <div v-if="grid === 1"><grid-1></grid-1></div>
        <div v-else-if="grid === 2"><grid-2></grid-2></div>
        <div v-else-if="grid === 3"><grid-3></grid-3></div>
        <div v-else-if="grid === 4"><grid-4></grid-4></div>
        <div v-else-if="grid === 5"><grid-5></grid-5></div>
        <div v-else-if="grid === 6"><grid-6></grid-6></div>
    </div>
  </div>
</template>

<script>
import WorkLeft from './WorkLeft'
import WorkRight from './WorkRight'
import Grid1 from './grid/Grid1'
import Grid2 from './grid/Grid2'
import Grid3 from './grid/Grid3'
import Grid4 from './grid/Grid4'
import Grid5 from './grid/Grid5'
import Grid6 from './grid/Grid6'

export default {
  props: ['heading', 'subheading', 'grid', 'direction', 'link', 'src'],
  components: {
    WorkLeft,
    WorkRight,
    Grid1,
    Grid2,
    Grid3,
    Grid4,
    Grid5,
    Grid6
  }
}
</script>
