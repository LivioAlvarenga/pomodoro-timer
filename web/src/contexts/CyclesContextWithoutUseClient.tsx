import {
  CyclesContextProvider,
  CyclesContextProviderProps,
} from './CyclesContext'

export function CyclesContextWithoutUseClient({
  children,
}: CyclesContextProviderProps) {
  return <CyclesContextProvider>{children}</CyclesContextProvider>
}
