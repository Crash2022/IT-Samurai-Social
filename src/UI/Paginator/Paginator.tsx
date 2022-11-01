import React, {useState} from "react";
import styles from "./Paginator.module.css";
import {v1} from "uuid";

export type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePageHandler: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // всего страниц
    const pages = []; // массив со страницами

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const numberOfPages = 10; // количество страниц с пользователями на одной странице
    const [partOfPages, setPartOfPages] = useState<number>(1); // для вычисления блока страниц
    const partOfPagesCount = Math.ceil(pagesCount / numberOfPages); // количество блоков со страницами
    const prevPageNumber = (partOfPages - 1) * numberOfPages + 1;
    const nextPageNumber = partOfPages * numberOfPages;

    return (
        <>
            <div className={styles.paginationWrapper}>
                <div className={styles.paginationButtonPrev}>
                    <button onClick={() => {
                        //props.onChangePageHandler(props.currentPage - 1)
                        setPartOfPages(partOfPages-1)
                    }}
                            //disabled={props.currentPage === 1}
                    >
                        Пред.
                    </button>
                </div>

                <div className={styles.pagination}>
                    {
                        pages
                            .filter(page => page >= prevPageNumber && page <= nextPageNumber)
                            .map(page => {
                                return (
                                    <span className={props.currentPage === page ? styles.selectedPage : ''}
                                          key={v1()}
                                          onClick={() => {
                                              props.onChangePageHandler(page)
                                          }}
                                    >
                                  {page}
                            </span>
                                )
                            })
                    }
                </div>

                <div className={styles.paginationButtonNext}>
                    <button onClick={() => {
                        //props.onChangePageHandler(props.currentPage + 1)
                        setPartOfPages(partOfPages+1)
                    }}
                            //disabled={props.currentPage === pagesCount}
                    >
                        След.
                    </button>
                </div>
            </div>
        </>
    );

}