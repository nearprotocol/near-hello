import { VM } from "near-sdk-as";
import {crossContract, generateLogs, returnHiWithLogs, triggerAssert} from "..";
import { storage } from "near-sdk-as";

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
    expect(logs.length).toBe(2, "four log methods have been trigged");
    expect(logs).toIncludeEqual("loooog1");
    expect(logs).toIncludeEqual("loooog2");
  });

  throws("trigger a failed assertion", () => {
    triggerAssert();
  });
});