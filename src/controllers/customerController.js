exports.create = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Customer create successfully'
    })
};

exports.read = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'give the customer data here'
    })
};

exports.delete = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Customer delete successfully'
    })
};

exports.update = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Customer update successfully'
    })
};