import { defineStore } from 'pinia'
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'

export interface TypeUser {
  user: string,
  password: string,
}

const schema_login = object().shape({
  user: string().required().label('usuário'),
  password: string().required().min(3, 'The password must be 3 characters').label('senha')
})

export const LoginStore = defineStore('store_login', () => {
  const { values, defineField, errors, resetForm, submitForm, handleSubmit } = useForm<TypeUser>({
    initialValues: {
      user: '',
      password: ''
    },
    validationSchema: schema_login
  })

  const [user, userAlt] = defineField('user')
  const [password, passwordAlt] = defineField('password')

  const onSubmit = handleSubmit(async (values) => await console.log(values))


  return {
    errors,
    values,
    user,
    userAlt,
    password,
    passwordAlt,
    resetForm,
    submitForm,
    onSubmit
  }
})