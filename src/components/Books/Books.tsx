import {BookItem} from "./BookItem/BookItem";
import css from "./Books.module.css"

type BooksDataType = {
    data: BookType[]
}
type BookType = {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        categories: string[],
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string,
        }
    }
}

export const Books = (props: BooksDataType) => {
    return (
        <div className={css.pageWrapper}>
            <div className={css.results}>Found {props.data.length} results</div>
            <div className={css.content}>

                {props.data.map(el=> {
                    return <BookItem key={el.id}
                                     authors={el.volumeInfo.authors}
                                     categories={el.volumeInfo.categories}
                                     title={el.volumeInfo.title}
                                     image={el.volumeInfo.imageLinks.smallThumbnail}
                    />
                })}
            </div>

        </div>
    )
}