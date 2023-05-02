// Babel의 config 파일.
// Babel은 개발용으로 사용하는 최신 javascript 기능을 상용 브라우저 호환이 가능하도록 구버전으로 번역하는 역할을 함.
// ECMA Script2015로 작성된 코드를 ES5로 변환해 IE등의 브라우저에서 동작할 수 있도록 해주는 역할을 함.
// 이 파일은 부가적인 babel 플러그인을 등록할 수 있음.
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
};
