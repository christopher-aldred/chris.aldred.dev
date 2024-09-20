import Portfolio from "../page";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

it("renders correctly", () => {
  const tree = renderer.create(<Portfolio></Portfolio>).toJSON();
  expect(tree).toMatchSnapshot();
});
