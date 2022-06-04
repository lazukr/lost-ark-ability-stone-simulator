import React from "react";
import { FacetNodeState } from "./FacetNode";
import { FacetRow } from "./FacetRow";
import { RowSelect } from "../AbilityStone";

 interface StoneProps {
    rates: number;
    topRow: FacetNodeState[];
    midRow: FacetNodeState[];
    botRow: FacetNodeState[];
    updateStone: (row: RowSelect) => void;
 }

export const Stone = ({
    rates,
    topRow,
    midRow,
    botRow,
    updateStone,
}: StoneProps) => {
    return (
        <React.Fragment>
            <h2> Success Rates: {rates}%</h2>
            <FacetRow nodes={topRow} row={RowSelect.Top} updateStone={updateStone} />
            <FacetRow nodes={midRow} row={RowSelect.Mid} updateStone={updateStone} />
            <FacetRow nodes={botRow} row={RowSelect.Bot} updateStone={updateStone} />
        </React.Fragment>
    );
};