import "./style.scss";
import {Link} from "react-router-dom";
import {AiNews} from "@/types/models/ai-news.ts";

type AINewsHomeProps = {
    aiNews: AiNews
}

export const AINewsHome = (props: AINewsHomeProps) => {
    const {originalArticlePostingDateAndTime, distinguish, articleTitle, link, overview} = props.aiNews
    return (
        <div className={"ai-news-home-molecules bg-white"}>
            <div className={"information"}>
                <span className={"distinguish"}>{distinguish}</span>
                <span className={"ml-2"}>{originalArticlePostingDateAndTime}</span>
            </div>
            <div className={"article-title"}>
                {articleTitle}
            </div>
            <div className={"overview mt-4"}>
                {overview}
            </div>
            <div className={"w-full text-end view-more"}>
                <Link to={link}>View more</Link>

            </div>
        </div>
    )
}