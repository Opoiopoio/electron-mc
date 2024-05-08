<template>
  <div
    class="explorer__item"
    @click="onClick"
    :class="{ explorer__item_folder: !isFile }"
  >
    <div ref="nameRef" class="explorer__item__name">{{ name }}</div>

    <div class="explorer__item__meta">
      <div class="explorer__item__date-create">{{ dateCreate }}</div>
      <div class="explorer__item__size">{{ size }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDirStore } from '../store'
import { IDirItem } from '../types'
import { useRouter } from 'vue-router'
import { PageNameEnum } from '@/router'

const store = useDirStore()
const router = useRouter()

const props = defineProps<IDirItem>()

const nameRef = ref<HTMLDivElement>()

function onClick() {
  const path = `${store.path}/${nameRef.value?.textContent}`

  if (props.isFile) {
    router.push({ name: PageNameEnum.editFile, params: { path } })
    return
  }
  store.get(`${store.path}/${props.name}`)
}

const dateCreate = computed(() => props.birthtime?.toLocaleString())
</script>

<style>
.explorer__item {
  display: flex;
  flex-direction: row;

  gap: 10px;
  cursor: pointer;
}

.explorer__item:hover > .explorer__item__name {
  text-decoration: underline;
}

.explorer__item_folder::before {
  content: '>';
}

.explorer__item:hover > .explorer__item__meta {
  display: flex;
}

.explorer__item__meta {
  color: darkgray;
  width: 70%;
  gap: 10px;
  margin-left: auto;
  display: none;
}
</style>
