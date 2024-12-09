function errorMiddleware(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
        details: err.details || null,
    });
}

export default errorMiddleware;
