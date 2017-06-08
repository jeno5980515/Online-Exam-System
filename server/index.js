import express from 'express' ;
import path from 'path' ;
import bodyParser from 'body-parser';

import webpack from 'webpack' ;
import webpackConfig from '../webpack.config' ;
import webpackDevMiddleware from 'webpack-dev-middleware' ;
import webpackHotMiddleware from 'webpack-hot-middleware' ;

/// SERVER RENDER
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import IndexViewEntry from './view/index' ;
// import { match, RouterContext } from 'react-router';
///

import QuestionList from './tests/questions';


const TEST_ID = '123' ;

const app = express();
const port = process.env.PORT || 3000 ;
const compiler = webpack(webpackConfig);
const router = express.Router();

app.use(bodyParser.json());     
app.use(bodyParser.urlencoded({  
  extended: true
})); 

// const IndexView = () => (
// `<!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <title>Hello World!</title>
//   </head>
//   <body>
//   <div id='root'></div>
//   <script type="text/javascript" src="/static/bundle.js"></script>
//   </body>
// </html>`
// )

/// DEV
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));
///

app.use('/static', express.static(path.join(__dirname, '../','public'))) ;

// app.get('/', (req,res) => {
// 	const context = {} ;
// 	const html = ReactDOMServer.renderToString(<IndexViewEntry location={req.url} context={context} />) ;
// 	res.send(html);
// });

router.get('/exam', function(req, res) {
	res.sendFile(path.join(__dirname, '../','client','index.html'));
});

router.get('/exam/:id', (req,res) => {
	const QuestionListWithoutAnswer = QuestionList.map((question)=>{
		return {...question,answer:undefined} ;
	} );
	res.json(QuestionListWithoutAnswer);
});

router.post('/submit', (req,res) => {
	const result = calculateScore({
		userAnswer : req.body.answerList ,
		correctAnswer : QuestionList 
	})
	res.sendStatus(200);
});
	
app.use('/', router);

app.listen(port,()=>{
	console.log('Listening!');
})

const calculateScore = ({ userAnswer , correctAnswer }) => {
	console.log(userAnswer);
	let correctCount = 0 ;
	correctAnswer.forEach((question,index)=>{
		correctCount = parseInt(question.answer,10) === parseInt(userAnswer[index],10) ? correctCount + 1 : correctCount ;
	})
	return correctCount ;
}