import { setActivePinia, createPinia } from 'pinia'
import { describe, test, expect, beforeAll, beforeEach, afterAll } from 'vitest'
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

  afterAll(() => {
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
      { show: false, trapped: false, position: 0 },
      { show: false, trapped: false, position: 0 },
      { show: false, trapped: false, position: 0 },
      { show: false, trapped: false, position: 0 },
    ]
    cats.forEach((cat) => {
      store.add(cat)
    })
    expect(store.cats.length).toBe(4)
  })

  test('trap one cat should return trapped', () => {
    store.trap(store.cats[0])
    expect(store.cats[0].trapped).toBe(true)
    expect(store.allTrapped).toBe(false)
  })

  test('trap all cats should be all trapped true', () => {
    store.cats.forEach((cat: Cat) => {
      store.trap(cat)
    })
    expect(store.allTrapped).toBe(true)
  })

  test('allTraped getter should be false if theres no cats', () => {
    store.$reset()
    expect(store.allTrapped).toBe(false)
  })
})
