<!-- Vue 애플리케이션의 최상위 컴포넌트. -->

<!-- 1. 컴포넌트 템플릿을 정의하는 파트 -->
<!-- 컴포넌트의 모든 마크업 구조와 디스플레이 로직을 포함함. -->
<!-- HTML구문, 일부 Vue에 특화된 구문도 포함할 수 있음. -->
<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <!-- v-for 구문은 템플릿 내부에 루프를 포함시켜 배열의 각 항목에 대한 템플릿 기능의 렌더링을 반복할 수 있는 Vue내장 지시문. -->
      <!-- v-for 구문은 자바스크립트의 for...in 루프와 같은 역할을 한다. -->
      <!-- 반복하려는 요소에 연결하고 해당 요소와 그 자식을 렌더링함. -->
      <li v-for="item in ToDoItems" :key="item.id">
        <!-- label prop에 value 값을 넣어준다. -->
        <to-do-item :label="item.label" :done="true"></to-do-item>
      </li>
    </ul>
  </div>
</template>

<!-- 2. script를 작성하는 파트 -->
<!-- 컴포넌트 화면에 표시되지 않는 모든 로직을 포함함. -->
<!-- export 되는 js 오브젝트가 있어야함. -->
<!-- 이 오브젝트에서 로컬 컴포넌트 등록, 컴포넌트 인풋(props)정의, 로컬 상태관리, 메서드 정의 등 작업이 이루어짐 -->
<!-- 빌드 단계에서 이 오브젝트가 처리되고, 템플릿과 함께 render() 함수를 통해 vue 컴포넌트로 변환됨 -->
<script>
import ToDoItem from "./components/ToDoItem.vue";
import uniqueId from "lodash.uniqueid";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
  data() {
    return {
      ToDoItems: [
        { id: uniqueId("todo-"), label: "Learn Vue", done: false },
        {
          id: uniqueId("todo-"),
          label: "Create a Vue project with the CLI",
          done: true,
        },
        { id: uniqueId("todo-"), label: "Have fun", done: true },
        { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
      ],
    };
  },
};
</script>

<!-- 3. style정보를 작성하는 파트 -->
<!-- css를 포함함 -->
<!-- <style lang="scss"> 라고 작성하면 스타일링 정보에 SCSS 문법을 사용할 수 있음. -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
