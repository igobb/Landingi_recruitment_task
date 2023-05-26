import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import AllCartsPage from './AllCartsPage'
import { MemoryRouter } from 'react-router-dom'

describe('AllCartsPage', () => {
 it('Should render a table with carts', async () => {
  render(
   <MemoryRouter>
    <AllCartsPage />
   </MemoryRouter>
  )

  await waitFor(() => {
   const tableWithCarts = screen.getByRole('table')
   expect(tableWithCarts).toBeInTheDocument()
  })
 })

 it('Row in table should be clickable', async () => {
  render(
   <MemoryRouter>
    <AllCartsPage />
   </MemoryRouter>
  )

  await waitFor(() => {
   const tableRow = screen.getByText(/1 of User 97/i)
   expect(fireEvent.click(tableRow)).toBeTruthy()
  })
 })
})
