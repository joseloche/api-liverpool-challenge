const express = require('express')
const axios = require('axios');
const router = express.Router();
const cors = require('cors');

// Middleware para parsear JSON en el cuerpo de la solicitud
router.use(cors());
router.use(express.json());

router.get('/folio', async(req, res) => {
    const folio = req.query.folio;
    const response =  await axios.get('http://localhost:8085/api/liverpool/folio', {
        params: { folio }
    });
      res.json(response.data);
});
router.post('/folio', async (req, res) => {
    const folio = req.body.folio;
    const response =  await axios.post('http://localhost:8085/api/liverpool/folio', { folio });
    res.json(response.data);
});

module.exports = router;