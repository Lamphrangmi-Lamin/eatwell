const FormInput = ({
    name,
    label,
    type,
    placeholder,
    error,
    value,
    onChange
}) => {
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input 
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            required
            />
            {error && (
                <p>{error}</p>
            )}
        </div>
    )
}

export default FormInput;