const handleResponse = (res, statusCode, message, error = null) => {
    const response = { message };   
    if (error) {
        response.error = error;
    }
    return res.status(statusCode).json(response);
};

export const ViewProject = async (req, res) => {
    try {
        res.status(200).json({ message: 'Project viewed successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error viewing project', error: error.message });
    }
}

export const UpdateProject = async (req, res) => {
    try {
        res.status(200).json({ message: 'Project updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating project', error: error.message });
    }
}

