import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const.tsx';
import '/src/pages/not-found-page/not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="body">
      <section id="not-found">
        <div id="title"><Link to={AppRoutes.Main}>Вернуться на главную</Link> &bull; 404 Error Page</div>
        <div className="circles">
          <p>404<br />
            <small>PAGE NOT FOUND</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;
