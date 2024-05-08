<template>
  <div class="explorer">
    <RouteHeader :path="path" />
    <div class="explorer__items">
      <CurrDirItem v-for="item of items" :key="`${path}${item.name}`" v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useDirStore } from '../store'
import CurrDirItem from './CurrDirItem.vue'
import RouteHeader from './RouteHeader.vue'

const props = defineProps<{ path?: string }>()

const store = useDirStore()

const { items, path } = storeToRefs(store)

onMounted(async () => {
  await store.get(props.path)
})

watch(
  () => props.path,
  () => store.get(props.path)
)
</script>

<style>
.explorer {
  text-align: left;
}
</style>
