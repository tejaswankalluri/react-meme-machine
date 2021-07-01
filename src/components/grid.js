import React, { useState, useEffect } from "react"
import "../css/style.css"
import "../css/card.css"
export default function Grid() {
    const [memes, setmemes] = useState([])
    const [errors, seterrors] = useState(false)
    const Loadmore = () => {
        fetch("https://meme-api.herokuapp.com/gimme/50")
            .then((res) => res.json())
            .then((data) => {
                const newMemes = data.memes
                newMemes.forEach((element) => {
                    setmemes((meme) => [...meme, element])
                })
                seterrors(false)
            })
            .catch(() => seterrors(true))
    }
    useEffect(() => {
        Loadmore()
    }, [])
    const Grids = memes.map((meme, i) => (
        <li className="cards__item" key={i}>
            <div className="card">
                <img src={meme.preview[2]} alt={i} />
                <div className="card__content">
                    <a href={meme.preview[2]} target="_blank" rel="noreferrer">
                        <button className="btn btn--block card__btn">
                            Download
                        </button>
                    </a>
                </div>
            </div>
        </li>
    ))

    return (
        <div className="carrr">
            <ul className="cards">{!errors && Grids}</ul>
            {!errors && (
                <button
                    className="btn btn--block card__btn load_more"
                    onClick={() => Loadmore()}
                >
                    load more
                </button>
            )}
            {errors && (
                <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                >
                    Something went wrong
                </div>
            )}
        </div>
    )
}
