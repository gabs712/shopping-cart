import { beforeEach, describe, expect, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

const dataInfo = [
  {
    id: 1,
    image: '',
    title: 'title',
    price: 12,
    quantity: 0,
  },
]

describe('Header', () => {
  let user
  beforeEach(() => {
    render(<Header dataInfo={dataInfo} />, { wrapper: MemoryRouter })
    user = userEvent.setup()
  })

  it('Highlights current navlink', async () => {
    const [home, products] = screen.getAllByRole('link')
    const highlight = /after:content/

    expect(home).toHaveClass(highlight)
    expect(products).not.toHaveClass(highlight)

    await user.click(products)

    expect(products).toHaveClass(highlight)
    expect(home).not.toHaveClass(highlight)
  })

  it('Animates current highlight after clicking link', async () => {
    const [home, products] = screen.getAllByRole('link')
    const animation = /after:animate/

    expect(home).not.toHaveClass(animation)
    expect(products).not.toHaveClass(animation)

    await user.click(products)

    expect(home).not.toHaveClass(animation)
    expect(products).toHaveClass(animation)

    await user.click(home)

    expect(home).toHaveClass(animation)
    expect(products).not.toHaveClass(animation)
  })
})
