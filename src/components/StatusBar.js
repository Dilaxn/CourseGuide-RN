import React from "react"
import { StatusBar, Center, NativeBaseProvider } from "native-base"
export const Example = () => {
    return <StatusBar />
}

export default StatusBar = () => {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Example />
            </Center>
        </NativeBaseProvider>
    )
}