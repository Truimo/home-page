Vue.component('inline-images', {
    props: ['list'],
    template: '<p><span v-for="(item, idx) in list" v-bind:key="idx"><img :src="item.url" :alt="item.name">&ensp;</span></p>'
})

Vue.component('links', {
    props: ['links'],
    template: '<ul class="list"><li v-for="(link, idx) in links" v-bind:key="idx"><a target="_blank" :href="link.url">{{ link.name }}</a></li></ul>'
})

new Vue({
    el: '#app',
    data: {
        links: [{
            url: 'https://blog.truimo.com/',
            name: 'Blog'
        }, {
            url: 'https://github.com/Truimo',
            name: 'GitHub'
        }],
        githubList: [{
            url: 'https://proxy.catci.cn/github-profile-summary-cards/cards/stats?username=truimo&theme=default',
            name: 'stars'
        }, {
            url: 'https://proxy.catci.cn/github-profile-summary-cards/cards/most-commit-language?username=truimo&theme=default',
            name: 'Top Languages by Commit'
        }],
        useCodeList: [{
            url: 'https://proxy.catci.cn/shields/-Html-f16500?style=flat-square&logo=html5&logoColor=white',
            name: 'Html5'
        }, {
            url: 'https://proxy.catci.cn/shields/-Css3-298cad?style=flat-square&logo=css3&logoColor=white',
            name: 'Css3'
        }, {
            url: 'https://proxy.catci.cn/shields/-JavaScript-fcdc00?style=flat-square&logo=javascript&logoColor=white',
            name: 'JavaScript'
        }, {
            url: 'https://proxy.catci.cn/shields/-Sass-c69?style=flat-square&logo=sass&logoColor=white',
            name: 'Sass'
        }, {
            url: 'https://proxy.catci.cn/shields/-TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white',
            name: 'TypeScript'
        }, {
            url: 'https://proxy.catci.cn/shields/-NodeJs-339933?style=flat-square&logo=Node.js&logoColor=white',
            name: 'NodeJs'
        }, {
            url: 'https://proxy.catci.cn/shields/-Vue-5BA17F?style=flat-square&logo=vue.js&logoColor=white',
            name: 'Vue'
        }, {
            url: 'https://proxy.catci.cn/shields/-React-61dafb?style=flat-square&logo=react&logoColor=white',
            name: 'React'
        }, {
            url: 'https://proxy.catci.cn/shields/-NestJs-e93333?style=flat-square&logo=nestjs&logoColor=white',
            name: 'NestJs'
        }, {
            url: 'https://proxy.catci.cn/shields/-php-8892BF?style=flat-square&logo=php&logoColor=white',
            name: 'php'
        }, {
            url: 'https://proxy.catci.cn/shields/-python-2b5b84?style=flat-square&logo=python&logoColor=white',
            name: 'python'
        }, {
            url: 'https://proxy.catci.cn/shields/-Golang-007d9c?style=flat-square&logo=go&logoColor=white',
            name: 'golang'
        }, {
            url: 'https://proxy.catci.cn/shields/-MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white',
            name: 'MySQL'
        }, {
            url: 'https://proxy.catci.cn/shields/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white',
            name: 'MongoDB'
        }, {
            url: 'https://proxy.catci.cn/shields/-Redis-DC382D?style=flat-square&logo=Redis&logoColor=white',
            name: 'Redis'
        }, {
            url: 'https://proxy.catci.cn/shields/-Nginx-009639?style=flat-square&logo=NGINX&logoColor=white',
            name: 'Nginx'
        }, {
            url: 'https://proxy.catci.cn/shields/-Git-F05032?style=flat-square&logo=Git&logoColor=white',
            name: 'Git'
        }, {
            url: 'https://proxy.catci.cn/shields/-Visual%20Studio%20Code-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white',
            name: 'Visual Studio Code'
        }, {
            url: 'https://proxy.catci.cn/shields/-JetBrains-000000?style=flat-square&logo=JetBrains&logoColor=white',
            name: 'JetBrains'
        }, {
            url: 'https://proxy.catci.cn/shields/-Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white',
            name: 'Postman'
        }, {
            url: 'https://proxy.catci.cn/shields/-macOS-000000?style=flat-square&logo=macOS&logoColor=white',
            name: 'macOS'
        }, {
            url: 'https://proxy.catci.cn/shields/-Windows-0078D6?style=flat-square&logo=Windows&logoColor=white',
            name: 'Windows'
        }],
        bangumi: []
    },
    mounted: function () {
        const that = this
        axios.get('https://proxy.catci.cn/bili/x/space/bangumi/follow/list?type=1&pn=1&ps=15&vmid=52625050').then(function (response) {
            if (response.status === 200 && response.data.code === 0) {
                for (let it of response.data.data.list) {
                    that.bangumi.push({
                        title: it.title,
                        url: it.short_url,
                        cover: it.cover.replace('http', 'https')
                    })
                }
            }
        })
        console.log('323')
    }
})

console.log(" %c version %c 0.1.1 %c https://github.com/Truimo/home-page", "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff", "background:unset ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff")
