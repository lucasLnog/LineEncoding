<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 132px">
      <q-header elevated>
        <q-toolbar>
          <q-img 
            src="../assets/icons/byte.png"
            style="height: 100px; max-width: 100px"
            class="q-ml-lg q-my-md"
          />

          <div class="text-h2 text-weight-bold q-mx-md q-my-md">ByteBuster</div>
        </q-toolbar>
      </q-header>
    </q-layout>

    <Message />

  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {
    Message: () => import ('src/components/Message.vue')
  },
  data () {
    return {

    }
  }
}
</script>
