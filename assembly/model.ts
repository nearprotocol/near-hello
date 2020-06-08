@nearBindgen
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

@nearBindgen
export class InputPromiseArgs {
    args: PromiseArgs;
}

@nearBindgen
export class MyContractPromiseResult {
    ok: bool;
    r: MyCallbackResult;
}

@nearBindgen
export class MyCallbackResult {
    rs: MyContractPromiseResult[];
    n: string;
}