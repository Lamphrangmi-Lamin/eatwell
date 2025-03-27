const FormInput = ({
    name,
    label,
    type,
    placeholder,
    register,
    errors,
    validation
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
            placeholder={placeholder}
            {...register(name, validation)}
            />

            {errors[name]?.type === 'required' && <p className="text-red-600 text-sm max-w-14">{validation.required}</p>}

            {errors[name]?.type === 'pattern' && <p className="text-red-600 text-sm max-w-14">{validation.pattern.message}</p>}

            {errors[name]?.type === 'minLength' && <p className="text-red-600 text-sm max-w-3/4">{validation.minLength.message}</p>}
        </div>
    )
}

export default FormInput;