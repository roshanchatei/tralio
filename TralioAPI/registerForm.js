const registerForm = [
    {
        type: 'text',
        name: 'username',
        placeholder: 'User Name',
        validation: {
            required: true,
            minLength: 3,
            maxLength: 20
        },
    },
    {
        type: 'text',
        name: 'firstname',
        placeholder: 'First Name',
        validation: {
            required: true,
            minLength: 3,
            maxLength: 20
        },
    },
    {
        type: 'text',
        name: 'lastname',
        placeholder: 'Last Name',
        validation: {
            required: true,
            minLength: 3,
            maxLength: 20
        },
    },
    {
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        validation: {
            required: true,
            isEmail: true
        },
    },
    {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        validation: {
            required: true,
            minLength: 6,
            maxLength: 20
        },
    },
    {
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'Confirm Password',
        validation: {
            required: false,
            minLength: 6,
            maxLength: 20
        },
    },
]

export default registerForm;