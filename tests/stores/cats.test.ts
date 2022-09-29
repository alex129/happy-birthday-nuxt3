import { setActivePinia, createPinia } from 'pinia'
import { describe, test, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import { useCatsStore } from '../../store/cats'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('initializes', () => {
  test('works', () => {
    expect(true).toBe(true)
  })
})

describe('useTodoStore', () => {
  let store: ReturnType<typeof useCatsStore>

  beforeEach(() => {
    store = useCatsStore()
  })

  afterEach(() => {
    store.$reset()
  })

  test('references a store', () => {
    expect(store).toBeDefined()
  })

  test('get cats value should be empty', () => {
    expect(store.cats.length).toBe(0)
  })

  test('add cats with action', () => {
    const cats: Cat[] = [
      { show: false, caught: false, position: 0 },
      { show: false, caught: false, position: 0 },
      { show: false, caught: false, position: 0 },
      { show: false, caught: false, position: 0 },
    ]
    cats.forEach((cat) => {
      store.add(cat)
    })
    expect(store.cats.length).toBe(4)
  })
})
