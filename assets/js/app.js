Vue.component('inline-images', {
    props: ['list'],
    template: '<p><span v-for="(item, idx) in list" v-bind:key="idx"><img :src="item.url" :alt="item.name">&ensp;</span></p>'
})

new Vue({
    el: '#app',
    data: {
        links: [{
            url: 'https://blog.truimo.com/',
            name: 'Blog'
        },{
            url: 'https://github.com/Truimo',
            name: 'GitHub'
        }],
        githubList: [{
           url: 'https://github-profile-summary-cards.vercel.app/api/cards/stats?username=truimo&theme=default',
           name: 'stars'
        },{
            url: 'https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=truimo&theme=default',
            name: 'Top Languages by Commit'
        }],
        useCodeList: [{
            url: 'https://img.shields.io/badge/-Html-f16500?style=flat-square&logo=html5&logoColor=white',
            name: 'Html5'
        },{
            url: 'https://img.shields.io/badge/-Css3-298cad?style=flat-square&logo=css3&logoColor=white',
            name: 'Css3'
        },{
            url: 'https://img.shields.io/badge/-JavaScript-fcdc00?style=flat-square&logo=javascript&logoColor=white',
            name: 'JavaScript'
        },{
            url: 'https://img.shields.io/badge/-Sass-c69?style=flat-square&logo=sass&logoColor=white',
            name: 'Sass'
        },{
            url: 'https://img.shields.io/badge/-TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white',
            name: 'TypeScript'
        },{
            url: 'https://img.shields.io/badge/-NodeJs-339933?style=flat-square&logo=Node.js&logoColor=white',
            name: 'NodeJs'
        },{
            url: 'https://img.shields.io/badge/-Vue-5BA17F?style=flat-square&logo=vue.js&logoColor=white',
            name: 'Vue'
        },{
            url: 'https://img.shields.io/badge/-React-61dafb?style=flat-square&logo=react&logoColor=white',
            name: 'React'
        },{
            url: 'https://img.shields.io/badge/-NestJs-e93333?style=flat-square&logo=nestjs&logoColor=white',
            name: 'NestJs'
        },{
            url: 'https://img.shields.io/badge/-php-8892BF?style=flat-square&logo=php&logoColor=white',
            name: 'php'
        },{
            url: 'https://img.shields.io/badge/-python-2b5b84?style=flat-square&logo=python&logoColor=white',
            name: 'python'
        },{
            url: 'https://img.shields.io/badge/-Golang-007d9c?style=flat-square&logo=go&logoColor=white',
            name: 'golang'
        },{
            url: 'https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white',
            name: 'MySQL'
        },{
            url: 'https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white',
            name: 'MongoDB'
        },{
            url: 'https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=Redis&logoColor=white',
            name: 'Redis'
        },{
            url: 'https://img.shields.io/badge/-Nginx-009639?style=flat-square&logo=NGINX&logoColor=white',
            name: 'Nginx'
        },{
            url: 'https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=Git&logoColor=white',
            name: 'Git'
        },{
            url: 'https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white',
            name: 'Visual Studio Code'
        },{
            url: 'https://img.shields.io/badge/-JetBrains-000000?style=flat-square&logo=JetBrains&logoColor=white',
            name: 'JetBrains'
        },{
            url: 'https://img.shields.io/badge/-Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white',
            name: 'Postman'
        },{
            url: 'https://img.shields.io/badge/-macOS-000000?style=flat-square&logo=macOS&logoColor=white',
            name: 'macOS'
        },{
            url: 'https://img.shields.io/badge/-Windows-0078D6?style=flat-square&logo=Windows&logoColor=white',
            name: 'Windows'
        }]
    }
})

console.log(" %c version %c 0.1.0 %c https://github.com/Truimo/home-page", "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff", "background:unset ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff")
