import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { loginAction } from '../../store/api-actions';
import { isLoginError } from '../../store/user/user-selectors';

function LoginScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isAuthError = useAppSelector(isLoginError);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitLoginForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current && passwordRef.current) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
      if (!isAuthError) {
        navigate(AppRoutes.Main);
      }
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmitLoginForm}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" ref={emailRef} type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Password"
                pattern='^.*(?=.*[a-zA-Z])(?=.*\d).*$'
                title='Пароль должен содержать как минимум 1 букву и 1 цифру'
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoutes.Main}>
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;
