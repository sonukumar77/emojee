import React, { useState, useEffect } from "react";
import emojiList from "../emojiList";
import EmojiContainer from "./EmojiContainer";
const Main = () => {

    const [list, setList] = useState(emojiList);
    const [keyword, setKeyword] = useState("");

    const typed = (e) => {
        const value = e.target.value;
        setKeyword(value);
    }

    useEffect(() => {

        // Filter based on description,categoris,aliases

        const filterList = emojiList.filter((singleEmojiElement) => {
           

            if (singleEmojiElement.emoji.startsWith(keyword)) {
                return true;
            }

            if (singleEmojiElement.description.startsWith(keyword)) {
                return true;
            }

            if (singleEmojiElement.category.startsWith(keyword)) {
                return true;
            }

            if (singleEmojiElement.aliases.some(e => e.startsWith(keyword))) {
                return true;
            }

            return false;
        })

        setList(filterList);

    }, [keyword])


    return (
        <>
            <div className="main-container">
                <h1>Search Component</h1>
                <input type="text" name="input" placeholder="Search emoji 🔎" autoComplete="off" onKeyUp={typed} />
                {keyword === "" ? false : (
                    <h3>You have Search - {keyword}</h3>
                )}

                <hr />
            </div>

            {list.length === 0 ? (

                <p className="no-found">---- emoji not found 😔 ----</p>

            ) : (

                <EmojiContainer list={list} />
            )}


        </>
    )
}

export default Main;