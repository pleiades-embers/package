const path=require('path')

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
    },
    devServer:{
        port:8899,
        compress:false,
        contentBase:path.join(__dirname,'www'),
        publicPath:'/xxx/'
        
    }
}