import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";


// const fileTypes = ["JPG", "PNG", "GIF"];

export default function HomePage() {
    // const [file, setFile] = useState(null);
    // const handleChange = (file) => {
    //     setFile(file);
    //   };
    return (
        <div className="text-center">
            {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> */}
            <h1 className="main-title home-page-title">Drag and Drop Page</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
