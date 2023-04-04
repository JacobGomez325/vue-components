<template>
  <main>
    <div class="container  mx-auto ">
      <vform 
        template="default"
        :isRounded="true" 
        :sendRequest="false" 
        :champs="champs" 
        :cols="cols" 
        submitText="Envoyé"
        cancelText="Annuler"
        @getFiles="getFiles"
        @getImage="getImage"
       
       ></vform>

       <pre>
        {{ champs }}
       </pre>
       
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';
import { extractFormData } from '@/utils/index'
import Vform from '@/components/Vform.vue'

const optionsCheckbox = reactive([
  {id:1,name:"Orange"},
  {id:2,name:"Mangue"},
  {id:3,name:"Banane"},
  {id:4,name:"Papaye"},
  {id:5,name:"Citron"},
])

const optionsRadio = reactive([
  {id:1,name:'Homme'},
  {id:2,name:'Femme'},
  {id:3,name:'Bisexuelle'},
  {id:4,name:'Autre'}
])
const projetAttributs = ['nom', 'description', 'debut', 'fin', 'objectifGlobaux', 'budgetNational', 'pret', 'couleur', 'ville', 'bailleurId', 'tauxEngagement']
const champs = ref([
  { name: 'Nom du projet', key: "nom", type: 'text', placeholder: "Nom du projet", data: '', required: true, errors: [] },
  { name: 'Prêt', type: 'number', key: "pret", placeholder: "", data: '', required: true, errors: [] },
  { name: 'Budget Nationnal', key: "budgetNational", type: 'number', placeholder: "", data: '', required: true, errors: [] },
  { name: 'Date début', key: "debut", type: 'date', placeholder: "", data: '', required: true, },
  { name: 'Date fin', type: 'date', key: "fin", placeholder: "", data: '', required: true, errors: [] },
  { name: 'Couleur', type: 'color', key: "couleur", placeholder: 'Choississez une couleur',data: '', required: true, errors: [] },
  { name: 'couverture du projet', type: 'file', placeholder: 'Choississez une couverture', isImage: true,  data: '', required: true, errors: [] },
  { name: 'Pièce jointe', type: 'file', placeholder: 'televerser des fichiers', isSelect: false, isImage: false,  data: '', required: false, errors: [] },
  { name: 'Objectifs specifiques', key: "objectifSpecifique", type: 'text', placeholder: 'Definir les objectifs', data: '', required: false, errors: [] },
  { name: 'Taux engagement', key: "tauxEngagement", type: 'text', placeholder: 'Taux engagement', data: '', required: false, errors: [] },
  { name: 'Description', key: "description", placeholder: 'Description du projet', isTextArea: true, data: '', required: false, errors: [] },
  { name: 'Objectifs globaux', key: "objectifGlobaux", placeholder: '', isTextArea: true, data: '', required: false, errors: [] },
  { name: 'Votre fruits preferé',key:"fruits", placeholder: '', isCheckbox:true, data: '', options: optionsCheckbox, value: 'name',position:'horizontal', required: false, errors: [] },
  { name: 'Votre genre',key:"genre", data: '', options: optionsRadio,isRadio:true,  value: 'name',position:'vertical', required: false, errors: [] },
])
const cols = ref<number>(2)

function getFiles(files:FileList) {
  console.log(files)
}

function getImage(image: FileList) {
  console.log(image)
}
</script>


