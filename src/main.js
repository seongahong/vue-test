// 이 파일은 애플리케이션의 진입점.
// 이 파일은 Vue 앱을 초기화하고 index.html파일에서 어떤 HTML 엘리먼트를 앱에 붙여야하는지 나타냄.
// 이 파일의 전역 검포넌트나 부가적인 Vue 라이브러리를 등록하는 경우가 많음.

import Vue from "vue";
import App from "./App.vue";
import "./assets/reset.css"

Vue.config.productionTip = false;

// render 함수는 h 함수(createElement의 별칭)를 자동적으로 전달인자로 받음
// render 함수는 Vue의 실행환경에서 createElement 함수를 인자로 받고 이를 통해 반들어진 Virtual Dom의 Node를 반환하는 구조를 가짐.
// 아래의 코드에서 render: (h) => h(App)은 사실 render: (createElement) => { return createElement(App)}과 같다.
new Vue({
  render: (h) => h(App),
}).$mount("#app");
