import * as S from './styles'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Eye, EyeSlash } from '@phosphor-icons/react'
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
                <input
                  type="cpf"
                  id="cpf"
                  {...register('cpf', { valueAsNumber: true })}
                />
                { errors.cpf  && (
                  <span > {errors.cpf?.message} </span>)
                }
              </S.FormCadastro>
              <S.FormCadastro>
                <label htmlFor="number">Numero de Telefone</label>
                <input
                  type="tel"
                  id="number"
                  {...register('number', { valueAsNumber: true })}
                />
                { errors.number  && (
                  <span > {errors.number?.message} </span>)
                }
              </S.FormCadastro>
              <S.FormCadastro>
                <label htmlFor="nasc">Data de Nascimento</label>
                <input
                  type="date"
                  id="nasc"
                  {...register('nasc', { valueAsNumber: true })}
                />
                { errors.nasc  && (
                  <span > {errors.nasc?.message} </span>)
                }
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
