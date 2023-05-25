import { fireEvent, getByText, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import {describe, it} from "vitest";

import ErrorPage from "./ErrorPage";
import App from "../../App";
import { toHaveTextContent } from "@testing-library/jest-dom/matchers";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("ErrorPage", () => {
  it("Renders a error message", () => {
    render(<MemoryRouter><ErrorPage /></MemoryRouter>)
    

    expect(screen.getByRole('heading', {level:1})).toHaveTextContent(/We dont know site like this./i)
  }),
  it("Renders a back button", async () => {
    render(<ErrorPage />, {wrapper: BrowserRouter})

    const linkButton = screen.getByText(/go home/i)

    expect(linkButton).toBeInTheDocument();
  
  })
})
