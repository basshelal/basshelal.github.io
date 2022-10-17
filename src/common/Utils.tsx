import {DependencyList, PropsWithChildren, useLayoutEffect} from "react"

export type P<T = {}> = PropsWithChildren<T>

export function useLayoutEffectAsync(effectAsync: () => Promise<void>, deps?: DependencyList): void {
    useLayoutEffect(() => {effectAsync().then()}, deps)
}