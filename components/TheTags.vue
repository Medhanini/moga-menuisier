<template>
<div>
    <v-chip
        class="ma-1"
        v-for="(value ,index) in data"
        :key="index"
    >
    <h5>{{ value.name }}</h5>
        
    </v-chip>
    </div>
</template>
<script>
export default {
    name:'TheTags',
    data(){
        return{
            data:[
                {
                    name:'Aluminium'
                },
                {
                    name:'MDF'
                },
                {
                    name:'Cloison'
                },
                {
                    name:'Menuiserie PVC'
                },
                {
                    name:'Pergola'
                },
                {
                    name:'Porte coulissante'
                },
                {
                    name:'Profiles aluminium'
                },
                {
                    name:'Menuiserie Aluminium à Essaouira - Maroc'
                },
                {
                    name:'Essaouira - Maroc'
                }
            ]
        }
    }
}
</script>