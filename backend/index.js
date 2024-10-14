import express from 'express';
import uniqid from 'uniqid';
import fs from 'fs';
import { GPTScript, RunEventType } from '@gptscript-ai/gptscript';
import cors from 'cors';

const app = express();

app.use(cors());

const gptscript = new GPTScript();

const PORT = 4000

app.get('/create-story', async (req, res) => {
    const url = req.query.url;
    const dir = uniqid();
    const path = './stories/'+dir;
    fs.mkdirSync(path, {recursive: true});

    const run = await gptscript.run('./story.gpt', {
        input: `--url ${url} --dir ${dir}`,
        disableCache: true,
    });

    run.on(RunEventType, en => {
        if(eval.type === RunEventType.CallFinish && en.output){
            console.log(en.output);
        }
    })

    const result = await run.text();

    return res.json(result);
})

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}...`);
})