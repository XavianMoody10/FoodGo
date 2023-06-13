import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Home } from "../pages/Home";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "../context/CartContext";
import { Cart } from "../pages/Cart";

describe("food menu navigation", () => {
  it("display food based on naviagation selection", async () => {
    render(
      <CartContextProvider>
        <MemoryRouter>
          <Home></Home>
        </MemoryRouter>
      </CartContextProvider>
    );

    const navLinks = await screen.findAllByRole("listitem");
    fireEvent.click(navLinks[1]);
    await waitFor(() => screen.findByText(/the classic burger/i));
    fireEvent.click(navLinks[2]);
    await waitFor(() => screen.findByText(/hawaiian pizza/i));
    fireEvent.click(navLinks[3]);
    await waitFor(() => screen.findByText(/apple pie/i));
    fireEvent.click(navLinks[4]);
    await waitFor(() => screen.findByText(/fruit salad/i));
  });
});

describe("food menu search bar functionality", () => {
  it("search for The Classic Burger", async () => {
    render(
      <CartContextProvider>
        <MemoryRouter>
          <Home></Home>
        </MemoryRouter>
      </CartContextProvider>
    );

    const searchInput = screen.getByRole("search-bar");

    fireEvent.change(searchInput, { target: { value: "the classic" } });

    expect(await screen.findByText(/the classic burger/i));

    fireEvent.change(searchInput, { target: { value: "pep" } });

    expect(await screen.findByText(/Pepperoni Pizza/i));
  });
});

describe("Food option selecting", () => {
  it("cart icon increments when items are added to cart", async () => {
    render(
      <CartContextProvider>
        <MemoryRouter>
          <Home></Home>
        </MemoryRouter>
      </CartContextProvider>
    );

    const cartNumber = screen.getByRole("cart-number");
    const addButtons = await screen.findAllByText(/add to cart/i);

    fireEvent.click(addButtons[0]);

    expect(cartNumber.textContent).toBe("1");

    await waitFor(() => screen.findByRole("cart-message"));
  });
});

describe("Food option selecting and navigate to cart page", () => {
  it("renders headline", async () => {
    render(
      <CartContextProvider>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
        </MemoryRouter>
      </CartContextProvider>
    );

    const cartIcon = screen.getByRole("cart-icon");

    const addToCartButton = screen.getAllByText(/add to cart/i);

    fireEvent.click(addToCartButton[0]);

    expect(cartIcon).toBeInTheDocument();

    fireEvent.click(cartIcon);

    expect(await screen.findByText(/the classic burger/i)).toBeInTheDocument();

    fireEvent.click(await screen.findByText(/increase quantity/i));

    expect(screen.getByRole("qty-number").textContent).toBe("2");

    fireEvent.click(await screen.findByText(/decrease quantity/i));

    expect(screen.getByRole("qty-number").textContent).toBe("1");

    fireEvent.click(await screen.findByText(/decrease quantity/i));

    expect(screen.queryByText(/the classic burger/i)).not.toBeInTheDocument();
  });
});
