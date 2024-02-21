import{ Link } from 'react-router-dom';
import Header from '../components/header/header';


const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50px',
};

function NotFoundPage (): JSX.Element {
  const linkToLoginPage = <Link to='/'>Вернуться на главную страницу</Link>;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 style={containerStyle}>
          Страница не найдена
        </h1>
        <div style={containerStyle}>{linkToLoginPage}</div>
      </main>
    </div>
  );
}

export default NotFoundPage;
