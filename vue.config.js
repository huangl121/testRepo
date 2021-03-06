module.exports = {
    devServer: {
        port: 1234, // 端口号，如果端口被占用，会自动加1
        host: "127.0.0.1",  // 主机名，127.0.0.1  真机 0.0.0.0
        https: false,  // 协议
        open: true  // 启动服务时自动打开浏览器访问

    },
    lintOnSave: false,  // 关闭格式检查
    productionSourceMap: false // 打包时不会生成.map文件，加快打包速度
}

