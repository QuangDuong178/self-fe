type TitleProps = {
    text: string;
    className?: string;
};
export const Title = (props: TitleProps) => {
    const {text, className} = props;
    return <h1 className={"font-semibold text-2xl " + className}>{text}</h1>;
};
