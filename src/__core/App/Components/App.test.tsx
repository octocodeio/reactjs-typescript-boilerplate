import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

function renderAppComponent(){
  const defaultProps = {
    compiler: "compiler",
    framework: "framework" 
  };
  return render(<App {...defaultProps}/>);
}

describe("<LoginForm />", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
    const { findByTestId } = renderAppComponent();
    const appComponent = findByTestId('app-component');
  });
});