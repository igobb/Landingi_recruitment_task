import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import AddCartPage from './AddCartPage'
import { MemoryRouter } from 'react-router-dom'

describe('AddCartPage', async () => {
 it('Display and change select user input', async () => {
  render(
   <MemoryRouter>
    <AddCartPage />
   </MemoryRouter>
  )

  await waitFor(() => {
   expect(screen.getByLabelText(/select a user/i)).toBeInTheDocument()
   fireEvent.mouseDown(screen.getByText(/terry medhurst/i))
   fireEvent.click(screen.getByText(/enoch lynch/i))
   // @ts-ignore
   fireEvent.keyDown(document.activeElement, {
    key: 'Escape',
    code: 'Escape',
   })
  })

  expect(screen.getByLabelText(/select a user/i)).toHaveTextContent(
   /enoch lynch/i
  )
 })

 it('Display and change select product input', async () => {
  render(
   <MemoryRouter>
    <AddCartPage />
   </MemoryRouter>
  )

  await waitFor(() => {
   expect(screen.getByTestId(/select_product_test/i)).toBeInTheDocument()
   fireEvent.mouseDown(screen.getByText(/iphone 9/i))
   fireEvent.click(screen.getByText(/iphone X/i))
   // @ts-ignore
   fireEvent.keyDown(document.activeElement, {
    key: 'Escape',
    code: 'Escape',
   })
  })

  expect(screen.getByTestId(/select_product_test/i)).toHaveTextContent(
   /iphone X/i
  )
 })

 it('Display and have an error, when pass a text value to quantity input', async () => {
  render(
   <MemoryRouter>
    <AddCartPage />
   </MemoryRouter>
  )

  const testValue = 'abc'

  await waitFor(() => {
   const quantityInput = screen.getByRole('textbox', { name: 'Quantity' })

   expect(quantityInput).toBeInTheDocument()
   fireEvent.change(quantityInput, { target: { value: testValue } })
   //  expect(quantityInput).toHaveValue(testValue)
   fireEvent.click(screen.getByRole('button', { name: /add cart/i }))
  })
  expect(screen.getByText(/quantity must be a number/i)).toBeInTheDocument()
 })

 it('Have an error, when value is lower than 1', async () => {
  render(
   <MemoryRouter>
    <AddCartPage />
   </MemoryRouter>
  )

  const testValue = '-1'

  await waitFor(() => {
   const quantityInput = screen.getByRole('textbox', { name: 'Quantity' })

   expect(quantityInput).toBeInTheDocument()
   fireEvent.change(quantityInput, { target: { value: testValue } })
   expect(quantityInput).toHaveValue(testValue)
   fireEvent.click(screen.getByRole('button', { name: /add cart/i }))
  })
  expect(
   screen.getByText(/quantity must be greater than 0/i)
  ).toBeInTheDocument()
 })

 it('Have an error, when dont pass any value', async () => {
  render(
   <MemoryRouter>
    <AddCartPage />
   </MemoryRouter>
  )

  const testValue = ''
  await waitFor(() => {
   const quantityInput = screen.getByRole('textbox', { name: /quantity/i })

   expect(quantityInput).toBeInTheDocument()
   fireEvent.change(quantityInput, { target: { value: testValue } })
   expect(quantityInput).toHaveValue(testValue)
   fireEvent.click(screen.getByRole('button', { name: /add cart/i }))
  })
  expect(screen.getByText(/you must select value/i)).toBeInTheDocument()
 })
})
