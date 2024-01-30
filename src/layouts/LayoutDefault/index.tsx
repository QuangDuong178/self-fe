import {ReactNode, useState} from 'react';
import {Layout} from "antd";
import {Navigator} from "@/components/organisms/Navigator";
import "./style.scss"

type Props = {
    children: ReactNode
}
export const LayoutDefault = (props: Props) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const {Content} = Layout;
    const {children} = props;

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }
    return <Layout className='h-screen bg-bg-grey-184 layout-default'>
        <Navigator isCollapsed={isCollapsed} handleCollapse={handleCollapse}/>
        <Content className={`content ${isCollapsed ? 'un-collapsed' : 'collapsed'}`}>
            {children}
        </Content>

    </Layout>;
};