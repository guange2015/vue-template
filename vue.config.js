// vue.config.js
module.exports = {

    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://cdn.codejiaonang.com/'
        : '/',

    configureWebpack: {
        devtool:'souce-map'
    },
  // options...
    devServer:{
        proxy:{
            '/api':{
                // target: 'https://codejiaonang.com',//代理地址，这里设置的地址会代替axios中设置的baseURL
                target: 'http://127.0.0.1:3000',//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
                //ws: true, // proxy websockets
                //pathRewrite方法重写url
                // pathRewrite: {
                //     '^/api': '/'
                //     //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                //     //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
                // }

            },
            '/download': {
                target: 'https://codejiaonang.com',//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            },
            '/coderun': {
                target: 'https://code.codejiaonang.com',//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/coderun': '/'
                }
            },
        }
    },

    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = '编程胶囊-打造学习编程的最好系统';
                return args;
            });
    },
}
