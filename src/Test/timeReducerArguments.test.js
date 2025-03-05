import { updateTimes, initializeTimes } from "../Functions/timeReducerArguments";

describe("Functions used in availableTimes reducer setup", () => {
    test("Returns a filled array", ()=> {
        expect(initializeTimes()).not.toHaveLength(0);
    })
    test("Returns a filled array", () => {
        expect(updateTimes(0, "03-04-2025")).not.toHaveLength(0);
    })
})