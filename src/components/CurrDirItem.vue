<template>
  <div
    class="current-dirrectory__item"
    @click="onClick"
    :class="{ 'current-dirrectory__item_folder': !isFile }"
  >
    <div class="current-dirrectory__item__name">{{ name }}</div>

    <div class="current-dirrectory__item__meta">
      <div class="current-dirrectory__item__date-create">{{ dateCreate }}</div>
      <div class="current-dirrectory__item__size">{{ size }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDirStore } from '../store'
import { IDirItem } from '../types'

const store = useDirStore()

const props = defineProps<IDirItem>()

function onClick() {
  if (props.isFile) return
  store.getDir(`${store.path}/${props.name}`)
}

const dateCreate = computed(() => props.birthtime?.toLocaleString())
</script>

<style>
.current-dirrectory__item {
  display: flex;
  flex-direction: row;

  gap: 10px;
  cursor: pointer;
}

.current-dirrectory__item:hover > .current-dirrectory__item__name {
  text-decoration: underline;
}

.current-dirrectory__item_folder::before {
  content: '>';
}

.current-dirrectory__item:hover > .current-dirrectory__item__meta {
  display: flex;
}

.current-dirrectory__item__meta {
  color: darkgray;
  width: 70%;
  gap: 10px;
  margin-left: auto;
  display: none;
}
</style>
