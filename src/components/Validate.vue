<template>
  <div id="app">
    <mt-field
      label="就诊人姓名："
      placeholder="请输入姓名"
      :state="inputStatus.chinese"
      v-model="patientInfo.patientName"
      @input="checkInput(patientInfo.patientName, 'chinese', '请输入汉字')"
    >
    </mt-field>
    <mt-field
      label="就诊人年龄："
      placeholder="请输入年龄"
      :state="inputStatus.number"
      v-model="patientInfo.patientAge"
      @input="checkInput(patientInfo.patientAge, 'number', '请输入数字')"
      @blur.prevent="showBlur()"
    ></mt-field>

    <mt-popup
      v-model="failSubmit"
      position="top"
      class="failSubmit"
      :modal="false"
    >
      <p>提交失败，请留意输入格式提示</p>
    </mt-popup>

    <mt-popup
      v-model="submitSuccess"
      position="top"
      class="submitSuccess"
      :modal="false"
    >
      <p>提交成功!</p>
    </mt-popup>

    <mt-button size="large" type="primary" @click.native="submitInput"
      >large</mt-button
    >
  </div>
</template>
<script type="text/javascript">
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      patientInfo: {}, //输入的信息
      inputStatus: {}, //校验的结果
      hasError: false, //判断是否有问题
      failSubmit: false, //判断错误弹窗是否弹出
      submitSuccess: false //判断提交成功弹窗是否弹出
    }
  },
  methods: {
    //输入时检查是否合法
    checkInput(inputStr, inputType, notice) {
      this.hasError = false
      this.inputStatus.result = []
      let regex = this.$_reges[inputType]
      // console.log(regex)
      // return
      if (!regex.test(inputStr)) {
        this.hasError = true
        this.inputStatus[inputType] = 'warning'

        Toast({
          message: notice,
          position: 'bottom'
        })
      } else {
        this.inputStatus[inputType] = 'success'
      }
    },
    //提交成功后的操作
    submitInput() {
      let hasError = document.getElementsByClassName('is-warning').length
      if (hasError) {
        this.hasError = true
        this.failSubmit = true
      } else {
        this.hasError = false
        this.submitSuccess = true
      }
    }
  },
  //控制提示弹出框显示一段时间后消失
  watch: {
    failSubmit(val) {
      if (val) {
        setTimeout(() => {
          this.failSubmit = false
        }, 2000)
      }
    },
    submitSuccess(val) {
      if (val) {
        setTimeout(() => {
          this.submitSuccess = false
        }, 2000)
      }
    }
  }
}
</script>

<style>
.failSubmit {
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  backface-visibility: hidden;
}

.failSubmit p {
  line-height: 20px;
  color: white;
  font-weight: bolder;
}

.submitSuccess {
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  backface-visibility: hidden;
}

.submitSuccess p {
  line-height: 20px;
  color: white;
}
</style>