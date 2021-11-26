<template>
    <div>
        <button type="submit" id="btn" @click="demo()">add one</button>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  title = 'Wrapper'
  counter = 0
  demo(){
      this.counter=this.counter+1;
  }
}
</script>