import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

export interface TypeUser {
  user: string,
  password: string,
}

const schema_login = object().shape({
  user: string().required().label('usuário'),
  password: string().required().label('senha')
})

export const LoginStore = defineStore('store_login', () => {
  const { values, defineField, errors, resetForm } = useForm<TypeUser>({
    initialValues: {
      user: '',
      password: ''
    },
    validationSchema: schema_login
  })

  const [user, userAlt] = defineField('user')
  const [password, passwordAlt] = defineField('password')



  return {
    errors,
    values,
    user,
    userAlt,
    password,
    passwordAlt,
    resetForm,
  }
})