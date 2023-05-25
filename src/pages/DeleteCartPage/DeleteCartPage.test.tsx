import {fireEvent, render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react"
import DeleteCartPage from "./DeleteCartPage"
import { MemoryRouter } from "react-router-dom"

describe("DeleteCartPage", async () => {
  it("Display and change select input", async () => {
    render(<MemoryRouter><DeleteCartPage /></MemoryRouter>)

    await waitFor(() => {
      expect(screen.getByLabelText(/select a cart/i)).toBeInTheDocument()
      fireEvent.mouseDown(screen.getByText(/cart number 1 of user 97/i))
      fireEvent.click(screen.getByText(/cart number 2 of user 30/i))
      // @ts-ignore
      fireEvent.keyDown(document.activeElement, {
        key: "Escape",
        code: "Escape"
      })      
    })

    expect(screen.getByLabelText(/select a cart/i)).toHaveTextContent(
      /cart number 2 of user 30/i
    );
  }),

  it("Should render button", async () => {
    render(<MemoryRouter><DeleteCartPage /></MemoryRouter>)

    await waitFor(() => expect(screen.getByText(/delete cart/i)).toBeInTheDocument()) 
  })
})