import React from 'react';
import './LoginModal.scss';
import { useForm } from 'react-hook-form';
import useUtils from '../../../Hooks/useUtils';
import GoogleIcon from '../../../Assets/icons/GoogleIcon';
import AppleIcon from './../../../Assets/icons/AppleIcon';
import { UserContext } from '../../../Contexts/UserContext';
import { GlobalContext } from '../../../Contexts/GlobalContext';
import CustomInput from './../../../Components/CustomForm/CustomInput/CustomInput';

const LoginModal = () => {
	const [signUpModal, setSignUpModal] = React.useState(false);

	const { userLogin, userRegister, login, error, loading } = React.useContext(UserContext);
	const { loginModal, setLoginModal } = React.useContext(GlobalContext);

	const { closeModal } = useUtils();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const formReq = async (data) => {
		if (!signUpModal) {
			await userLogin(data.credential, data.password);
		} else {
			await userRegister(data.credential, data.password, data.username);
		}
	};

	React.useEffect(() => {
		if (login) setLoginModal(false);
	}, [login]);

	return (
		<div
			onClick={(e) => {
				closeModal(e, loginModal, setLoginModal);
			}}
			className="lgn-md-ctr"
		>
			<div className="lgn-md-box animeFadeIn">
				<div className="lgn-md-box-header">
					<h1>Entrar</h1>
					<p>
						Ao continuar, você concorda com nosso <span>Contrato de usuário</span> e nossa{' '}
						<span>Política de privacidade</span>
					</p>
				</div>

				<div className="lgn-md-card">
					<div className="lgn-md-c-header">
						<div>
							<button>
								<GoogleIcon />
								Continuar com o Google
								<span />
							</button>

							<button>
								<AppleIcon />
								Continuar com a Apple
								<span />
							</button>
						</div>

						<div className="or-box">
							<span>ou</span>
						</div>

						<div className="lgn-md-c-form">
							<form onSubmit={handleSubmit(formReq)}>
								<CustomInput
									register={register}
									name="credential"
									type="text"
									required={'Preencha esse campo'}
									errors={errors.credential?.message}
									placeholder={!signUpModal ? 'Email ou username' : 'Email'}
									pattern={
										signUpModal && {
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
										signUpModal && {
											value: 8,
											message: 'O campo deve conter ao menos 8 caracteres',
										}
									}
									watch={watch('password')}
								/>
								{signUpModal && (
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

								{error && <p className="lgn-md-error">{error}</p>}

								{loading ? (
									<button>{signUpModal ? 'Cadastrando...' : 'Entrando...'}</button>
								) : (
									<button>{signUpModal ? 'Cadastrar' : 'Entrar'}</button>
								)}
							</form>
							<div className="lgn-md-form-footer">
								{!signUpModal && (
									<p>
										Esqueceu a <span>senha</span>?
									</p>
								)}

								{!signUpModal ? (
									<p onClick={() => setSignUpModal(true)}>
										Primeira vez no metaddit? <strong>Cadastre-se</strong>
									</p>
								) : (
									<p onClick={() => setSignUpModal(false)}>
										Já possui uma conta? <strong>Entre</strong>
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginModal;
