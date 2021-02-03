const path =require('path');
const {CleanWebPackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main/index.tsx', // arquivo inicial para o webpack começar a percorrer pela a aplicação
    output: {
        path: path.join(__dirname, 'public/js'),
        publicPath: '/public/js',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], // extensões utilizadas
        alias: {
            '@': path.join(__dirname, 'src') // indica ao webpack como ler os alias imports
        }
    },
    devServer: {
        contentBase: './public', // direciona a execução do servidor para a pasta public
        writeToDisk: true,
        historyApiFallback: true, // permite rotas na url que não sejam somente "/"
    },
    externals: { // indicar as libs que não devem ser lidas pelo webpack
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new CleanWebPackPlugin()
    ]
}