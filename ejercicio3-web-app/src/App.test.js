import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

describe("App component tests", () => {
  it("renders system info title", () => {
    render(<App />);
    expect(screen.getByText("Ejercicio 3 — Información del Sistema")).toBeTruthy();
  });
});
