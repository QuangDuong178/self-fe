import {Title} from "@/components/atoms/Title";
import {AINewsHome} from "@/components/molecules/AINewsHome";
import {useModalHomeOrganism} from "@/composables/useModalHomeOrganism.ts";
import {Image} from "antd";
import {Link} from "react-router-dom";
import "./style.scss"
import {AiPromptHome} from "@/components/molecules/AIPromptHome";


export const ModalHomeOrganism = () => {
    const {aiNewList, aiToolList, aiPromptList} = useModalHomeOrganism();
    return <div className={"modal-home-organism"}>
        <div>
            <Title text={"AI News"}/>
            <div className={"grid grid-cols-3 gap-x-4 mt-4"}>
                {aiNewList.map((item, index) => (
                    <AINewsHome key={index} aiNews={item}/>
                ))}
            </div>
        </div>
        <div className={"mt-10 grid grid-cols-2 gap-x-14 mb-4"}>
            <div>
                <Title text={"よく使うAIツール"}/>
                <div className={"ai-tools mt-4 bg-white"}>
                    <ul>
                        {aiToolList.map(item => (
                            <li key={item.no} className={"px-6 py-4 flex justify-between place-items-center"}>
                                <div className={"flex place-items-center"}>
                                    <Image height={30} width={35} src={item.image} preview={false} alt={item.name}/>
                                    <h4 className={"ml-2"}>{item.name}</h4>
                                </div>
                                <Link to={item.link} className={"btn-use rounded-full flex place-items-center"}>
                                    使用する
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            <div>
                <Title text={"よく使うプロンプト"}/>
                <div className={"ai-prompt grid grid-cols-3 gap-x-2 mt-4"}>
                    {aiPromptList.map((item,index) => (
                        <AiPromptHome key={index} aiPrompt={item} />
                    ))}
                </div>
            </div>

        </div>

    </div>
}