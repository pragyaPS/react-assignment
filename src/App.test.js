import { render, cleanup } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "./App";
import { COUNTRY_LIST } from "./App";
const mocks = [
  {
    request: {
      query: COUNTRY_LIST,
      variables: { nameIn: ["test"] },
    },
    result: {
      data: {
        Country: [
          {
            _id: "1995",
            name: "test",
          },
        ],
      },
    },
  },
  {
    request: {
      query: COUNTRY_LIST,
      variables: { nameIn: ["Error"] },
    },
    error: new Error("An error occurred"),
  },
];
afterEach(cleanup);
test("should show Error message when exception thrown", async () => {
  const wrapperComponent = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App countryList={["Error"]} />
    </MockedProvider>
  );
  const txt = await wrapperComponent.findByText("Error! An error occurred");
  expect(txt).toBeInTheDocument();
});

test("should load data when country list fetched", async () => {
  const { findByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App countryList={["test"]} />
    </MockedProvider>
  );
  const txt = await findByText("test");
  expect(txt).toBeInTheDocument();
});
