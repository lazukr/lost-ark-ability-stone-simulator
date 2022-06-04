import { render, screen } from '@testing-library/react';
import { RowSelect } from '../AbilityStone';
import { FacetNodeState } from "./FacetNode";
import { Stone } from "./Stone";

const dummyUpdate = (row: RowSelect) => {};

test("Stone has 3 rows", () => {
    const nodes = [FacetNodeState.Empty];
    render( <Stone 
                rates={75}
                topRow={nodes}
                midRow={nodes}
                botRow={nodes}
                updateStone={dummyUpdate}

            />);
    const displayNodes = screen.getAllByRole("button");
    expect(displayNodes.length).toBe(3);
});

test("Stone shows correct rates", () => {
    const nodes = [FacetNodeState.Empty];
    render( <Stone 
                rates={75}
                topRow={nodes}
                midRow={nodes}
                botRow={nodes}
                updateStone={dummyUpdate}
            />);
    const text = screen.getByText("Success Rates: 75%");
    expect(text).toBeInTheDocument();
});