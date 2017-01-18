/**
 * Created by lenovo on 2017/1/10.
 */
module.exports = {
    entry: './app.js',  //����ļ�
    output: {
        filename: 'bundle.js'
    },  //��Щ������ʼ����������Ҳ���Բ���������д����������ļ����ﲻ���׳����Ҽ�
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.css/,
                exclude: /node_mudules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};

