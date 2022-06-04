import { AbilityStone, FacetNodeState, RowSelect } from "./AbilityStone";

test("Rare Ability Stone has 6 nodes.", () => {
    const as = AbilityStone.getRare(75);
    expect(as.topNodes.length).toBe(6);
});

test("Epic Ability Stone has 8 nodes.", () => {
    const as = AbilityStone.getEpic(75);
    expect(as.topNodes.length).toBe(8);
});

test("Legendary Ability Stone has 9 nodes.", () => {
    const as = AbilityStone.getLegend(75);
    expect(as.topNodes.length).toBe(9);
});

test("Relic Ability Stone has 10 nodes.", () => {
    const as = AbilityStone.getRelic(75);
    expect(as.topNodes.length).toBe(10);
});

test("Rates is set to provided value.", () => {
    const rates = 25;
    const as = AbilityStone.getEpic(rates);
    expect(as.rates).toBe(rates);
});

test("Update with 100% always succeeds.", () => {
    const rates = 100;
    const row = [FacetNodeState.Empty];
    const [ , newRow] = AbilityStone.updateRow(rates, row);
    expect(newRow[0]).toBe(FacetNodeState.Success);
});

test("Update with 100% reduces rates.", () => {
    const rates = 100;
    const row = [FacetNodeState.Empty];
    const [newRates, ] = AbilityStone.updateRow(rates, row);
    expect(newRates).toBe(90);
});

test("Update with 0% always fails.", () => {
    const rates = 0;
    const row = [FacetNodeState.Empty];
    const [ , newRow] = AbilityStone.updateRow(rates, row);
    expect(newRow[0]).toBe(FacetNodeState.Fail);
});

test("Update with 0% increases rates.", () => {
    const rates = 0;
    const row = [FacetNodeState.Empty];
    const [newRates, ] = AbilityStone.updateRow(rates, row);
    expect(newRates).toBe(10);
});

test("Update top row works.", () => {
    const as = AbilityStone.getEpic(100);
    const result = as.updateStone(RowSelect.Top);
    expect(result.topNodes[0]).toBe(FacetNodeState.Success);
});

test("Update mid row works.", () => {
    const as = AbilityStone.getEpic(100);
    const result = as.updateStone(RowSelect.Mid);
    expect(result.midNodes[0]).toBe(FacetNodeState.Success);
});

test("Update bot row works.", () => {
    const as = AbilityStone.getEpic(100);
    const result = as.updateStone(RowSelect.Bot);
    expect(result.botNodes[0]).toBe(FacetNodeState.Success);
});