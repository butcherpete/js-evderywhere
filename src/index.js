/*
 * index.js
 * Copyright (C) 2020 tsmith2 <tsmith2@caml112971>
 *
 * Distributed under terms of the MIT license.
 */

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));

app.listen(4000, () => console.log('Listening on port 4000!'));
