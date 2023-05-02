<template>
  <div>
    <!-- v-bind는 js표현식을 HTML요소 및 구성 요소에 바인딩하는 특수 구문임. -->
    <!-- v-bind:attribute="expression" 또는 :attribute="expression" -->
    <input type="checkbox" id="todo-item" v-bind:checked="isDone" />
    <!-- 여기서 {{}}는 vue의 특수 템플릿 구문, 값과 메서드를 포함하여 클래스에 정의된 js표현식의 결과를 템플릿 내부에 print할 수 있음. -->
    <!-- {{}} 내부의 컨텐츠는 HTML이 아닌 텍스트로 표시됨. 지금의 경우, label prop의 value를 print -->
    <label :for="id">{{ label }}</label>
  </div>
</template>

<!-- props를 객체로 정의. 각각의 키가 props의 이름이 됨. 기본값을 지정할 수 있고 해당 props이 필수값인지 표시할 수 있음. -->
<script>
import uniqueId from "lodash.uniqueid";

export default {
  props: {
    // label prop은 required, type속성을 갖는 객체이다.
    // required 속성은 이 컴포넌트의 모든 인스턴스가 레이블 필드를 반드시 가져야한다는 의미.
    // type 속성은 label prop이 string 값을 가질 것임을 vue에게 알려줄 수 있음.
    label: {
      required: true,
      type: String,
    },
    // done prop은 default, type 속성을 갖는 객체이다.
    // default 속성은 이 컴포넌트가 done prop을 받지 못했을 때, 기본값으로 false를 갖는다는 의미 (default값)
    done: {
      default: false,
      type: Boolean,
      // mapping 할때 필요한 고유한 id? key prop같은 개념?
      id: uniqueId("todo-"),
    },
  },
  // data 함수는 런타임에 컴포넌트의 각각의 인스턴스에 대해 데이터 값들을 고유하게 유지하기 위함이다.
  // 이 함수는 각각의 컴포넌트 인스턴스에 대해 별도로 호출됨.
  // 데이터를 단순한 객체로 선언한 경우 해당 컴포넌트의 모든 인스턴스는 동일한 값을 공유함.
  // 내부 데이터에서 컴포넌트의 props 및 기타 속성에 접근하는 데 this를 사용한다.
  // 화살표 함수에서 작동하는 방식 (부모 컨텍스트에 바인딩) 때문에 화살표 함수를 사용하는 경우 내부에서 필요한 속성에 this로 접근할 수 없음.
  // data 속성에 화살표 함수를 사용하지 말자.
  data() {
    return {
      isDone: this.done,
    };
  },
};
</script>
