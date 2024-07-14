import { ReactNode } from "react";

export type WithChildren<T = never> = T & {
    children: ReactNode
}