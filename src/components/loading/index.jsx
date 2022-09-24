function Index(props) {
    return (
        <div className={'loading' + (props.show === true ? '' : ' hide')}>
            <div className='loading_inner'>
                <div className='loading-icon'>
                    <i className='iconfont icon-jiazai'></i>
                </div>
                <p className='loading-tip'>&nbsp;Loading...</p>
            </div>
        </div>
    )
}

export default Index
