<template>
  <div>
    <div v-if="template==='none'">
      <label v-if="labelposition" :class="{'block py-2':labelposition==='y','inline px-2':labelposition==='x'}" class=" text-sm font-semibold " for="">
      {{label}}
      </label>
      <select  v-model='inputValue'  :placeholder="placeholdere" :class="`${padding} ${aroundi} ${textsize} ${graissage} ${size} ${bordere} ${bgcolor} ${textcolor} `" class="outline-none " :required="required"  @change="$emit('update', inputValue)">
        <option value=""> {{placeholdere}} </option>
        <option value="" v-for="(data,index) in datas" :key="index">
          {{data}}
        </option>
      </select>
      
    </div>
    <div v-if="template==='default'">
      <label v-if="labelposition" :class="{'block py-2':labelposition==='y','inline px-2':labelposition==='x'}" class=" text-sm font-semibold " for="">
      {{label}}
      </label>
      <select required v-model='inputValue'  :placeholder="placeholdere"    @change="$emit('update', inputValue)" class="px-4 py-2 mt-1 border-2 border-gray-300 outile-none focus:outline-none focus:ring-2 w-full focus:ring-blue-500/50 focus:border-transparent">
        <option value=""> {{placeholdere}} </option>
        <option :value="data" v-for="(data,index) in datas" :key="index">
          {{data}}
        </option>
      </select>

      
      
    </div>
    
  </div>
</template>

<script>
export default {

 // eslint-disable-next-line vue/require-prop-types
 props:['vmodel','datas','padding', 'aroundi','textcolor', 'textsize','graissage','placeholdere','placeholderecolor','size','bordere','bgcolor','label','labelposition','required','template'],
  data() {
    return {
      localValue: null,
      inputValue: this.vmodel,
    }
  },
   watch: {
    value: {
      handler(vmodel){
        this.localValue = vmodel
        this.inputValue = vmodel
       
      },
      immediate: true,
    },
  },
  methods: {
    
  }
}
</script>

<style>

</style>