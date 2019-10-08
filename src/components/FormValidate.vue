<template>
  <div class="page-field">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="page-title">Field</div>
    <!-- <div class="page-part">
      <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="网站" placeholder="请输入网址" type="url"></mt-field>
      <mt-field label="数字" placeholder="请输入数字" type="number"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
    </div> -->

    <div class="page-part">
      <mt-field placeholder="登录邮箱" type="email"></mt-field>
      <mt-field placeholder="密码" type="password"></mt-field>
    </div>

    <div class="page-part">
      <mt-field label="邮箱" placeholder="成功状态" state="success"></mt-field>
      <mt-field label="邮箱" placeholder="失败状态" state="error"></mt-field>
      <mt-field label="邮箱" placeholder="警告状态" state="warning"></mt-field>
    </div>

    <div class="page-part" style="border: 3px solid red">
      <mt-field label="第一种校验" placeholder="4-6位数字合法" v-model="inputContext" v-on:input="checkInput()"></mt-field>
      <p :style="{ visibility: !!checkRes ? 'visible' : 'hidden' }" class="inputNote">输入不合法！</p>
    </div>
    
    <div class="page-part">
      <mt-field label="第二种校验" placeholder="只能输入数字" v-model="inputNumber" v-on:input="checkNumber()" :state="checkNum">
        <!-- <p :style="{ visibility: !!numCheck ? 'visible' : 'hidden' }" class="inputNote">输入不合法！</p> -->
      </mt-field>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'page-field',
  data(){
      return{
        checkRes:false,
        inputContext:'',
        inputNumber:'',
        checkNum:'',//error, success, warning
        numCheck:true

        // comment:''
      }
  },
  methods: {
    
    //检查输入字符长度
    checkInput() {
      let inputContext = this.inputContext;
      let inputLength = inputContext.length;
      if(inputLength<4 || inputLength > 6){
        this.checkRes = true;
      }else{
        this.checkRes = false;
      }
    },
    checkNumber(){
      var reg = /^[0-9]+.?[0-9]*$/; 
      if(!reg.test(this.inputNumber)){
        this.checkNum = 'error'
        // Toast('输入非法：只能输入数字');
        Toast({
          message: '只能输入数字',
          iconClass: 'icon icon-success',
          position: 'bottom',
          duration: 5000
        });
      }
    }
  },
};
</script>

<style>
    .inputNote{
        color: red;
        margin: 0px;
        background: white;
        padding: 0px 115px;
    }
</style>