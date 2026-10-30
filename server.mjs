import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files=new Set(['index.html','demo.html','app.js','model.js','presentation.js','demo.js','styles.css','demo.css']);
http.createServer(async(req,res)=>{try{const name=decodeURIComponent(req.url.split('?')[0]).slice(1)||'index.html';if(!files.has(name))throw Error();res.setHeader('Content-Type',name.endsWith('.html')?'text/html':name.endsWith('.js')?'text/javascript':'text/css');res.end(await readFile(new URL(name,import.meta.url)));}catch{res.writeHead(404);res.end('Not found');}}).listen(4173,'127.0.0.1',()=>console.log('Open http://127.0.0.1:4173/demo.html'));
