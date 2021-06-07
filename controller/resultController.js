const sanitizeHtml = require('sanitize-html');

module.exports = {
    compareResult: (req, res) => {
        try{
            const data = req.body;            
            const errors = [];

            if (!data.matrice) {
                errors.push(`La matrice n'est pas complétée`);
            } 

            if (errors.length > 0) {
                return res.status(409).json(errors);
            }

            data.matrice = sanitizeHtml(data.matrice);

            if(data.matrice === process.env.GOOD_ANSWER){
                res.status(201).json({ message : `Rendez-vous aux coordonnées GPS pour trouver la cache`, gps: process.env.GPS});
            } else if(data.matrice === process.env.ANSWER_TEST) {
                res.status(201).json({ message: 'Vous êtes entrée dans la Matrice avec un code test (par chance ou parce que vous êtes passé par mon portfolio). Pour découvrir les coordonnées GPS rechargez la page et recommencez avec le bon code.', gps: 'Fake GPS 42.2665 45.457'});
            } else {
                res.status(202).json({ message: 'La Matrice est incorrect veuillez rééessayer'});
            }
        } catch(error) {
            console.trace(error);
            res.status(500).json({ error: 'Servor error, please contact an administrator' });
        }
    }
}