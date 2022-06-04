import { render, screen } from '@testing-library/react';
import { FacetNode, FacetNodeState } from "./FacetNode";
import { red, blue } from "@mui/material/colors";

test("Facet renders empty node with ⬦", () => {
    render(<FacetNode state={FacetNodeState.Empty} colour={red[500]} />);
    const element = screen.getByText(/⬦/i);
    expect(element).toBeInTheDocument();
});

test("Facet renders success node with ◆", () => {
    render(<FacetNode state={FacetNodeState.Success} colour={red[500]} />);
    const element = screen.getByText(/◆/i);
    expect(element).toBeInTheDocument();
});

test("Facet renders fail node with ◆", () => {
    render(<FacetNode state={FacetNodeState.Fail} colour={red[500]}/>);
    const element = screen.getByText(/◆/i);
    expect(element).toBeInTheDocument();
});

test("Facet renders empty nodes with grey colour", () => {
    const emptyColour = "#CCCCCC";
    const colour = red[500];
    render(<FacetNode state={FacetNodeState.Empty} colour={colour} />);
    const element = screen.getByText(/⬦/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
        color: emptyColour,
    })
});

test("Facet renders success nodes with corresponding colour", () => {
    const colour = red[500];
    render(<FacetNode state={FacetNodeState.Success} colour={colour} />);
    const element = screen.getByText(/◆/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
        color: colour,
    })
});

test("Facet renders failed nodes with black colour", () => {
    const failedColour = "#000000"; 
    const colour = red[500];
    render(<FacetNode state={FacetNodeState.Fail} colour={colour} />);
    const element = screen.getByText(/◆/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
        color: failedColour,
    })
});