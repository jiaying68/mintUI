<template>
    <div>
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <ul id="tables">
            <li>
                <!-- 这个表格盛放的是名称 -->
                <table>
                    <tr>
                        <td>222</td>
                    </tr>
                    <tr>
                        <td>bb</td>
                    </tr>
                    <tr>
                        <td>222</td>
                    </tr>
                    <tr>
                        <td>bb</td>
                    </tr>
                </table>
            </li>
            <li class="container" id="scrollContainer" ref="tableContent">
                <!-- 这个表格盛放的是内容 -->
                <table ref="table">
                    <tr>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                    </tr>
                    <tr>
                        <td>bb</td>
                        <td>cc</td>
                        <td>dd</td>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                    </tr>
                    <tr>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                    </tr>
                    <tr>
                        <td>bb</td>
                        <td>cc</td>
                        <td>dd</td>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                        <td>222</td>
                        <td>333</td>
                        <td>444</td>
                    </tr>
                </table>
            </li>
        </ul>
        <div class="barsContainer" id="barsContainer">
            <div v-for="item in dots" :key="item" class="bars"></div>
        </div>
    </div>

</template>

<style>
    
    table{
        border-right:1px solid #F00;
        border-bottom:1px solid #F00;
    } 
    table td{
        border-left:1px solid #F00;
        border-top:1px solid #F00;
        padding: 5px 20px;
    }
    .container{
        max-width: 80%;
        overflow-x: scroll;
    }
    li{
        float: left;
    }

    ul{
        list-style:none;
        margin: 0;
        padding: 0;
        overflow: auto;
    }

    .bars{
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 100%;
        background: #000;
        opacity: .2;
        margin: 0 3px;
    }

    .barsActive{
        background: #fff;
    }

    #barsContainer{
        text-align: center;
    }

</style>

<script>
export default {
    data(){
        return {
            contentWidth:0,
            dots:0,//记录一共有多少点
            curDot:0,//记录当前激活的点
            curScroll:0,//记录当前滚动的距离
            maxScroll:0,//记录最大滚动值
            scrollStart:0,//记录最小滚动值
            markDots:[]
        }
    },
    methods:{
        handleScroll(){   
            console.log('scrolling');
            return;
            let scrollDis = this.$refs.tableContent.scrollLeft;
            let divideNum = scrollDis/this.contentWidth-1;
            this.markDots.push(divideNum)
            if(scrollDis%this.contentWidth!=0){
                this.markDots.push(++divideNum)
            }
            console.log(this.markDots)
            let markdotsLength = this.markDots.length;
            let dots = document.getElementsByClassName("bars");
            let activeDots = document.getElementsByClassName('barsActive')
            let activeDotsLength = activeDots.length;
            let dotsLength = dots.length;
            for(let i = 0; i < activeDotsLength; i++ ){
                // this.removeClass(activeDots[i],'barsActive');
                console.log(activeDots[i])
            }
            for(let i = 0; i<markdotsLength;i++){
                // this.addClass(this.markDots[i],'barsActive');
                console.log(this.markDots[i])
            }

        },
        hasClass( elements,cName ){ 
            return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
        },
        addClass( elements,cName ){ 
            if( !this.hasClass( elements,cName ) ){ 
                elements.className += " " + cName; 
            }; 
        }, 
        removeClass( elements,cName ){ 
            if( this.hasClass( elements,cName ) ){ 
                elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
            }; 
        }
    },
    mounted(){
        let contentWidth = this.$refs.tableContent.offsetWidth;
        this.contentWidth = contentWidth;
        // console.log(`容器大小：${contentWidth}`);
        
        let tableWidth = this.$refs.table.offsetWidth;
        this.maxScroll = tableWidth;
        // console.log(`表格大小：${tableWidth}`);

        let dots = Math.ceil(tableWidth/contentWidth);
        // console.log(dots);
        this.dots = dots;
        
        // this.$refs.tableContent.addEventListener('mouseup',this.mouseup())

        this.$nextTick().then(()=>{
            let activeDot = document.getElementsByClassName("bars")[0];
            this.addClass(activeDot,'barsActive')
            // console.log(activeDot)
        });
        this.$refs.tableContent.addEventListener('mouseup', this.handleScroll())
    }
}
</script>
