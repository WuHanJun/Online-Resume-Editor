<template>
  <div id="resume-editor">
    <nav>
      <ol>
        <li v-for="(item,idx) in resume.config"
            :class="{active: item.field === selected}"
            @click="getItem(idx)"
        >
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">

        <div v-if="resume[item.field] instanceof Array">
          <div class="resumeField" v-for="subitem in resume[item.field]"><!--resume[item.field]是数组-->
            <div class="subitem" v-for="(value,key) in subitem">  <!--subitem是数组内的对象-->
              <label> {{key}} </label>
              <input type="text" v-model="subitem[key]">
            </div>
          </div>
        </div>

        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]"><!--item对象，subitem是resume下的选中的对象-->
            <label> {{key}} </label>  <!--resume[item.field]是对象，key是键名-->
            <input type="text" v-model="resume[item.field][key]">
        </div>

      </li>
    </ol>
  </div>
</template>

<style lang="scss"  rel="stylesheet/scss" scoped>
  #resume-editor {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .25);
    display: flex;
    overflow: auto;

  >nav {
    width: 80px;
    background: #000;
    color: #fff;

  >ol {

  >li {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;

  &.active {
    background: #fff;
    color: #000;
  }
  }
  }
  }
  >.panels {
    flex-grow:1;
       > li {
      padding: 24px;
       }
   }
  svg.icon {
    width: 24px;
    height: 24px;
  }
  }

  ol {
    list-style: none;
  }
  .resumeField{
  > label{
      display: block;
    }
  input[type=text]{
    margin: 16px 0;
    border: 1px solid #ddd;
    box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
    width: 100%;
    height: 40px;
    padding: 0 8px;
  }
  }
</style>
<script>
  export default {
    name: 'ResumeEditor',
    computed: {
      selected () {
    return this.$store.state.selected
  },
  resume() {
    return this.$store.state.resume
  }
  },
  methods: {
    getItem(idx) {
      this.$store.commit('isActive', idx)
    }
  }

  }
</script>
