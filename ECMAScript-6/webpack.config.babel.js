const webpack = require('webpack');
const path = require('path');

module.exports = {
	
	
	entry: './src/js/test1.js',  
    output: {  
        path: './src/js',  
        filename: 'bundle.js',  
    },  
    module: {  
        loaders: [
        {test: /\.css$/, loader: 'style!css'},
        {
            test: /\.js$/,  
            exclude: /node_modules/,  
            loader: 'babel-loader'  
        }]  
    }  
	
	
	
	
	
	/*entry: './src/js/test1.js',
	output: {
		path: __dirname + 'src/js/',
		filename: 'build.js'
	},
	module: {
		
		//加载器
		loaders: [
		
			{test: /\.css$/, loader: 'style!css'},
//			{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=882222192'},
			{
				test: path.join(__dirname, 'src', 'js'),
        		loader: 'babel-loader',
        		query: {
          			presets: ['es2015']
        		}
			}
		]	
	},
	plugins: [
		new webpack.BannerPlugin('This file is Created by slooong_Dong')
	],*/
	/*resolve: {
        //查找module的话从这里开始查找
        root: 'E:/github/flux-example/src', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
   },*/
// devServer: {
//	    contentBase: "./public",//本地服务器所加载的页面所在的目录
//	    colors: true,//终端中输出结果为彩色
//	    historyApiFallback: true,//不跳转
//	    inline: true//实时刷新
//	} 
}
