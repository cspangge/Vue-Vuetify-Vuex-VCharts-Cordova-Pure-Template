<template>
    <v-content>
        <base-app-bar></base-app-bar>
        <router-view></router-view>
    </v-content>
</template>

<script lang="ts">
export default {
  name: 'Base',
  components: {
    BaseAppBar: () => import('@/components/base/BaseAppBar.vue'),
  },
}
</script>

<style scoped>

</style>
