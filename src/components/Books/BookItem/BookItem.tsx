import css from "./BookItem.module.css"
import bookImage from "../../../assets/pictures/No-Image.svg.png"
import {Link} from "react-router-dom";
type ItemType = {
    key: string,
    authors: string[],
    categories: string[],
    title: string,
    image: string,
}
export const BookItem = (props: ItemType) => {


    return (
        <Link to={"id"}>
            <div className={css.itemWrapper} onClick={() => {
            }}>
                <img src={props.image} alt="" style={{
                    "height": "200px",
                    "width": "150px", "border": "1px solid black"
                }}/>
                <div>{props.categories.map(el=>el + " ")}</div>
                <h3>{props.title}</h3>
                <div>{props.authors.map(el=>el + " ")}</div>
            </div>
        </Link>
    )
}