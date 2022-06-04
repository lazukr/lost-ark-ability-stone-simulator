import { render, screen } from '@testing-library/react';
import { FacetNodeState } from "./FacetNode";
import { FacetRow } from "./FacetRow";
import { RowSelect } from "../AbilityStone";
import { red, blue } from "@mui/material/colors";

const dummyUpdate = (row: RowSelect) => {};

test("Facet row renders one node", () => {
    const nodes = [FacetNodeState.Success];
    render(<FacetRow nodes={nodes} row={RowSelect.Top} updateStone={dummyUpdate} />);
    const displayNodes = screen.getAllByText(/◆/i);
    expect(displayNodes.length).toBe(1);
});

test("Facet row button not disabled when Empty", () => {
    const nodes = [FacetNodeState.Empty];   
    render(<FacetRow nodes={nodes} row={RowSelect.Top} updateStone={dummyUpdate} />);
    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
});

test("Facet row button not disabled when Fail", () => {
    const nodes = [FacetNodeState.Fail];
    render(<FacetRow nodes={nodes} row={RowSelect.Top} updateStone={dummyUpdate} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
});

test("Facet row button not disabled when Success", () => {
    const nodes = [FacetNodeState.Success];
    render(<FacetRow nodes={nodes} row={RowSelect.Top} updateStone={dummyUpdate} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
});

test("Facet row renders more than one node", () => {
    const numNodes = 6;
    const nodes = Array.from<FacetNodeState>({length:numNodes}).fill(FacetNodeState.Success);
    render(<FacetRow nodes={nodes} row={RowSelect.Top} updateStone={dummyUpdate} />);
    const displayNodes = screen.getAllByText(/◆/i);
    expect(displayNodes.length).toBe(numNodes);
});

test("Facet row renders is red", () => {
    const nodes = [FacetNodeState.Empty];
    const redColour = red[500];
    render(<FacetRow nodes={nodes} row={RowSelect.Bot} updateStone={dummyUpdate} />);
    const display = screen.getByText(/🔨/i);
    expect(display).toBeInTheDocument();
    expect(display).toHaveStyle({
        backgroundColor: redColour,
    });
});

test("Facet row renders is blue", () => {
    const nodes = [FacetNodeState.Empty];
    const blueColour = blue[500];
    render(<FacetRow nodes={nodes} row={RowSelect.Top} updateStone={dummyUpdate} />);
    const display = screen.getByText(/🔨/i);
    expect(display).toBeInTheDocument();
    expect(display).toHaveStyle({
        backgroundColor: blueColour,
    });
});