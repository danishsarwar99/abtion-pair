import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import Game from "./Game"

afterEach(cleanup)
it("Renders the main component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game/>, div)
})

it("Renders the input field", async () => {
    render(<Game/>)
    const input = await screen.findByRole('input', {name: 'userInput'})
    expect(input).toBeInTheDocument();
})
