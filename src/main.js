import 'babel-polyfill';
import Vue from "vue";
import ViewUI from "view-design";
// import ViewUI from "iview";
import "view-design/dist/styles/iview.css";
import "./assets/font_icon/iconfont.css";
Vue.use(ViewUI);
import expressionEditor from "./components/expressionEditor";
Vue.component("expressionEditor", expressionEditor);
import jsonData from "./components/jsondata";
new Vue({
    template: `<expression-editor :settings="settings" @confirm="confirm" @cancel="cancel" v-model="val"></expression-editor>`,
    data() {
        return {
            settings: jsonData.data,
            val: ''
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        confirm() {},
        cancel() {}
    }
}).$mount("#app");