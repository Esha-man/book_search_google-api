import React, {useState} from 'react';
import './App.css';
// import {Filter} from "./components/Filter/Filter";
import {Books} from "./components/Books/Books";
import {BookPage} from "./components/Books/BookPage/BookPage";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import css from "./components/Filter/Filter.module.css";
import bookImage from "./assets/pictures/No-Image.svg.png"
import {log} from "util";

// api key: AIzaSyCsAQSzA7H88Rz_pSqRZS50p9rJZJy1vaU
function App() {
    ///Filter
    const [inputValue, setInputValue] = useState("")
    const [bookData, setData] = useState<Array<BookType>>([
        {id: "1",
            volumeInfo: {
                authors: ["author"],
                categories: ["category"],
                imageLinks: {smallThumbnail: bookImage, thumbnail: bookImage,},
                title: "title"},
        },
        {id: "2",
            volumeInfo: {
                authors: ["author2"],
                categories: ["category2"],
                imageLinks: {smallThumbnail: bookImage, thumbnail: bookImage,},
                title: "title2"},
        },
    ])

    const changeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value.trim())
    }

    const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode == 13) {
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + inputValue + "&key=AIzaSyCsAQSzA7H88Rz_pSqRZS50p9rJZJy1vaU")
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))

        }
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
    ///
    return (
        <div className="App">
            {/*Filter*/}
            <div className={css.wrapper}>
                <h1>Search for books</h1>
                <div className={css.searchInputWrapper}>
                    <input type="text"
                           placeholder={"Enter book name"}
                           value={inputValue}
                           onChange={changeInputValue}
                           onKeyDown={pressEnter}/>
                    <button>search</button>
                </div>

                <div className={css.filters}>
                    <div>
                        Categories:
                        <input type="text"/>
                    </div>
                    <div>
                        Sorting by:
                        <input type="text"/>
                    </div>
                </div>

            </div>
            {/*<Filter/>*/}
            <Routes>
                <Route path={"/"} element={
                    <Books data={bookData}/>
                }/>
                <Route path={"id"} element={<BookPage/>}/>
            </Routes>

        </div>
    );
}

export default App;
