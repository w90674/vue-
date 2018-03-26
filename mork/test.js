
const http=require('http');
const url=require('url');
const fs=require('fs');
http.createServer((req,res)=>{
 let urlObj=url.parse(req.url);
 let path=urlObj.pathname;
 console.log(path,req.method);

 if(path=='/sign'&&req.method=='POST'){
 	let str='';
 	req.on('data',chunk=>str+=chunk);
 	req.on('end',()=>{
 		console.log(str);
 		console.log(url.parse(str));
 	})
 }
  if(req.method=='GET'&&path=='/'){
 	res.setHeader('content-type','text/html;charset=utf-8');
 	let con=fs.readFileSync('./test.html','utf-8');
 	res.end(con);
 }
}).listen(3001,()=>console.log(`监听端口成功`))
