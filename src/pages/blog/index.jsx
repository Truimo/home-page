import {useEffect, useState} from "react";
import request from "../../request";
import {XMLParser} from "fast-xml-parser";
import Loading from "../../components/loading";

import './index.css';

function Index() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        request.get('https://proxy.20mo.cn/blog/rss')
            .then(res => {
                if (res.status === 200 && typeof res.data === 'string') {
                    setLoading(false);
                    const parser = new XMLParser();
                    const jObj = parser.parse(res.data);
                    const data = jObj.rss.channel.item.map(item => {
                        return {
                            desc: item.description,
                            url: item.link,
                            date: item.pubDate,
                            title: item.title
                        }
                    })
                    setList(oldArr => [...oldArr, ...data])
                }
            })
    }, [])

    return (
        <div className='view'>
            <Loading show={loading}/>
            <div className='blog-group'>
                {list.map((item, index) => {
                    return <BlogCard key={index} data={item}/>
                })}
            </div>
        </div>
    )
}

function BlogCard(props) {
    if (!props.data) return null;
    const defaultData = {
        title: '',
        desc: '',
        date: '',
        url: ''
    }
    const data = Object.assign(defaultData, props.data);
    return (
        <div className='blog-card'>
            <a target='_blank' rel='noreferrer' href={data.url}>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <p>{data.date}</p>
            </a>
        </div>
    )
}

export default Index
