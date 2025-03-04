import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /Hi there! I'm a React app. I am also a Docker container./i
    );
    expect(linkElement).toBeInTheDocument();
});
