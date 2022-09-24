import './index.css';
import ReactMarkdown from "react-markdown";
import {useEffect, useState} from "react";
import request from "../../request";
import Loading from "../../components/loading";

function Index() {
    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        request.get('https://raw.githubusercontent.com/Truimo/Truimo/main/README.md')
            .then(res => {
                if (res.status === 200) {
                    setLoading(false)
                    setMarkdown(res.data.toString())
                }
            })
    }, [])

    return (
        <div className='view'>
            <Loading show={loading}/>
            <div className='markdown'>
                <ReactMarkdown children={markdown}></ReactMarkdown>
            </div>
        </div>
    )
}

export default Index
