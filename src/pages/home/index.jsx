import './index.css';
import ReactMarkdown from "react-markdown";
import {useEffect, useState} from "react";
import request from "../../request";

function Index() {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        request.get('https://raw.githubusercontent.com/Truimo/Truimo/main/README.md')
            .then(res => {
                setMarkdown(res.data.toString())
            })
    }, [])

    return (
        <div className='view'>
            <div className='markdown'>
                <ReactMarkdown children={markdown}></ReactMarkdown>
            </div>
        </div>
    )
}

export default Index
