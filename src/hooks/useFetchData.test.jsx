import { beforeEach, describe, expect, it, vi } from 'vitest'
import useFetchData from './useFetchData'
import { renderHook, waitFor } from '@testing-library/react'
import { act } from 'react'

describe('Requests', () => {
  it('Display correct data when resolved', async () => {
    vi.stubGlobal('fetch', async () => ({
      ok: true,
      json: async () => [
        {
          id: 1,
          title: 'title',
        },
      ],
    }))

    const { result } = renderHook(useFetchData)

    expect(result.current.loading).toBeTruthy()
    expect(result.current.data).toBeNull()

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy()
    })

    expect(result.current.data[0].id).toBe(1)
    expect(result.current.data[0].title).toBe('title')
  })

  it('Throws error when rejected', async () => {
    vi.stubGlobal('fetch', async () => ({
      ok: false,
      json: async () => [
        {
          id: 1,
          title: 'title',
        },
      ],
    }))

    const { result } = renderHook(useFetchData)

    expect(result.current.loading).toBeTruthy()
    expect(result.current.error).toBeNull()

    await waitFor(() => {
      expect(result.current.error).not.toBeNull()
    })
  })
})

describe('Quantity manipulation', () => {
  let result
  beforeEach(async () => {
    vi.stubGlobal('fetch', async () => ({
      ok: true,
      json: async () => [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    }))
    ;({ result } = renderHook(useFetchData))

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy()
    })
  })

  it('Increments data with increseQuantity', () => {
    expect(result.current.data[0].quantity).toBe(0)
    act(() => {
      result.current.increaseQuantity(1)
    })
    expect(result.current.data[0].quantity).toBe(1)

    expect(result.current.data[1].quantity).toBe(0)
    act(() => {
      result.current.increaseQuantity(2)
    })
    expect(result.current.data[1].quantity).toBe(1)
  })

  it("Doesn't incremnt if quantity is more than 99", () => {
    expect(result.current.data[0].quantity).toBe(0)

    act(() => {
      for (let i = 0; i < 99; i++) {
        result.current.increaseQuantity(1)
      }
    })
    expect(result.current.data[0].quantity).toBe(99)

    act(() => {
      result.current.increaseQuantity(1)
    })
    expect(result.current.data[0].quantity).not.toBe(100)
  })

  it('Decrease data with decreaseQuantity', () => {
    act(() => {
      result.current.increaseQuantity(1)
      result.current.increaseQuantity(1)
    })
    act(() => {
      result.current.decreaseQuantity(1)
    })

    expect(result.current.data[0].quantity).toBe(1)
  })

  it("Doesn't decrement if quantity is less than 0", () => {
    act(() => {
      result.current.decreaseQuantity(1)
    })

    expect(result.current.data[0].quantity).toBe(0)
  })

  it('Sets all quantities to 0 with clearAllQuantities', () => {
    act(() => {
      result.current.increaseQuantity(1)
      result.current.increaseQuantity(2)
      result.current.increaseQuantity(3)
    })

    expect(result.current.data[0].quantity).toBe(1)
    expect(result.current.data[1].quantity).toBe(1)
    expect(result.current.data[2].quantity).toBe(1)

    act(() => {
      result.current.clearAllQuantities()
    })

    expect(result.current.data[0].quantity).toBe(0)
    expect(result.current.data[1].quantity).toBe(0)
    expect(result.current.data[2].quantity).toBe(0)
  })
})
