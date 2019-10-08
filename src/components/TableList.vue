
 <template>
  <div>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-header title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
        <mt-button @click="handleClose">111</mt-button>
        <mt-button @click="handleClose">222</mt-button>
        <mt-button @click="handleClose">333</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
     <mt-cell v-for="(item,key) in routes" :title="item.name" :key="key" :to="item.path"/>
  </div>
</template>

<style scoped>
    
</style>

<script>
// import { navs } from '@/static/routeConfig.json';
import navs from '../routeConfig.json';
export default {
  data(){
    return {
      routes: 
      [
        // {
        //     path: '/',
        //     name: 'HelloWorld'
        // },
        // {
        //     path: '/Message',
        //     name: 'message'
        // },
        // {
        //     path: '/Popup',
        //     name: 'popup'
        // },
        // {
        //     path: '/Button',
        //     name: 'button'
        // },
        // {
        //     path: '/InfiniteScroll',
        //     name: 'InfiniteScroll'
        // },
        // {
        //     path: '/ActionSheet',
        //     name: 'ActionSheet'
        // },
        // {
        //     path: '/ElementUi',
        //     name: 'ElementUi'
        // },
        // {
        //     path: '/Tebbar',
        //     name: 'Tebbar'
        // },
        // {
        //     path: '/Pulldown',
        //     name: 'Pulldown'
        // },
        // {
        //     path: '/Selector',
        //     name: 'Selector'
        // },
        // {
        //     path: '/Swipe',
        //     name: 'Swipe'
        // },
        // {
        //     path: '/DatetimePicker',
        //     name: 'DatetimePicker'
        // },
        // {
        //     path: '/FormValidate',
        //     name: 'FormValidate'
        // },
        // {
        //     path: '/TableList',
        //     name: 'TableList'
        // }
      ]
    }
  },
  methods:{
    showThis(){
      // console.log('123')
    }
  },
  mounted(){
  },
  created(){
    this.routes = navs
    // console.log(navs)
  }
}
</script>
