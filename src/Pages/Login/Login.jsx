import React from 'react';
import './Login.scss';
import loginBanner from '../../Assets/imgs/login-banner.png';
import googleIcon from '../../Assets/icons/google.svg';
import appleIcon from '../../Assets/icons/apple.svg';
import CustomInput from '../../Components/CustomForm/CustomInput/CustomInput';

const Login = () => {
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
						<form>
							<CustomInput placeholder="Email ou username" />
							<CustomInput placeholder="Senha"></CustomInput>
							<button>Entrar</button>
						</form>
						<p>
							Esqueceu a <span>senha</span>?
						</p>
					</div>

					<p>
						Primeira vez no metaddit? <strong>Cadastre-se</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
