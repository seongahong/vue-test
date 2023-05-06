<!-- Vue 애플리케이션의 최상위 컴포넌트. -->

<!-- 1. 컴포넌트 템플릿을 정의하는 파트 -->
<!-- 1.1. 컴포넌트의 모든 마크업 구조와 디스플레이 로직을 포함함. -->
<!-- 1.2. HTML구문, 일부 Vue에 특화된 구문도 포함할 수 있음. -->
<template>
  <div id="app">
    <h1>To-Do List</h1>
    <h2 id="list-summary">{{ listSummary }}</h2>
    <to-do-form @todo-added="addToDo"></to-do-form>
    <ul aria-labelledby="list-summary" class="stack-large">
      <!-- v-for 구문은 템플릿 내부에 루프를 포함시켜 배열의 각 항목에 대한 템플릿 기능의 렌더링을 반복할 수 있는 Vue내장 지시문. -->
      <!-- v-for 구문은 자바스크립트의 for...in 루프와 같은 역할을 한다. -->
      <!-- 반복하려는 요소에 연결하고 해당 요소와 그 자식을 렌더링함. -->
      <!-- key는 id값으로. -->
      <li v-for="item in ToDoItems" :key="item.id">
        <!-- label prop에 value 값을 넣어준다. -->
        <to-do-item :label="item.label" :done="false" :id="item.id" @checkbox-changed="updateDoneStatus(item.id)"></to-do-item>
      </li>
    </ul>
  </div>
</template>

<!-- 2. script를 작성하는 파트 -->
<!-- 2.1. 컴포넌트 화면에 표시되지 않는 모든 로직을 포함함. -->
<!-- 2.2. export 되는 js 오브젝트가 있어야함. -->
<!-- 2.3. 이 오브젝트에서 로컬 컴포넌트 등록, 컴포넌트 인풋(props)정의, 로컬 상태관리, 메서드 정의 등 작업이 이루어짐 -->
<!-- 2.4. 빌드 단계에서 이 오브젝트가 처리되고, 템플릿과 함께 render() 함수를 통해 vue 컴포넌트로 변환됨 -->
<script>
import ToDoItem from "./components/ToDoItem.vue";
import uniqueId from "lodash.uniqueid";
import ToDoForm from "./components/ToDoForm.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
    // The "ToDoForm" component has been registered but not used.
    // 위와 같은 에러는 컴포넌트를 import해왔지만 사용되지 않았을 때 생긴다.
    // 따라서 위의 tamplete 내부에서 사용한다. 
    ToDoForm
  },
  data() {
    return {
      // v-for를 사용하여 렌더링에 사용할 수 있는 목업 데이터 TodoItems[]
      // v-for를 사용할 때, 목록이 변경될 떄마다 다시 만들지 않도록 목록 요소를 패치하려고 시도함
      // 이때 요소를 적절하게 재사용하고 있는지 확인하려면 연결하는 동일한 요소에 고유한 key필요함
      ToDoItems: [
        { id: uniqueId("todo-"), label: "Learn Vue", done: false },
        {
          id: uniqueId("todo-"),
          label: "Create a Vue project with the CLI",
          done: false,
        },
        { id: uniqueId("todo-"), label: "Have fun", done: false },
        { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
      ],
    };
  },
  methods: {
    addToDo(toDoLabel) {
      this.ToDoItems.push({id:uniqueId('todo-'), label: toDoLabel, done: false})
      
    },
    updateDoneStatus(toDoId) {
      // id가 일치하는 todo항목을 찾고 해당 상태를 현재 상태와 반대로 업데이트
      const toDoToUpdate = this.ToDoItems.find((item) => item.id === toDoId)
      toDoToUpdate.done = !toDoToUpdate.done
   }
  },
  computed: {
    listSummary() {
      const numberFinishedItems = this.ToDoItems.filter((item) => item.done).length
      return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`
    }
  }
};
</script>

<!-- 3. style정보를 작성하는 파트 -->
<!-- 3.1. css를 포함함 -->
<!-- 3.2. <style lang="scss"> 라고 작성하면 스타일링 정보에 SCSS 문법을 사용할 수 있음. -->
<style>
/* Global styles */
  .btn {
    padding: 0.8rem 1rem 0.7rem;
    border: 0.2rem solid #4d4d4d;
    cursor: pointer;
    text-transform: capitalize;
  }
  .btn__danger {
    color: #fff;
    background-color: #ca3c3c;
    border-color: #bd2130;
  }
  .btn__filter {
    border-color: lightgrey;
  }
  .btn__danger:focus {
    outline-color: #c82333;
  }
  .btn__primary {
    color: #fff;
    background-color: #000;
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
  }
  .btn-group > * {
    flex: 1 1 auto;
  }
  .btn-group > * + * {
    margin-left: 0.8rem;
  }
  .label-wrapper {
    margin: 0;
    flex: 0 0 100%;
    text-align: center;
  }
  [class*="__lg"] {
    display: inline-block;
    width: 100%;
    font-size: 1.9rem;
  }
  [class*="__lg"]:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 620px) {
    [class*="__lg"] {
      font-size: 2.4rem;
    }
  }
  .visually-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
  [class*="stack"] > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  .stack-small > * + * {
    margin-top: 1.25rem;
  }
  .stack-large > * + * {
    margin-top: 2.5rem;
  }
  @media screen and (min-width: 550px) {
    .stack-small > * + * {
      margin-top: 1.4rem;
    }
    .stack-large > * + * {
      margin-top: 2.8rem;
    }
  }
  /* End global styles */
  #app {
    background: #fff;
    margin: 2rem 0 4rem 0;
    padding: 1rem;
    padding-top: 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 550px) {
    #app {
      padding: 4rem;
    }
  }
  #app > * {
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
  }
  #app > form {
    max-width: 100%;
  }
  #app h1 {
    display: block;
    min-width: 100%;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 1rem;
  }
</style>
