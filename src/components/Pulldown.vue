<template>
  <div class="page-loadmore">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <h1 class="page-title">Pull down</h1>
    <p class="page-loadmore-desc">
      在列表顶端, 按住 - 下拉 - 释放可以获取更多数据
    </p>
    <p class="page-loadmore-desc">此例请使用手机查看</p>
    <p class="page-loadmore-desc">translate : {{ translate }}</p>
    <div
      class="loading-background"
      :style="{
        transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)'
      }"
      style="background-color:red"
    >
      translateScale : {{ moveTranslate }}
    </div>
    <div
      class="page-loadmore-wrapper"
      ref="wrapper"
      :style="{ height: wrapperHeight + 'px' }"
    >
      <mt-loadmore
        :top-method="loadTop"
        @translate-change="translateChange"
        @top-status-change="handleTopChange"
        ref="loadmore"
      >
        <ul class="page-loadmore-list">
          <li v-for="item in list" :key="item" class="page-loadmore-listitem">
            {{ item }}
          </li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span
            v-show="topStatus !== 'loading'"
            :class="{ 'is-rotate': topStatus === 'drop' }"
            >↓</span
          >
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<style>
</style>

<script type="text/babel">
export default {
  data() {
    return {
      list: [],
      topStatus: '',
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0
    }
  },

  methods: {
    handleTopChange(status) {
      this.moveTranslate = 1
      this.topStatus = status
    },
    translateChange(translate) {
      const translateNum = +translate
      this.translate = translateNum.toFixed(2)
      this.moveTranslate = (1 + translateNum / 70).toFixed(2)
    },
    loadTop() {
      setTimeout(() => {
        let firstValue = this.list[0]
        for (let i = 1; i <= 10; i++) {
          this.list.unshift(firstValue - i)
        }
        this.$refs.loadmore.onTopLoaded()
      }, 1500)
    }
  },

  created() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i)
    }
  },

  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top
  }
}
</script>
