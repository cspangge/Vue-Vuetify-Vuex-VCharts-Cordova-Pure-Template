import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
@Module({ namespaced: true, name: 'sample' })
class Sample extends VuexModule {
  // State
  public sampleText: string = ''

  @Mutation
  public setSampleText(sampleText: string): void {
    this.sampleText = sampleText
  }
  @Action
  public updateSampleText(sampleText: string): void {
    this.context.commit('setSampleText', sampleText)
  }

  // Getter
  public getSampleText() {
    return this.sampleText
  }
}
export default Sample
