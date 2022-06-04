
export enum FacetNodeState {
    Empty,
    Fail,
    Success,
};

export enum RowSelect {
    Top,
    Mid,
    Bot,
};

export interface AbilityStoneProps {
    rates: number;
    topNodes: FacetNodeState[];
    midNodes: FacetNodeState[];
    botNodes: FacetNodeState[];
}

const rareNodes = Array.from<FacetNodeState>({length: 6}).fill(FacetNodeState.Empty);
const epicNodes = Array.from<FacetNodeState>({length: 8}).fill(FacetNodeState.Empty);
const legendNodes = Array.from<FacetNodeState>({length: 9}).fill(FacetNodeState.Empty);
const relicNodes = Array.from<FacetNodeState>({length: 10}).fill(FacetNodeState.Empty);

export class AbilityStone {
    rates: number;
    topNodes: FacetNodeState[];
    midNodes: FacetNodeState[];
    botNodes: FacetNodeState[];

    constructor({
        rates,
        topNodes,
        midNodes,
        botNodes,
    }: AbilityStoneProps) {
        this.rates = rates;
        this.topNodes = topNodes;
        this.midNodes = midNodes;
        this.botNodes = botNodes;
    }

    getRow = (select: RowSelect) => {
        switch(select) {
            case RowSelect.Top:
                return this.topNodes;
            case RowSelect.Mid:
                return this.midNodes;
            case RowSelect.Bot:
                return this.botNodes;
        }
    } 

    static getRare(rates: number) {
        return new AbilityStone({
            rates: rates,
            topNodes: rareNodes,
            midNodes: rareNodes,
            botNodes: rareNodes,
        });
    }

    static getEpic(rates: number) {
        return new AbilityStone({
            rates: rates,
            topNodes: epicNodes,
            midNodes: epicNodes,
            botNodes: epicNodes,
        });
    }

    static getLegend(rates: number) {
        return new AbilityStone({
            rates: rates,
            topNodes: legendNodes,
            midNodes: legendNodes,
            botNodes: legendNodes,
        });
    }

    static getRelic(rates: number) {
        return new AbilityStone({
            rates: rates,
            topNodes: relicNodes,
            midNodes: relicNodes,
            botNodes: relicNodes,
        });
    }

    static updateRow(rates: number, row: FacetNodeState[]): [number, FacetNodeState[]] {
        const roll = Math.random() * 100;
        const success = roll <= rates;
        const result = success ? FacetNodeState.Success : FacetNodeState.Fail;
        const index = row.findIndex(node => node === FacetNodeState.Empty);
        const newRow = row.map(i => i);
        newRow[index] = result;
        const newRates = success ? Math.max(rates - 10, 25) : Math.min(rates + 10, 75);
        return [newRates, newRow];
    }

    updateStone(selection: RowSelect): AbilityStone {
        const [newRates, newRow] = AbilityStone.updateRow(this.rates, this.getRow(selection));
        return new AbilityStone({
            rates: newRates,
            topNodes: selection === RowSelect.Top ? newRow : this.topNodes,
            midNodes: selection === RowSelect.Mid ? newRow : this.midNodes,
            botNodes: selection === RowSelect.Bot ? newRow : this.botNodes,
        });
    }
}