<template>
  <div
    class="flex column q-mx-lg q-py-lg"
  >
    <div class="flex row q-mx-lg">
      <q-input 
        outlined
        v-model="mainMessage"
        label="Digite a mensagem a ser enviada"
        class="input q-mr-md"/>
      <q-btn
        color="blue"
        icon-right="send"
        label="Enviar"
      />
    </div>
    <div class="flex column q-mx-lg q-py-md">
      <q-toggle
        v-model="encryptedMessageView"
        label="Mostrar mensagem criptografada"
      />
      <q-input
        v-if="encryptedMessageView"
        v-model="encryptedMessage"
        type="textarea"
        label="Mensagem criptografada"
        filled
        autogrow
        readonly
      />
    </div>
    <div
      v-if="encryptedMessageView"
      class="flex column q-mx-lg q-py-md"
    >
      <q-toggle
        v-model="encryptedMessageView"
        label="Mostrar mensagem criptografada em binário"
      />
      <q-input
        v-if="encryptedMessageView"
        v-model="encryptedMessage"
        type="textarea"
        label="Mensagem criptografada em binário"
        filled
        autogrow
        readonly
      />
    </div>
    <div
      v-if="!encryptedMessageView"
      class="flex column q-mx-lg q-py-md"
    >
      <q-toggle
        v-model="encryptedMessageView"
        label="Mostrar mensagem original em binário"
      />
      <q-input
        v-if="encryptedMessageView"
        v-model="encryptedMessage"
        type="textarea"
        label="Mensagem original em binário"
        filled
        autogrow
        readonly
      />
    </div>
  </div>
</template>

<script>
import { caesarEncrypt } from 'src/services/encryption';

export default {
  name: 'Message',
  data () {
    return {
      mainMessage: '',
      encryptedMessageView: false,
    }
  },
  computed: {
    encryptedMessage() {
      return caesarEncrypt(this.mainMessage, 3);
    }
  }
}
</script>

<style>
  .input {
    width: 600px !important;
  }

  .border {
    border: 2px solid grey;
  }

</style>