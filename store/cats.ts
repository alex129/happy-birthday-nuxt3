import { defineStore } from 'pinia'

export interface CatState {
  cats: Cat[] | undefined[]
}
const state = (): CatState => ({
  cats: [],
})

const actions = {
  add(cat: Cat) {
    this.cats.push(cat)
  },
}
export const useCatsStore = defineStore('cats', {
  state,
  actions,
})
