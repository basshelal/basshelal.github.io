import {DependencyList, PropsWithChildren, useLayoutEffect} from "react"

export type P<T = {}> = PropsWithChildren<T>

export const baseURL = "https://raw.githubusercontent.com/basshelal/basshelal.github.io/master/"

export function useLayoutEffectAsync(effectAsync: () => Promise<void>, deps?: DependencyList): void {
    useLayoutEffect(() => {effectAsync().then()}, deps)
}