<template>
  <v-container app>
    <div>This is sample page.</div>
    <div>{{ msg }}</div>
    <div>{{ list }}</div>
    <div>{{ job }}</div>
    <div>{{ name }}</div>
    <div>{{ sampleText }}</div>
  </v-container>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const sample = namespace('sample')
// Components
@Component({
  components: {},
})

export default class Home extends Vue {

  // Computed
  get name(): string {
    return 'Vue'
  }

  get text(): string {
    return this.temp
  }
  set text(str: string) {
    this.temp = str
  }
  @sample.State
  public sampleText!: string

  @sample.Getter
  public getSampleText!: string

  @sample.Action
  public updateSampleText!: (str: string) => void

  // Props
  @Prop({required: false, type: String, default: 'Developer'}) public job!: string

  // data
  private msg: string = 'welcome to my app'
  private temp: string = ''
  private list: object[] = [
    {
      name: 'Preetish',
      age: '26',
    },
  ]

  // Method
  public sum(num1: number, num2: number): number {
    return num1 + num2
  }

  // Watch
  @Watch('temp')
  public contentChange(newVal: string, oldValue: string) {
    this.temp = newVal
  }

  // Emit
  @Emit()
  public changeMsg(str: string) {
    this.msg = str
  }

  // Life Hook
  public beforeCreate(): void {
    // do something
  }
  public created(): void {
    // do something
    this.updateSampleText('Vuex is working now')
  }
  public beforeMount(): void {
    // do something
  }
  public mounted(): void {
    // do something
  }
  public beforeUpdate(): void {
    // do something
  }
  public updated(): void {
    // do something
  }
  public beforeDestroy(): void {
    // do something
  }
  public $destroy(): void {
    // do something
  }
}
</script>

<style scoped>

</style>
