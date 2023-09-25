import React from 'react';
import './Login.scss';
import { get, useForm } from 'react-hook-form';
import appleIcon from '../../Assets/icons/apple.svg';
import googleIcon from '../../Assets/icons/google.svg';
import { UserContext } from './../../Contexts/UserContext';
import loginBanner from '../../Assets/imgs/login-banner.png';
import CustomInput from '../../Components/CustomForm/CustomInput/CustomInput';
import { UserRequest } from '../../Requests/UserRequest';
import useAxios from './../../Hooks/useAxios';

const Login = () => {
	const [signUpPage, setSignUpPage] = React.useState(false);

	const { userLogin } = React.useContext(UserContext);
	const { data, error, loading, post } = useAxios();
	const userReq = new UserRequest();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const formReq = async (data) => {
		const bodySignUp = {
			email: data.credential,
			username: data.username,
			password: data.password,
		};

		const { url } = userReq.USER_SIGNUP();

		!signUpPage ? await userLogin(data.credential, data.password) : await post(url, bodySignUp);
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
								errors={errors.credential?.message}
								name="credential"
								required={'Preencha esse campo'}
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
								errors={errors.password?.message}
								name="password"
								required={{ value: true, message: 'Preencha esse campo' }}
								minLength={
									signUpPage && { value: 8, message: 'O campo deve conter ao menos 8 caracteres' }
								}
								type="password "
								placeholder="Senha"
								watch={watch('password')}
							/>
							{signUpPage && (
								<CustomInput
									register={register}
									errors={errors.username?.message}
									required={true}
									name={'username'}
									pattern={/^[a-zA-Z0-9]+$/}
									placeholder="Nome de usuário"
									watch={watch('username')}
								/>
							)}

							<button>{signUpPage ? 'Cadastrar' : 'Entrar'}</button>
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
