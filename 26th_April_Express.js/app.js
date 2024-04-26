const http =require('http');
const {readFileSync}=require('fs');

// get all files
const homepage=readFileSync('./index.html')

const server=http.createServer((req,res)=>{
    // console.log(req.method);
    // console.log(req.url);
    const url=req.url;
    if(url === '/'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(homepage);
        res.end()
    }
    else if(url ==='/about'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(`<h1>About Page<h1>`);
        res.end()
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write(`<h1>Page not found<h1>`);
        res.end()
    }
})

server.listen(3000,()=>{
    console.log("Server Listening to the Url");
})