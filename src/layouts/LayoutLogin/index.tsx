import {ReactNode} from "react";

type Props = {
    children: ReactNode
}
export const LayoutLogin = (props: Props) => {
    const {children} = props
    return <div className="h-screen bg-white">
        {children}
    </div>
}