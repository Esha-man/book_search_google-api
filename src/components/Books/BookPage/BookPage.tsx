import css from "./BookPage.module.css"
import bookImage from "../../../assets/pictures/No-Image.svg.png"

export const BookPage = () => {
    return (
        <div className={css.pageWrapper}>
            <div className={css.imageWrapper}>
                <img src={bookImage} alt=""/>
            </div>
            <div className={css.content}>
                <div>Category</div>
                <div>Book name</div>
                <div>Authors</div>
                <div className={css.description}> Description</div>
            </div>

        </div>
    )
}