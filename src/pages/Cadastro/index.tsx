import * as S from './styles'
import { Eye, EyeSlash } from '@phosphor-icons/react'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import InputMask from 'react-input-mask'

import HeaderLogin from '../../components/HeaderLogin'
import FooterLogin from '../../components/FooterLogin'

type PasswordType = 'password' | 'text'

const loginFormValidationSchema = zod.object({
  username: zod.z.string().nonempty("Digite seu nome").regex(/^[A-Za-z]+$/i, "Somente letras são permitidas"),
  email: zod.string().email('Digite um e-mail válido'),
  number: zod.number({ invalid_type_error: 'Informe o Número' }),
  nasc: zod.number({ invalid_type_error: 'Informe a Data' }),
  cpf: zod.number({ invalid_type_error: 'Informe o CPF' }),
  password: zod.string().nonempty('Digite a sua senha'),
  confirm_password: zod.string().nonempty("Confirme a senha"),
})
.refine(({ confirm_password}) => confirm_password, {
  message: "A senha não corresponde",
  path: ["confirm_password"]
})


type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>

const Cadastro = () => {
  const [
    inputPasswordType,
    setInputPasswordType
  ] = useState<PasswordType>('password')

  const handleTogglePasswordType = ( type:PasswordType ) => {
    switch ( type ) {
      case 'password':
        setInputPasswordType('text')
        return
      case 'text':
      default:
        setInputPasswordType('password')
        return
    }
  }

  const loginForm = useForm<NewLoginFormData>({
    resolver: zodResolver(loginFormValidationSchema)
  })

  const { register, handleSubmit, formState, reset } = loginForm

  const { errors } = formState

  const handleLoginSubmit = (data: NewLoginFormData, ) => {
    console.log(data)
    reset()
  }

  return (
    <>
      <HeaderLogin />
        <S.Cadastro>
        <S.CadastroSecundary>
          <S.MainCadastro>
            <S.HeaderCadastro>
              <h1>Cadastrar</h1>
            </S.HeaderCadastro>

            <form onSubmit={handleSubmit(handleLoginSubmit)}>
              <S.FormCadastro>
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="name"
                  id="name"
                  {...register('username', { required: true })}
                />
                { errors.username  && (
                  <span > {errors.username?.message} </span>)
                }
              </S.FormCadastro>
              <S.FormCadastro>
                <label htmlFor="cpf">CPF</label>
                <InputMask
                    id="cpf"
                    type="text"
                    name="cpf"
                    mask="999.999.999-99"
                  />
              </S.FormCadastro>
              <S.FormCadastro>
                <label htmlFor="number">Número de Telefone</label>
                <InputMask
                    id="number"
                    type="tel"
                    name="number"
                    mask="(99) 9999-9999"
                  />
              </S.FormCadastro>
              <S.FormCadastro>
                <label htmlFor="nasc">Data de Nascimento</label>
                <InputMask
                    id="nasc"
                    type="text"
                    name="nasc"
                    mask="99/99/9999"
                  />
              </S.FormCadastro>
              <S.FormCadastro>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                />
                { errors.email  && (
                  <span > {errors.email?.message} </span>)
                }
              </S.FormCadastro>
              <S.FormCadastro>
                <label htmlFor="email">Digite novamente o E-mail</label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                />
                { errors.email  && (
                  <span > {errors.email?.message} </span>)
                }
              </S.FormCadastro>
              <S.FormCadastro>
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type={inputPasswordType}
                  {...register('password')}
                />
                <button
                  type='button'
                  onClick={() => handleTogglePasswordType(inputPasswordType)}
                >
                  { inputPasswordType === 'password' ? <EyeSlash /> : <Eye /> }
                </button>
                { errors.password  && (
                  <span className="text-red text-sm"> {errors.password?.message} </span>)
                }
              </S.FormCadastro>
              <S.FormCadastro>
                <label htmlFor="password">Digite novamente a senha</label>
                <input
                  id="password"
                  type={inputPasswordType}
                  {...register('confirm_password')}
                />
                <button
                  type='button'
                  onClick={() => handleTogglePasswordType(inputPasswordType)}
                >
                  { inputPasswordType === 'password' ? <EyeSlash /> : <Eye /> }
                </button>
                { errors.password  && (
                  <span className="text-red text-sm"> {errors.password?.message} </span>)
                }
              </S.FormCadastro>

              <S.FooterCadastro>
                <button type="submit">
                  Cadastrar
                </button>
              </S.FooterCadastro>
            </form>
          </S.MainCadastro>
        </S.CadastroSecundary>
        </S.Cadastro>
      <FooterLogin />
    </>
  )
}

export default Cadastro


// const [purchase, { }] = usePurchaseMutation()
// const form = useFormik({
//   initialValues: {
//     number: '',
//     nasc: '',
//     cpf: '',
//   },
//   validationSchema: Yup.object({
//     cpf: Yup.string()
//     .min(14, 'O campo precisa ter 14 caracteres')
//     .max(15, 'O campo precisa ter 14 caracteres')
//     .required('O campo é obrigatório'),
//     number: Yup.string()
//       .required('O campo é obrigatório'),
//     nasc: Yup.string()
//       .required('O campo é obrigatório')
//   }),
//   onSubmit: (values) => {
//     purchase({
//       cadastro: {
//         cpf: values.cpf,
//         number: values.number,
//         nasc: values.nasc
//       }
//     })
//   }
// })

// const checkInputHasError = (fieldName: string) => {
//   const isTouched = fieldName in form.touched
//   const isInvalid = fieldName in form.errors
//   const hasError = isTouched && isInvalid

//   return hasError
// }
