// @nearfile dist
export class PromiseArgs {
    receiver: string;
    methodName: string;
    args: PromiseArgs;
    gas: u64;
    balance: u64;
    callback: string;
    callbackArgs: PromiseArgs;
    callbackBalance: u64;
    callbackGas: u64;
}

export class InputPromiseArgs {
    args: PromiseArgs;
}

export class MyContractPromiseResult {
    ok: bool;
    r: MyCallbackResult;
  }

export class MyCallbackResult {
    rs: MyContractPromiseResult[];
    n: string;
}
