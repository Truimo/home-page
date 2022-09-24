import {useEffect, useState} from "react";
import request from "../../request";
import Loading from "../../components/loading";

import './index.css';

function Index() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        request.get('https://proxy.catci.cn/bili/x/space/bangumi/follow/list?type=1&pn=1&ps=15&vmid=351904757')
            .then(res => {
                console.log(Array.isArray(res.data))
                if (res.status === 200 && typeof res.data === 'object') {
                    setLoading(false);
                    const data = res.data.data.list.map(item => {
                        return {
                            title: item.title,
                            url: item.short_url,
                            cover: item.cover.replace('http', 'https')
                        }
                    });
                    setList(oldArr => [...oldArr, ...data]);
                }
            })
    }, [])

    return (
        <div className='view'>
            <Loading show={loading}/>
            <div className='movie-group'>
                {list.map((item, index) => <MovieCard key={index} data={item}/>)}
            </div>
        </div>
    )
}

function MovieCard(props) {
    if (!props.data) return null;
    const defaultData = {
        title: '',
        url: '',
        cover: ''
    }
    const data = Object.assign(defaultData, props.data);
    return (
        <a target="_blank" rel='noreferrer' href={data.url}>
            <div className="movie-card">
                <div className="movie-cover">
                    <img referrerPolicy="no-referrer" alt={data.title} src={data.cover}/>
                </div>
                <p className="movie-title">{data.title}</p>
            </div>
        </a>
    )
}

export default Index
