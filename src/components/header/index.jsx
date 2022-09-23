import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import './index.css';

function Index() {
    const navigate = useNavigate();
    const location = useLocation();
    const [where, setWhere] = useState('');

    useEffect(() => {
        setWhere(location.pathname.toString());
    }, [location]);

    return (
        <header className='header'>
            <div className='header_inner'>
                <div className='header-user'>
                    <div className='user-avatar avatar'>
                        <img src="https://shp.qpic.cn/collector/3201719830/d42559f0-d6e5-4e8b-92be-fe134875463d/0" alt="avatar" />
                    </div>
                    <div className='user-info'>
                        <h4 className='name'>Min.</h4>
                        <p className='desc'>夕焼け空は赤い 炎のように赤い</p>
                    </div>
                </div>
                <div className='header-nav'>
                    <div className={'nav-item' + (where === '/' ? ' active' : '')}
                         onClick={() => navigate('/')}
                    >
                        <i className='iconfont icon-home'></i>
                        <div className='title'>&nbsp;Home</div>
                    </div>
                    <div className={'nav-item' + (where === '/contact' ? ' active' : '')}
                         onClick={() => navigate('contact')}
                    >
                        <i className='iconfont icon-email'></i>
                        <div className='title'>&nbsp;Contact</div>
                    </div>
                    <div className={'nav-item' + (where === '/github' ? ' active' : '')}
                         onClick={() => navigate('github')}
                    >
                        <i className='iconfont icon-github'></i>
                        <div className='title'>&nbsp;GitHub</div>
                    </div>
                    <div className={'nav-item' + (where === '/blog' ? ' active' : '')}
                         onClick={() => navigate('blog')}
                    >
                        <i className='iconfont icon-book'></i>
                        <div className='title'>&nbsp;Blog</div>
                    </div>
                    <div className={'nav-item' + (where === '/movie' ? ' active' : '')}
                         onClick={() => navigate('movie')}
                    >
                        <i className='iconfont icon-movie'></i>
                        <div className='title'>&nbsp;Movie</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Index
