

export const LoadingPage = () => {
    return (
        <div className='position-absolute top-50 start-50 translate-middle'>
            <div className="spinner-border" style={{ width: 50, height: 50 }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}