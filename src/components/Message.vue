<template>
  <div class="page-msgbox">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="page-msgbox-wrapper">
      <mt-button @click.native="back" size="large">MessageBox</mt-button>
      <mt-button @click.native="openBottomToast" size="large">toast</mt-button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
// 这两个组件都需要单独引入
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
export default {
  name: 'Hi',
  // components: {
  //   'mt-header': Header
  // },
  data() {
    return {}
  },
  methods: {
    back() {
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })
    },
    openBottomToast() {
      Toast({
        message: '提示信息',
        position: 'bottom'
      })
    }
  }
}
</script>

<style scoped>
</style>