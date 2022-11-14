// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'node:fs'

export default function handler(req, res) {
  fs.readFile(`productData/${req.query.slug}.json`, 'utf-8' , (err, data) => {
    if(err){
      res.status(200).json({error: "No such page found"});
    }
    res.status(200).json(JSON.parse(data));
  })
}
