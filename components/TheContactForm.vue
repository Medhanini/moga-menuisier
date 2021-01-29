<template>
<section class="TheContactForm" >
        <v-container >
<TheComponentTitle :title="title" />
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
    <v-card-title>Entrons en contact</v-card-title>

    <v-card-text>
      <div>Pour tous renseignements contactez Moga Menuisier.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Les honoraires de Moga menuisier</v-card-title>

    <v-card-text>
      <v-chip-group>
        <v-chip>9:30 PM</v-chip>

        <v-chip>19:00 AM</v-chip>
      </v-chip-group>
    </v-card-text>
      <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>+212 6 09 88 97 70</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-whatsapp</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Essaouira</v-list-item-title>
          <v-list-item-subtitle>Morocco</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
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
import TheComponentTitle from '~/components/TheComponentTitle'
  export default {
    components:{
      TheComponentTitle
    },
    data: () => ({
      title:'contact',
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