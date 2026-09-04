

export type CounterState={
    count:number;
};

export type CounterAction=
|{type:"increment";payload:number}
|{type:"decrement";payload:number}
|{type:"reset"};


export const assertNever=(value:never):never=>{
    throw new Error(`Unhandled action: ${JSON.stringify(value)}`)
}