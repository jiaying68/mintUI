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
        <!-- <audio src="./music.mp3" id="myaudio"></audio> -->
        <!-- <button v-on:click="playPause()">暂停音乐</button> -->
        <!-- <EMBED id="ddsound" src="./music.mp3" ref="music"  align="center" border="0" width="1" height="1" loop="false"/> -->
        <div clickMusic="true" @click="onClickLeft">asdfsadf</div>
    </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'

import { Button } from 'mint-ui'
Vue.component(Button.name, Button)

export default {
    name: 'Button',
    components: {
        'mt-button': Button
    },
    data() {
        return {
            play: false
        }
    },
    methods: {
        playPause: function() {
            this.audio = new Audio()
            this.audio.src = './music.mp3'
            let playPromise
            playPromise = this.audio.play()
            if (playPromise) {
                playPromise
                    .then(() => {
                        // 音频加载成功
                        // 音频的播放需要耗时
                        that.tiemr = setInterval(() => {
                            second--
                            if (second <= 0) {
                                that.audio.pause()
                                clearInterval(that.tiemr)
                            }
                        }, 1000)
                    })
                    .catch(e => {
                        // 音频加载失败
                        console.error(e)
                    })
            }
        },

        onClickLeft() {
            this.clickButton()
            console.log('我发生了点击事件')
        }
    },
    mounted() {
        // let music = document.getElementById('myaudio')
        document.getElementById('ddsound').play()
    }
}
</script>

<style scoped>
</style>