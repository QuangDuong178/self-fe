import {AiNews} from "@/types/models/ai-news.ts";
import {AiTools} from "@/types/models/ai-tools.ts";
import ChatGPTIcon from "@/assets/img/chatgpt.png";
import CanvaIcon from "@/assets/img/canva.png";
import NotionIcon from "@/assets/img/notion.png"
import {AiPrompt} from "@/types/models/ai-prompt.ts";

export const useModalHomeOrganism = () => {
    const aiNewList: Array<AiNews> = [
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "業務改善",
            articleTitle: "エンジニアによるChatGPT活用術10選【Qiitaから厳選】 | 株式会社SaaSis",
            overview: "今回の記事では、エンジニアに関する知識を記録・共有するためのサービス「Qiita」でバズったChatGPTに関する記事を紹介します！ ",
            tag: "タグタグタグタグタグタグ",
            link: "/home"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "業務改善",
            articleTitle: "エンジニアによるChatGPT活用術10選【Qiitaから厳選】 | 株式会社SaaSis",
            overview: "今回の記事では、エンジニアに関する知識を記録・共有するためのサービス「Qiita」でバズったChatGPTに関する記事を紹介します！ ",
            tag: "タグタグタグタグタグタグ",
            link: "/home"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "業務改善",
            articleTitle: "エンジニアによるChatGPT活用術10選【Qiitaから厳選】 | 株式会社SaaSis",
            overview: "今回の記事では、エンジニアに関する知識を記録・共有するためのサービス「Qiita」でバズったChatGPTに関する記事を紹介します！ ",
            tag: "タグタグタグタグタグタグ",
            link: "/home"
        }
    ]

    const aiToolList: Array<AiTools> = [
        {
            no: 1,
            classification: "文章生成",
            image: ChatGPTIcon,
            name: "ChatGPT（GPT-4）",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            link: "https://chat.openai.com/",
        },
        {
            no: 2,
            classification: "文章生成",
            image: CanvaIcon,
            name: "Canva",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            link: "https://chat.openai.com/",
        }, {
            no: 3,
            classification: "文章生成",
            image: NotionIcon,
            name: "Notion",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            link: "https://chat.openai.com/",
        }
    ]

    const aiPromptList: Array<AiPrompt> = [
        {
            no: 1,
            name: "新入社員研修プログラムを設計する",
            content : "#命令　\n" +
                "あなたは、マーケティング戦略を担当として、「メールマガジンのタイトル名」を立案せよ。\n" +
                "\n" +
                "#条件　\n" +
                "以下の「情報」に記載されている内容からメールマガジンのタイトル名する。表記・",
            category: "デザイン",
            tag: ["画像"],
            numberOfOutput: 10,
            createdDate: "2023/12/01"
        },
        {
            no: 2,
            name: "新入社員研修プログラムを設計する",
            content : "#命令　\n" +
                "あなたは、マーケティング戦略を担当として、「メールマガジンのタイトル名」を立案せよ。\n" +
                "\n" +
                "#条件　\n" +
                "以下の「情報」に記載されている内容からメールマガジンのタイトル名する。表記・",
            category: "デザイン",
            tag: ["画像"],
            numberOfOutput: 10,
            createdDate: "2023/12/01"
        },
        {
            no: 3,
            name: "新入社員研修プログラムを設計する",
            content : "#命令　\n" +
                "あなたは、マーケティング戦略を担当として、「メールマガジンのタイトル名」を立案せよ。\n" +
                "\n" +
                "#条件　\n" +
                "以下の「情報」に記載されている内容からメールマガジンのタイトル名する。表記・",
            category: "デザイン",
            tag: ["画像"],
            numberOfOutput: 10,
            createdDate: "2023/12/01"
        },

    ]


    return {
        aiNewList,
        aiToolList,
        aiPromptList
    }
}