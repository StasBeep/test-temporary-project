import React from "react";

interface ChapterStoryBookProps {
    title: String,
    children: React.ReactNode
}

const ChapterStoryBook = (props: ChapterStoryBookProps) => {
    return (
        <div
            style={{
                width: '900px',
                margin: '0 auto',
                background: 'red'
            }}
        >
            {props.title}
            {props.children}
        </div>
    )
}

export default ChapterStoryBook;