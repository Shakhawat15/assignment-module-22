exports.create = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Sub Admin create successfully'
    })
};

exports.read = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'give the sub admin data here'
    })
};

exports.delete = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Sub Admin delete successfully'
    })
};

exports.update = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Sub Admin update successfully'
    })
};