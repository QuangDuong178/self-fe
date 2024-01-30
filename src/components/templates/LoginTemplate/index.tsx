import {ModalLoginOrganism} from "@/components/organisms/ModalLoginOrganism/index.tsx";
import logo from "@/assets/img/logo.png";
import "@/components/templates/LoginTemplate/style.scss"

export const LoginTemplate = () => {
    return <div className={"login-template h-full flex justify-center items-center"}>
        <div>
            <div className={"flex place-items-center justify-center mb-9"}>
                <img height={45} width={40} src={logo}/>
                <h1 className={"title-logo ml-4"}>ElevateAI</h1>
            </div>
            <ModalLoginOrganism/>
        </div>
    </div>
}