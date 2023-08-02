
const ErrorMessage = ({ error }) => (
    error && (
        <div className="error-message">
            <p>{error}</p>
        </div>
    )
);

export default ErrorMessage;