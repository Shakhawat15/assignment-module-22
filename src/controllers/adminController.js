exports.create = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Admin create successfully'
    })
};

exports.read = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'give the admin data here'
    })
};

exports.delete = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Admin delete successfully'
    })
};

exports.update = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Admin update successfully'
    })
};