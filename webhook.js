const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook-mercadopago', (req, res) => {
    const evento = req.body;
    
    if (evento.type === 'payment' && evento.data.status === 'approved') {
        // Aqui você pode processar o pagamento aprovado
        console.log('Pagamento aprovado:', evento.data);

        // Enviar resposta para o Mercado Pago
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
