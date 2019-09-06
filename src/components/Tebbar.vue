<template>
    <div>
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <h1 class="page-title">tebbar + tab-container</h1>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="外卖" @click.native.prevent="active = 'tab-container1'">
                <!-- <img slot="icon" src="../assets/100x100.png"> -->
                <div class="icon"></div>
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单" @click.native.prevent="active = 'tab-container2'">
                <!-- <img slot="icon" src="../assets/100x100.png"> -->
                <div class="icon"></div>
                订单
            </mt-tab-item>
            <mt-tab-item id="发现" @click.native.prevent="active = 'tab-container3'">
                <!-- <img slot="icon" src="../assets/100x100.png"> -->
                <div class="icon"></div>
                发现
            </mt-tab-item>
            <mt-tab-item id="我的" @click.native.prevent="active = 'tab-container4'">
                <!-- <img slot="icon" src="../assets/100x100.png"> -->
                <div class="icon"></div>
                我的
            </mt-tab-item>
        </mt-tabbar>

        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab-container1">
                <mt-cell v-for="n in 3" :key="n" title="tab-container 1"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
                <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container3">
                <mt-cell v-for="n in 7"  :key="n" title="tab-container 3"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container4">
                <mt-cell v-for="n in 7"  :key="n" title="tab-container 4"></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected:"订单",
            active: 'tab-container2'
        }
    }
    
}
</script>

<style>
    .icon{
        width: 30px;
        height: 30px;
        background-color:orange;
        margin: auto;
        margin-bottom: 10px;
    }
</style>