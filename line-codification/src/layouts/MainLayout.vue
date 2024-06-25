<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 400px">
      <q-header elevated>
        <q-toolbar>
          <q-img 
            src="../assets/icons/byte.png"
            style="height: 100px; max-width: 100px"
            class="q-ml-lg q-my-md"
          />

          <div class="text-h2 text-weight-bold q-ml-md q-my-md">ByteBuster</div>
        </q-toolbar>

      </q-header>
    </q-layout>
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
}
.q-my-md {
  margin: 10px 0;
}
.q-ml-md {
  margin-left: 10px;
}
</style>