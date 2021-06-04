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
                res.status(201).json({ gps : process.env.GPS });
            } else {
                res.status(202).json({ message: 'La Matrice est incorrect veuillez rééessayer'});
            }
        } catch(error) {
            console.trace(error);
            res.status(500).json({ error: 'Servor error, please contact an administrator' });
        }
    }
}