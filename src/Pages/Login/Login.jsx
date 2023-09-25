import React from 'react';
import './Login.scss';
import { useForm } from 'react-hook-form';
import appleIcon from '../../Assets/icons/apple.svg';
import googleIcon from '../../Assets/icons/google.svg';
import { UserContext } from './../../Contexts/UserContext';
import loginBanner from '../../Assets/imgs/login-banner.png';
import CustomInput from '../../Components/CustomForm/CustomInput/CustomInput';

const Login = () => {
	const [signUpPage, setSignUpPage] = React.useState(false);

	const user = React.useContext(UserContext);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const formReq = async (data) => {
		!signUpPage
			? await user.userLogin(data.credential, data.password)
			: await user.userRegister(data.credential, data.password, data.username);
	};

	return (
		<div className="lgn-ctr">
			<div className="lgn-banner" style={{ backgroundImage: `url(${loginBanner})` }} />

			<div className="lgn-box">
				<div className="lgn-box-header">
					<h1>Entrar</h1>
					<p>
						Ao continuar, você concorda com nosso <span>Contrato de usuário</span> e nossa{' '}
						<span>Política de privacidade</span>
					</p>
				</div>

				<div className="lgn-card">
					<div className="lgn-c-header">
						<div>
							<button>
								<img src={googleIcon} />
								Continuar com o Google
								<span />
							</button>

							<button>
								<img src={appleIcon} />
								Continuar com a Apple
								<span />
							</button>
						</div>

						<div className="or-box">
							<span>ou</span>
						</div>
					</div>

					<div className="lgn-c-form">
						<form onSubmit={handleSubmit(formReq)}>
							<CustomInput
								register={register}
								name="credential"
								type="email"
								required={'Preencha esse campo'}
								errors={errors.credential?.message}
								placeholder={!signUpPage ? 'Email ou username' : 'Email'}
								pattern={
									signUpPage && {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: 'Email inválido',
									}
								}
								watch={watch('credential')}
							/>
							<CustomInput
								register={register}
								name="password"
								type="password"
								required={{ value: true, message: 'Preencha esse campo' }}
								errors={errors.password?.message}
								placeholder="Senha"
								minLength={
									signUpPage && { value: 8, message: 'O campo deve conter ao menos 8 caracteres' }
								}
								watch={watch('password')}
							/>
							{signUpPage && (
								<CustomInput
									register={register}
									name="username"
									required={'Preencha esse campo'}
									errors={errors.username?.message}
									placeholder="Nome de usuário"
									pattern={/^[a-zA-Z0-9]+$/}
									watch={watch('username')}
								/>
							)}

							{user.error && <p className="lgn-error">{user.error}</p>}

							{user.loading ? (
								<button disabled>{signUpPage ? 'Cadastrando...' : 'Entrando...'}</button>
							) : (
								<button>{signUpPage ? 'Cadastrar' : 'Entrar'}</button>
							)}
						</form>
						{!signUpPage && (
							<p>
								Esqueceu a <span>senha</span>?
							</p>
						)}
					</div>

					{!signUpPage ? (
						<p onClick={() => setSignUpPage(true)}>
							Primeira vez no metaddit? <strong>Cadastre-se</strong>
						</p>
					) : (
						<p onClick={() => setSignUpPage(false)}>
							Já possui uma conta? <strong>Entre</strong>
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;
