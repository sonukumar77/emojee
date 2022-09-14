import SingleEmoji from "./SingleEmoji";

const EmojiContainer = ({ list }) => {
    return (
        <div className="container">
            {
                list.map((singleEmoji, idx) => {
                    return (
                        <SingleEmoji singleEmoji={singleEmoji} key={idx} />
                    )
                })
            }
        </div>
    )
}

export default EmojiContainer;