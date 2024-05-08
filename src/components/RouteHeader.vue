<template>
  <div class="route-header">
    <div
      v-for="item of buttons"
      :key="item"
      class="route-header__item"
      @click="onClick(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { PageNameEnum } from '@/router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ path?: string }>()

const router = useRouter()

const buttons = computed(() => props.path?.split('/'))

function onClick(item: string) {
  let pathToDir = ''
  for (const button of buttons.value ?? []) {
    if (item == button) {
      pathToDir += button
      break
    }
    pathToDir += button + '/'
  }

  router.push({ name: PageNameEnum.explorer, params: { path: pathToDir } })
}
</script>

<style>
.route-header {
  display: flex;

  flex-direction: row;
  gap: 10px;
}

.route-header__item {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
