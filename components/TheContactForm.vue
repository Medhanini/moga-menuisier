<template>
<section class="TheContactForm" >
        <v-container >
<TheComponentTitle :title="data.title" />
      </v-container>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    elevation="0"
  >

      <v-container >
<v-row>
<v-col class="col-12 col-md-6" >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title> {{ data.headline }} </v-card-title>

    <v-card-text>
      {{ data.text }}
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title> {{ data.hours_work.title }} </v-card-title>

    <v-card-text>
      <v-chip-group>
        <v-chip> {{ data.hours_work.start_work }} </v-chip>

        <v-chip> {{ data.hours_work.end_work }} </v-chip>
      </v-chip-group>
    </v-card-text>
      <v-list two-line>
        <div 
            v-for="(value,index) in data.infos"
            :key="index"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">
               {{ value.icon1 }} 
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> {{ value.title }} </v-list-item-title>
              <v-list-item-subtitle> {{ value.subtitle }} </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon> {{ value.icon2 }} </v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider inset></v-divider>
        </div>
    </v-list>
</v-col>
      <v-col class="col-12 col-md-6" >
  <v-form
  class="mx-2 "
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="15"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-textarea
      v-model="message"
      label="message"
      required
    ></v-textarea>
    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="validate"
      block
      elevation="0"
    >
      Envoyer
    </v-btn>
  </v-form>
  </v-col>
</v-row>

      </v-container>
  </v-card>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import TheComponentTitle from '~/components/TheComponentTitle'
  export default {
    components:{
      TheComponentTitle
    },
    computed: {
        ...mapState({
            data: state => state.list.contact,
        }),
    },
    data: () => ({
      loading: false,
      valid: true,
      name: '',
      message:'',
      nameRules: [
        v => !!v || 'Le nom est requis',
        v => (v && v.length <= 15) || 'Le nom doit comporter moins de 15 caractères',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail est requis',
        v => /.+@.+\..+/.test(v) || 'E-mail Doit être valide',
      ]
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      validate () {
        this.$mail.send({
        from: this.name,
        subject: 'Moga Menuisier from:'+this.email,
        text: this.message,
        to: 'mohamed.hanini95@gmail.com',
      })
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>