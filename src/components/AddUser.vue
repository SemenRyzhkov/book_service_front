<template>
  <ion-page class="submit-form">
    <ion-content v-if="!submitted">
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="user.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="description">Email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="user.email"
          name="email"
        />
      </div>

      <div class="form-group">
        <label for="description">Password</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="user.password"
          name="description"
        />
      </div>

      <button @click="saveUser" class="btn btn-success">Submit</button>
    </ion-content>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUser">Add</button>
    </div>
  </ion-page>
</template>

<script>
import UserService from '../services/UserService';
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';

export default {
  name: 'add-user',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Form,
    Field,
    ErrorMessage },

  data() {
    return {
      user: {
        id: null,
        name: '',
        email: '',
        password: '',
      },
      submitted: false,
    };
  },
  methods: {
    saveUser() {
      const data = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
      };

      UserService.create(data)
        .then((response) => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newUser() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>

