    
<template>
    <div class="page-infinite">
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <h1>Infinite Scroll</h1>
        <p>当即将滚动至列表底部时, 自动加载更多数据</p>
        <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="50"
            >
                <li v-for="item in list" :key="item">{{ item }}</li>
            </ul>
            <p v-show="loading">
                <mt-spinner type="fading-circle"></mt-spinner>加载中...
            </p>
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
            loading: false,
            allLoaded: false,
            wrapperHeight: 0
        }
    },
    methods: {
        loadMore() {
            this.loading = true
            setTimeout(() => {
                let last = this.list[this.list.length - 1]
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i)
                }
                this.loading = false
            }, 2500)
        }
    },
    mounted() {
        this.wrapperHeight =
            document.documentElement.clientHeight -
            this.$refs.wrapper.getBoundingClientRect().top
        for (let i = 1; i <= 20; i++) {
            this.list.push(i)
        }
    }
}
</script>