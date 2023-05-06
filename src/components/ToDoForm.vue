<template>
    <!-- [@event] 이벤트 핸들러 속성 -->
    <!-- @event.prevent는 자바스크립트의 event.preventDefault()와 같이 이벤트가 발생했을때, 새로고침을 방지함. -->
    <form @submit.prevent="onSubmit">
        <h2 class="label-wrapper">
            <label for="new-todo-input" class="label__lg">What needs to be done?</label>
        </h2>
        <!-- [v-model] 양식입력요소 또는 구성요소에 양방향 바인딩을 만드는 속성 -->
        <!-- v-model.trim은 입력전후의 공백을 제거하는 속성.-->
        <!-- v-model.lazy는 텍스트 입력값을 동기화할 때 사용. -->
        <input
        type="text"
        id="new-todo-input"
        name="new-todo"
        autocomplete="off"
        v-model.lazy.trim="label"
        class="input__lg"
        /> 
        <button type="submit" class="btn btn__primary btn__lg">Add</button>
    </form>
</template>

<script>
export default {
    methods: {
        onSubmit() {
            if (this.label === "") {
                return;
            }
            // [$emit]는 부모컴포넌트로 변경값을 보낸다. 
            this.$emit("todo-added", this.label)
            this.label = ""
        },
    },
    // input에 data를 입력해 새 할 일을 추가할 수 있는 메서드를 data함수에 작성
    // 1. 초깃값 빈문자열로 설정.
    data() {
        return {
            label: "",
        }
    }
};
</script>