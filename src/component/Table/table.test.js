import { render, cleanup } from "@testing-library/react";
import { PARAM_NO_RECORD_FOUND } from "../../utils/constants";
import Table from "./table";

describe("test rows", () => {
  test("should render no data found when data is blank array", () => {
    let tableWrapper = render(<Table rows={[]} />);
    expect(tableWrapper.findByText(PARAM_NO_RECORD_FOUND)).toBeInTheDocument;
  });
  test("should render data if passed", () => {
    let mockRows = [
      {
        _id: "303",
        name: "Australia",
        __typename: "Country",
      },
    ];
    let tableWrapper = render(<Table rows={mockRows} />);
    expect(tableWrapper.findByText("Australia")).toBeInTheDocument;
  });
});
