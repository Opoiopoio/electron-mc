<template>
  <CurrDir :path="currentPath" />
</template>

<script setup lang="ts">
import CurrDir from '@/components/CurrDir.vue'
import { getPath } from '@/utils'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentPath = getPath(route.params.path)

console.log(currentPath)
</script>
