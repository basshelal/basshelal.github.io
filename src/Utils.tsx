import {Dispatch, PropsWithChildren, SetStateAction, useState} from "react"

export type P<T = {}> = PropsWithChildren<T>

export function state<S>(initialState: S | (() => S)): { get: S, set: Dispatch<SetStateAction<S>> } {
    const [state, setState] = useState<S>(initialState)
    return {get: state, set: setState}
}