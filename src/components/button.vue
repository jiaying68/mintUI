<template>
  <div id="button">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-button type="default" size="large">default</mt-button>
    <mt-button type="primary" size="large">primary</mt-button>
    <mt-button type="danger" size="large">danger</mt-button>

  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

export default {
  name: 'Button',
  components: {
    'mt-button': Button
  },
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>