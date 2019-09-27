<template>
  <div class="hello">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="mydiv"></div>
    
    <!-- navbar -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <div class="nav" style="margin-top:10px;" v-model="active" swipeable>
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>
    </div>

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
    
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="n in 10" title="tab-container 1" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 5" title="tab-container 2" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 7" title="tab-container 3" :key="n"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
// import { route } from '~@/assets/routeConfig.json'
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
        {"name":"应用于表格的轮播","path":'/Swipe'},
        {"name":"时间选择器","path":'/DatetimePicker'},
        {"name":"表单校验","path":'/FormValidate'},
        {"name":"表格","path":'/TableList'},
        {"name":"校验","path":'/Validate'}
        // 'aaa'
      ],
      active:'tab-container2'
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
  },
  created() {
    // this.menus = route;
  },
  mounted() {
    // console.log(route)
  },
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

.mydiv{
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
