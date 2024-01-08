import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import AccountComponent from "./AccountComponent";

test("AccountComponent is rendered", async () => {
  const user = userEvent.setup();

  render(<AccountComponent />);

  expect(screen.getByText("Login")).toBeInTheDocument();

  await user.click(screen.getByTestId("account-switch"));

  expect(screen.getByText("Logout")).toBeInTheDocument();
});
