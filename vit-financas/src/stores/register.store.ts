import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import { string, object } from 'yup'

export interface TypeRegisterLogin {
  name: string,
  lastName: string,
  passwordRegister: string
}

const schema_register = object().shape({
  name: string().required().label('name'),
  lastName: string().required().label('lastName'),
  passwordRegister: string().required().label('password')
})

export const RegisterLoginStore = defineStore('store_register_login', () => {
  const { values, errors, defineField, resetForm, submitForm } = useForm<TypeRegisterLogin>({
    validationSchema: schema_register
  })

  const [name, nameAlt] = defineField('name')
  const [lastName, lastNameAlt] = defineField('lastName')
  const [passwordRegister, passwordRegisterAlt] = defineField('passwordRegister')

  return {
    name,
    nameAlt,
    lastName,
    lastNameAlt,
    passwordRegister,
    passwordRegisterAlt,
    values,
    errors,
    resetForm,
    submitForm,
  }
})