exports.create = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Category create successfully'
    })
};

exports.read = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'give the category data here'
    })
};

exports.delete = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Category delete successfully'
    })
};

exports.update = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Category update successfully'
    })
};