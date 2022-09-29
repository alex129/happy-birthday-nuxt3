import { defineStore } from 'pinia'

export interface CatState {
  cats: Cat[] | undefined[]
}
const state = (): CatState => ({
  cats: [],
})

const getters = {
  allTrapped: (state) => {
    return (
      state.cats.length > 0 && state.cats.length === state.cats.filter((c: Cat) => c.trapped).length
    )
  },
}

const actions = {
  add(cat: Cat) {
    this.cats.push(cat)
  },
  trap(cat: Cat) {
    cat.trapped = true
    cat.show = false
  },
}
export const useCatsStore = defineStore('cats', {
  state,
  getters,
  actions,
})
