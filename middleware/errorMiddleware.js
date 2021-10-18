module.exports = async (error, _req, res, _next) => {
    const { statusCode, message } = error;  
    return res.status(statusCode).json({ message });
  };