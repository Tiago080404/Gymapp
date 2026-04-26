<template>
  <nav
    class="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 bg-[#03AA6B] rounded-full px-1.5 py-1.5"
  >
    <NuxtLink
      v-for="item in navItems"
      :key="item.name"
      :to="item.to"
      class="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm text-gray-500 transition-all duration-200"
      active-class="bg-[#03AA6B] text-white"
    >
      <component :is="item.icon" 
      class="w-4 h-4" />
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>

<script setup>
import {
  HomeIcon,
  PlayIcon,
  BuildingLibraryIcon,
} from "@heroicons/vue/24/outline";

const navItems = [
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'Libary', to: '/libary', icon: BuildingLibraryIcon },
  { name: 'Workout', to: '/workout', icon: PlayIcon },
]
</script>
