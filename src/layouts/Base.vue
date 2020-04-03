<template>
    <div>
        <base-app-bar></base-app-bar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </div>
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
