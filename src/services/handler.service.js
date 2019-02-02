class HandlerService {

    /**
     * Handle data return from exporess `next` function
     * @param content - { status, data }
     */
    handleData(content, req, res, next) {
        if (!Object.keys(content).includes('status') ||
            !Object.keys(content).includes('data')) {
            throw new Error('Content passed to next function must be of type { status: number, data: any }');
        }
        const { status, data } = content;
        if (data instanceof Error) {
            const errorData = process.env.NODE_ENV === 'development' ? data.stack : data.message;
            return res.status(status).json(errorData || data || 'Empty error');
        }
        return res.status(status).json({
            success: true,
            status,
            data
        });
    }

    /**
     * Catch all promises without catch
     */
    handleGlobalErrors() {
        process.on('unhandledRejection', (reason, p) => {
                console.error(reason, 'Unhandled Rejection at Promise', p);
            });
    }
}

export default new HandlerService()
