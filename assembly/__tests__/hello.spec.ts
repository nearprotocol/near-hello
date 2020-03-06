import { VM } from "wasm-mock-vm";
import { generateLogs, returnHiWithLogs, triggerAssert } from "..";
import { storage } from "near-runtime-ts";

describe("logs", () => {
  it("should be added", () => {
    generateLogs(); // adds "item" => "value" to storage
    const logs = VM.outcome().logs;
    expect(logs).toIncludeEqual("log1");
    expect(logs).toIncludeEqual("log2");
    expect(storage.get<string>("item")).toBe("value");
  });

  it("should be cumulative", () => {
    expect(returnHiWithLogs()).toBe("Hi");
    const logs = VM.outcome().logs;
    expect(logs.length).toBe(4, "four log methods have been trigged");
    expect(logs).toIncludeEqual("loooog1");
    expect(logs).toIncludeEqual("loooog2");
  });

  throws("add to log before an assert", () => {
    triggerAssert();
  });

  it("logs should include pre assert log", () => {
    const outcome = VM.outcome();
    log(outcome);
    const logs = outcome.logs;
    expect(logs.length).toBe(5);
    expect(logs).toIncludeEqual("log before assert");
  });

});