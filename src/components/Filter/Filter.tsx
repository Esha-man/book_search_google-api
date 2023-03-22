import React from "react";
// import css from "./Filter.module.css"
// import {useState} from "react";
// import axios from "axios";
//
//
// export const Filter = () => {
//     const [inputValue, setInputValue] = useState("")
//     const [bookData, setData] = useState([])
//
//     const changeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
//         setInputValue(e.currentTarget.value)
//     }
//
//     const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.keyCode == 13) {
//             axios.get("https://www.googleapis.com/books/v1/volumes?q=" + inputValue + "&key=AIzaSyCsAQSzA7H88Rz_pSqRZS50p9rJZJy1vaU")
//                 .then(res=>setData(res.data.items))
//                 .catch(err=>console.log(err))
//         }
//     }
//
//     return (
//         <div className={css.wrapper}>
//             <h1>Search for books</h1>
//             <div className={css.searchInputWrapper}>
//                 <input type="text"
//                        placeholder={"Enter book name"}
//                        value={inputValue}
//                        onChange={changeInputValue}
//                        onKeyDown={pressEnter}/>
//                 <button>search</button>
//             </div>
//
//             <div className={css.filters}>
//                 <div>
//                     Categories:
//                     <input type="text"/>
//                 </div>
//                 <div>
//                     Sorting by:
//                     <input type="text"/>
//                 </div>
//             </div>
//
//         </div>
//     )
// }


// id:"w0WBCwAAQBAJ"
//volumeInfo:{
    // title:Война и мир"
// authors:['Лев Николаевич Толстой']
// categories:['Fiction']
// imageLinks:
// {smallThumbnail:"http://books.google.com/books/content?id=w0WBCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
//     thumbnail:"http://books.google.com/books/content?id=w0WBCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
//}
