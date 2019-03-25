
const express = require('express')
const ct = require('./controllers/controller')
const app = express()
const cors = require('cors');

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3333',
    credentials: true
  }));

app.get('/api/allPets', ct.allPets);
app.post('/api/addPet', ct.addPet);
app.put('/api/editPet/:id', ct.editPet);
app.delete('/api/deletePet/:id', ct.deletePet);
app.get('/api/cats', ct.getCats);
app.get('/api/dogs', ct.getDogs);
app.get('/api/others', ct.getOthers);
app.get('/api/search', ct.searchPets);

const port = 4545
app.listen(port, () => console.log(`${port} peas in the pod`))