import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Message from '@/components/message'
import Popup from '@/components/Popup'
import Button from '@/components/button'
import InfiniteScroll from '@/components/InfiniteScroll'
import ActionSheet from '@/components/ActionSheet'
import ElementUi from '@/components/ElementUi'
import Tebbar from '@/components/Tebbar'
import Pulldown from '@/components/Pulldown'
import Selector from '@/components/Selector'
import Swipe from '@/components/Swipe'
import DatetimePicker from '@/components/DatetimePicker'
import FormValidate from '@/components/FormValidate'
import TableList from '@/components/TableList'
import Validate from '@/components/Validate'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/Message',
            name: 'message',
            component: Message
        },
        {
            path: '/Popup',
            name: 'popup',
            component: Popup
        },
        {
            path: '/Button',
            name: 'button',
            component: Button
        },
        {
            path: '/InfiniteScroll',
            name: 'InfiniteScroll',
            component: InfiniteScroll
        },
        {
            path: '/ActionSheet',
            name: 'ActionSheet',
            component: ActionSheet
        },
        {
            path: '/ElementUi',
            name: 'ElementUi',
            component: ElementUi
        },
        {
            path: '/Tebbar',
            name: 'Tebbar',
            component: Tebbar
        },
        {
            path: '/Pulldown',
            name: 'Pulldown',
            component: Pulldown
        },
        {
            path: '/Selector',
            name: 'Selector',
            component: Selector
        },
        {
            path: '/Swipe',
            name: 'Swipe',
            component: Swipe
        },
        {
            path: '/DatetimePicker',
            name: 'DatetimePicker',
            component: DatetimePicker
        },
        {
            path: '/FormValidate',
            name: 'FormValidate',
            component: FormValidate
        },
        {
            path: '/TableList',
            name: 'TableList',
            component: TableList
        },
        {
            path: '/Validate',
            name: 'Validate',
            component: Validate
        }
    ]
})