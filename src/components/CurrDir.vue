<template>
  <div class="current-dirrectory">
    <h4 class="current-dirrectory__path">{{ path }}</h4>
    <div class="current-dirrectory__items">
      <CurrDirItem
        v-for="item of items"
        :key="`${path}${item.name}`"
        class="current-directory__item"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useDirStore } from '../store'
import CurrDirItem from './CurrDirItem.vue'

const store = useDirStore()

const { items, path } = storeToRefs(store)

onMounted(async () => {
  await store.getDir()
})
</script>

<style>
.current-dirrectory {
  text-align: left;
}
</style>
