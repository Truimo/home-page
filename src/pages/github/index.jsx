import {useEffect, useState} from "react";
import request from "../../request";

import './index.css';
import Loading from "../../components/loading";

function Index() {
    const [github, setGithub] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        request.get('https://api.github.com/users/Truimo/repos?sort=pushed').then(res => {
            if (res.status === 200 && Array.isArray(res.data)) {
                setLoading(false);
                const data = res.data.map(item => {
                    return {
                        id: item.id,
                        url: item.html_url,
                        title: item.name,
                        desc: item.description,
                        tags: item.topics,
                        starNum: item.stargazers_count,
                        forkNum: item.forks_count,
                        forked: item.fork,
                        archived: item.archived,
                    }
                });
                setGithub(oldArr => [...oldArr, ...data]);
            }
        })
    }, []);

    return (
        <div className='view'>
            <Loading show={loading}/>
            <div className='github-group'>
                {github.map((item, index) => {
                    return <GithubCard key={index} data={item} />
                })}
            </div>
        </div>
    )
}

function GithubCard(props) {
    if (!props.data) return null;
    const defaultData = {
        id: 0,
        url: '',
        title: '',
        desc: '',
        tags: [],
        starNum: 0,
        forkNum: 0,
        forked: false,
        archived: false,
    }
    const data = Object.assign(defaultData, props.data);
    return (
        <a target='_blank' rel='noreferrer' href={data.url}>
            <div className='github-card'>
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.desc}</p>
                    <div className='tags'>
                        {data.tags.map((item, index) => {
                            return (
                                <span className='tag' key={index}>{item}</span>
                            )
                        })}
                        {data.forked && (
                            <span className='tag forked'>forked</span>
                        )}
                        {data.archived && (
                            <span className='tag archived'>archived</span>
                        )}
                    </div>
                </div>
                <div className='starNum'>
                    <div>
                        <i className='iconfont icon-shoucang'>&nbsp;{data.starNum}</i>
                    </div>
                    <div>
                        <i className='iconfont icon-branch'>&nbsp;{data.forkNum}</i>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Index
