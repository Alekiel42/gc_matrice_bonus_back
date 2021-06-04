module.exports = {
    error404: (req, res) => {
        console.log('page 404');
        return res.status(404).json('Page 404');
    }
}