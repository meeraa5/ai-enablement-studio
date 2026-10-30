import {access} from 'node:fs/promises';
for(const f of ['index.html','demo.html','app.js','model.js','presentation.js','demo.js','styles.css','demo.css'])await access(new URL(f,import.meta.url));
console.log('Static production files validated. No dependencies or compilation required.');
