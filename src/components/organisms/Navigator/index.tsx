import {Avatar, Image, Layout, Popover} from 'antd';
import {useNavigator} from '@/composables/useNavigator.ts';
import './style.scss';
import logo from '@/assets/img/logo.png';
import collapse from '@/assets/img/collapse-icon.png';
import dot from '@/assets/img/3dot.png';
import {CSSTransition} from 'react-transition-group';
import {Link} from "react-router-dom";

interface NavigatorProps {
    isCollapsed: boolean,
    handleCollapse: () => void
}

export const Navigator = (props: NavigatorProps) => {
    const {Sider} = Layout;
    const {isCollapsed, handleCollapse} = props
    const {user, menuItems, isShowPopper, handleClickShowPopper} = useNavigator();

    const ContentPopper = () => {
        return <ul className={"popover-navigator py-4"}>
            <li className={"py-4 px-8"}>マイページ</li>
            <li className={"py-4 px-8"}>環境設定</li>
            <li className={"py-4 px-8"}>アカウント</li>
        </ul>
    }

    return (
        <Sider className={'navigator-organism'} width={'max-content'}>
            <div className={`sidebar ${isCollapsed ? 'open' : ''}`}>
                <div className='menu-item logo-details'>
                    <img src={logo} alt='menu-logo' className='menu-logo bx'/>
                    <CSSTransition unmountOnExit={true} timeout={300} in={isCollapsed}
                                   classNames='slide-fade'>
                        <div
                            className={'logo-name ml-2'}>ElevateAI
                        </div>
                    </CSSTransition>
                </div>
                <div className={"content flex justify-between flex-col relative"}>
                    <div>
                        <ul className='nav-list' style={{overflow: 'visible'}}>
                            {menuItems.map((menuItem, index) => (
                                <li className={""} key={index}>

                                    <div className='menu-item'>
                                        <Link to={menuItem.link}>
                                            {menuItem.name !== "AIエージェント" &&
                                                <Image preview={false} src={menuItem.icon} className='bx image-icon'/>}


                                            {menuItem.name === "AIエージェント" && <div className={"agent-image"}>
                                                <Image preview={false} src={menuItem.icon}
                                                />
                                            </div>}
                                            <CSSTransition unmountOnExit={true} timeout={500} in={isCollapsed}
                                                           classNames='slide-fade'>
                                                <div
                                                    className={'links_name ml-4'}>{menuItem.name}</div>
                                            </CSSTransition>
                                        </Link>
                                    </div>

                                </li>
                            ))}
                        </ul>
                        <div className={`flex justify-end sidebar-icon ${isCollapsed ? '' : 'collapsed'}`}>
                            <img src={collapse} onClick={handleCollapse} alt={''}/>
                        </div>
                        <CSSTransition unmountOnExit={true} timeout={300} in={isCollapsed}
                                       classNames='slide-fade'>
                            <div className={"version"}>ElevateAI β版 <span>v0.1.0</span></div>
                        </CSSTransition>


                    </div>

                    <Popover content={ContentPopper} open={isShowPopper && isCollapsed}

                             placement={isCollapsed ? "top" : "topRight"}
                             trigger={"focus"}>
                        <div aria-describedby={"profile"}
                             className='profile relative'>
                            <div className='menu-item flex place-items-center justify-between'>
                                <div>
                                    <Avatar src={user.avatar} className='bx image-icon'/>
                                    <CSSTransition unmountOnExit={true} timeout={500} in={isCollapsed}
                                                   classNames='slide-fade'>
                                    <span
                                        className={isCollapsed ? 'links_name ml-4' : 'links_name ml-4'}>{user.name}</span>

                                    </CSSTransition>
                                </div>
                                <CSSTransition unmountOnExit={true} timeout={200} in={isCollapsed}
                                               classNames='slide-fade'>
                                    <Image onClick={handleClickShowPopper} preview={false} src={dot}
                                           className='show-info'/>

                                </CSSTransition>
                            </div>
                        </div>
                    </Popover>
                </div>
            </div>
        </Sider>

    );
};