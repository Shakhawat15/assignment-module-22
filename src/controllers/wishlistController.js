exports.create = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Wish List create successfully'
    })
};

exports.read = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'give the wishlist data here'
    })
};

exports.delete = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Wish List delete successfully'
    })
};

exports.update = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Wish List update successfully'
    })
};