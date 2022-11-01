import React from "react";
import styles from "./Paginator.module.css";
import {v1} from "uuid";

export type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePageHandler: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <>
            <div className={styles.pagination}>
                {
                    pages.map(page => {
                        return (
                            <span className={props.currentPage === page ? styles.selectedPage : ''}
                                  key={v1()}
                                  onClick={() => {props.onChangePageHandler(page)}}
                            >
                                  {page}
                            </span>
                        )
                    })
                }
            </div>
        </>
    );

}