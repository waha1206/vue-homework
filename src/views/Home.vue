<template>
  <div class="home">
    <h1 v-bind:id="dynamicId">這是我的開始</h1>
    <button @[eventName]="showAlert" :disabled="isButtonDisable">
      我是按鈕
    </button>
    <div>
      {{ num ? 'num 是 1' : 'num 是 0' }}
    </div>

    <p v-if="isShow">你看的到我嗎？</p>

    <div>
      <a :href="url">{{ url }}</a>
    </div>
    <div>
      <div>
        <br />
        <input type="text" v-model="message" />
      </div>
      <p>computed reversed message:{{ resverMessage }}</p>
    </div>
    <div>
      <button @click="startDate">啟動定時器</button>
      <p>{{ showDate }}</p>
    </div>
    <div>
      <h3 class="title-border">一般情況 computed setter 被觸發的時間點</h3>
      <form class="pure-form">
        <input type="text" v-model="fullName" />
      </form>
      <p>
        firstName: {{ firstName }} <br />
        lastName: {{ lastName }}
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      dynamicId: 'test',
      isButtonDisable: false,
      num: 1,
      isShow: false,
      url: 'http://google.com',
      eventName: 'click',
      message: '',
      count: 0,
      firstName: 'Leo',
      lastName: 'Yang'
    }
  },
  methods: {
    showAlert() {
      alert('你點到我了')
    },
    startDate() {
      const that = this
      setInterval(function() {
        that.count += 1
        console.log(that.count)
      }, 1000)
    }
  },
  computed: {
    showDate() {
      console.log('執行一次')
      return this.count + '次' + Date.now()
    },
    resverMessage() {
      return this.message
        .split('')
        .reverse()
        .join('')
    },
    fullName: {
      get() {
        console.log('computed getter')
        return this.firstName + ' ' + this.lastName
      },
      set(value) {
        console.log('computed setter')
        this.firstName = value.split(' ')[0]
        this.lastName = value.split(' ')[1]
      }
    }
  },
  updated() {
    console.log('updated')
  }
}
</script>
