import React from 'react'
import { render, screen } from '@testing-library/react'
import IndexPage from '../pages/index'

describe('IndexPage', () => {
  it('renders the page title', () => {
    render(<IndexPage />)
    const heading = screen.getByRole('heading', { name: /Home Page/i })
    expect(heading).toBeInTheDocument()
  })
})

