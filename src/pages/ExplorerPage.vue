<template>
  <CurrDir :path="currentPath" />
</template>

<script setup lang="ts">
import CurrDir from '@/components/CurrDir.vue'
import { getPath } from '@/utils'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentPath = ref(getPath(route.params.path))

watch(
  () => route.params.path,
  () => {
    currentPath.value = getPath(route.params.path)
  }
)
</script>
