import {useEffect, useState} from "react";
import request from "../../request";
import Loading from "../../components/loading";

import './index.css';

function Index() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timer = null, canLoad = false, page = 1
        const load = (pn) => {
            canLoad = false
            request.get(`https://proxy.20mo.cn/bili/x/space/bangumi/follow/list?type=1&pn=${pn}&ps=15&vmid=351904757`)
                .then(res => {
                    if (res.status === 200 && typeof res.data === 'object') {
                        page === 1 && setLoading(false)
                        canLoad = res.data.data.list.length > 0
                        page = page + 1
                        const data = res.data.data.list.map(item => {
                            return {
                                title: item.title,
                                url: item.short_url,
                                cover: item.cover.replace('http', 'https')
                            }
                        })
                        setList(oldArr => [...oldArr, ...data])
                    }
                })
        }
        const handleScroll = (ev) => {
            if (timer > 0 || false === canLoad) {
                return
            }
            timer = setTimeout(() => {
                const scrollTop = ev.target.documentElement.scrollTop || 0
                const clientHeight = ev.target.documentElement.clientHeight || 0
                const scrollHeight = ev.target.documentElement.scrollHeight || 0
                if (scrollHeight - scrollTop - clientHeight < 280) {
                    load(page)
                }
                timer = null
            }, 1000)
        }
        load(page)
        window.addEventListener('scroll', handleScroll, false)
        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
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
