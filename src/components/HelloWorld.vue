<template>
  <div class="hello">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- navbar -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <router-link v-for="item in menus"  :to="item.path" :key="item.name"><mt-cell :title="item.name"/></router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        这是第二个选项内的内容
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        这是第三个选项内的内容
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
export default {

  components: {
    'mt-header': Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: '1',
      menus:[
        {"name":"弹窗提示","path":'/Message'},
        {"name":"弹出位置","path":'/Popup'},
        {"name":"按钮","path":'/Button'},
        {"name":"分页","path":'/InfiniteScroll'},
        {"name":"底部弹出菜单","path":'/ActionSheet'},
        {"name":"elementUI","path":'/ElementUi'},
        {"name":"底部选项栏","path":'/Tebbar'},
        {"name":"刷新页面","path":'/Pulldown'},
        {"name":"选择器","path":'/Selector'},
        {"name":"应用于表格的轮播","path":'/Swipe'}
      ]
    }
  },
  methods:{
    click(){
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
