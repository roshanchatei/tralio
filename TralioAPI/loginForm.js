const loginForm = [
    {
        type: 'email',
        name: 'userEmail',
        placeholder: 'Email',
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    {
        type: 'password',
        name: 'userPassword',
        placeholder: 'Password',
        value: '',
        validation: {
            required: true,
            minLength: 6,
            maxLength: 20
        },
        valid: false,
        touched: false
    },
]

export default loginForm;