import { fireEvent, render } from "@testing-library/react";
// import { describe, it, expect } from "vitest";
import App from "./App";

describe.skip("sample test", () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  })

  it('renders', () => {
    const { getByRole } = render(<App />);
    const h1 = getByRole("heading");
    expect(h1).toHaveTextContent("Vite + React")

  })
});

describe("counter", () => {
  it('renders counter with 0', () => {
    const { getByRole } = render(<App />);
    const counter = getByRole("button");
    expect(counter).toHaveTextContent("count is 0");
  });

  it('click on button increase counter by 1', async () => {
    const { getByRole } = render(<App />);
    const counter = getByRole("button");
    await fireEvent.click(counter);

    expect(counter).toHaveTextContent("count is 1")
    
    await fireEvent.click(counter);
    expect(counter).toHaveTextContent("count is 2")
  });
})