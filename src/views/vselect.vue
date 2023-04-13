<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1 class="text-3xl text-center font-semibold py-4 uppercase">Select component</h1>

    <Vselect 
      :options="fruits"
      :multiple="false"
      @get-data="getData"
    />

  </div>
</template>

<script setup lang="ts">
  import { ref,reactive } from 'vue';
  import Vselect from '@/components/Vselect.vue';
  import type { Option } from '@/types/options';
  const fruits = reactive<Option[]>([
    {id:1,name:'tomate'},
    {id:2,name:'mangue'},
    {id:3,name:'banane'},
    {id:4,name:'orange'},
    {id:5,name:'papaye'},
  ])

  let items = ref<Option[] | Option>([])

  const getData = (datas:Option[] | Option) =>  {
    //console.log(datas)
    items.value = datas
  }

</script>

<style scoped>

</style>