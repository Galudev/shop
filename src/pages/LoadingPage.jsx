

export const LoadingPage = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="spinner-border" style={{ width: 100, height: 100 }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}