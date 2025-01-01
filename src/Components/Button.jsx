export default function Button({ label, onClick, style}) {
    return (
        <>
            <button
                onClick={onClick}
                style={style}
            >
                {label}
            </button>
        </>
    );
}