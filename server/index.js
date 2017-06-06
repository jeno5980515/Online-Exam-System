import express from 'express' ;
import path from 'path' ;
import bodyParser from 'body-parser';

import webpack from 'webpack' ;
import webpackConfig from '../webpack.config' ;
import webpackDevMiddleware from 'webpack-dev-middleware' ;
import webpackHotMiddleware from 'webpack-hot-middleware' ;

import QuestionList from './tests/questions';

const app = express();
const port = process.env.PORT || 3000 ;
const compiler = webpack(webpackConfig);

app.use(bodyParser.json());     
app.use(bodyParser.urlencoded({  
  extended: true
})); 


/// DEV
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));
///

app.use('/static', express.static(path.join(__dirname, '../','public'))) ;

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../','client/index.html'));
});

app.post('/submit', (req,res) => {
	const result = calculateScore({
		userAnswer : req.body.answerList ,
		correctAnswer : QuestionList 
	})
	res.json(result);
});

app.listen(port,()=>{
	console.log('Listening!');
})

const calculateScore = ({ userAnswer , correctAnswer }) => {
	let correctCount = 0 ;
	correctAnswer.forEach((question,index)=>{
		correctCount = parseInt(question.answer,10) === parseInt(userAnswer[index],10) ? correctCount + 1 : correctCount ;
	})
	return correctCount ;
}