import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

export interface TipoUser {
  user: string,
  password: string
}

const schema = object().shape({
  user: string().required().label('usuário'),
  password: string().required().label('senha')
})

export const LoginStore = defineStore('store_login', () => {
  const { values, defineField, errors } = useForm<TipoUser>({
    initialValues: {
      user: '',
      password: ''
    },
    validationSchema: schema
  })

  const [user, userAlt] = defineField('user')
  const [password, passwordAlt] = defineField('password')

  return {
    errors,
    values,
    user,
    userAlt,
    password,
    passwordAlt
  }
})