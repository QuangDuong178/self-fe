import React, { useRef, useState } from 'react';
import { AiNews } from "@/types/models/ai-news.ts";
import { OptionSelect } from '@/components/atoms/CommonSelect';
import { TagType } from '@/components/molecules/TagSelect';

export const useModalAINewsOrganism = () => {
    const searchRef = useRef<string>("")
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const titleRef = useRef<string>("");
    const overviewRef = useRef<string>("");
    const postingDateAndTimeRef = useRef<string>("");
    const linkRef = useRef<string>("");
    const distinguishRef = useRef<string>("");
    const tagRef = useRef<Array<string>>([]);

    const distinguishs: Array<OptionSelect> = [
        {
            value: 1,
            label: "デザイン"
        },
        {
            value: 2,
            label: "画像"
        },
        {
            value: 3,
            label: "画像生成AI"
        },
    ]

    const tags: Array<TagType> = [
        {
            id: 1,
            label: "デザイン"
        },
        {
            id: 2,
            label: "画像"
        },
        {
            id: 3,
            label: "画像生成AI"
        },
    ]


    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsOpenModal(!isOpenModal)
    }
    const handleChangePage = (event: React.ChangeEvent, page: number) => {
        setSelectedPage(page)
    }

    const handleClickOk = () => {
        handleOpenModal();
    }

    const [data, setData] = useState<Array<AiNews>>([
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "画像生成",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        },
        {
            originalArticlePostingDateAndTime: "2023年12月1日16:00",
            distinguish: "区分",
            articleTitle: "記事タイトル記事タイトル記事タイトル記事",
            overview: "記事の内容記事の内容記事の内容記事の内容記事の内容",
            tag: "タグタグタグタグタグタグ",
            link: "http://10.1.37.218:9000/ai-news"
        }
    ])
    const handleClickSearch = () => {
    };
    return {
        tags,
        titleRef,
        overviewRef,
        postingDateAndTimeRef,
        linkRef,
        distinguishRef,
        distinguishs,
        tagRef,
        isOpenModal,
        data,
        selectedPage,
        searchRef,
        handleOpenModal,
        handleChangePage,
        handleClickSearch,
        handleClickOk
    };
};
