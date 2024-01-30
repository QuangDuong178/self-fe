import Pagination from "@mui/material/Pagination";
import "./style.scss"
import React from "react";

type CommonPaginationProps = {
    total: number,
    selected: number,
    onPageChange: (event: React.ChangeEvent, page: number) => void,
    className : string
}
export const CommonPagination = (props: CommonPaginationProps) => {
    const {className, total, selected, onPageChange} = props;
    return (
        <Pagination onChange={onPageChange} defaultPage={selected} className={`pagination-atoms ${className}`} size={"medium"}
                    showFirstButton={true}
                    showLastButton={true}
                    page={selected}

                    count={total} siblingCount={0} variant="outlined" shape="rounded"/>)
}