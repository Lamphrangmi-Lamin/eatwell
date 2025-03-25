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
        <div className="flex-col items-center justify-center my-6">
            <label 
            className="text-md block"
            htmlFor={name}>
            {label}:
            </label>
            <input 
            className="
            caret-black
            bg-white
            text-black
            p-2
            rounded-md
            focus:outline-2
            outline-sky-500
            focus:invalid:outline-red-500"
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