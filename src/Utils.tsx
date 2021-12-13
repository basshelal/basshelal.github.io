import {Dispatch, PropsWithChildren, SetStateAction, useState} from "react"

export type P<T = {}> = PropsWithChildren<T>

export function state<S>(initialState: S | (() => S)): { get: S, set: Dispatch<SetStateAction<S>> } {
    const [state, setState] = useState<S>(initialState)
    return {get: state, set: setState}
}

export function newDate(date: { year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number }): Date {
    return new Date(date.year, date.month, date.date, date.hours, date.minutes, date.seconds, date.ms)
}