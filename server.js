const app = require('./src/app.js');

const PORT = 3001;

app.listen(PORT, () => {
    console.log('servidor escutando! na porta', PORT);
});