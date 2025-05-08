exports.getAll = (req, res) => {
    res.json({products: [{name: 'Iphone', value: 10000}, {name: 'Ipad', value: 12000}]});
};