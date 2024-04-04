import { Link } from 'react-router-dom';
import FurniroLogo from '../assets/player.png';
import icons1 from '../assets/icons/1.svg';
import icons2 from '../assets/icons/2.svg';
import icons3 from '../assets/icons/3.svg';
import icons4 from '../assets/icons/4.svg';
import { useState, useEffect } from 'react';
import '../components/style/Header.css';

const HeaderPage = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 50;

      setHeaderVisibility(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const headerClass = isHeaderVisible ? 'navbar' : 'navbar navbar--hidden';

  return (
    <div className={headerClass}>
      <Link to="/" className="nav-link">
        <a className="header__logo">
          <img src={FurniroLogo} style={{ width: '150px', height: '41px', borderRadius: '10px' }} alt="Logo" />
        </a>
      </Link>

      <div className="links">
        <a href="http://localhost:5173/">Trang chủ</a>
        <a href="#">Sản Phẩm</a>
        <a href="#">Tin tức</a>
        <a href="#">Liên hệ</a>
      </div>
      
      <div className="icons">
        <div className="header-item-user">
          <span><img src={icons4} alt="Icon" /></span>
        </div>
        <div className="header-item-user">
          <span><img src={icons3} alt="Icon" /></span>
        </div>
        <div className="header-item-user">
          <span><img src={icons2} alt="Icon" /></span>
        </div>
        <div className="header-item-user">
          <span><img src={icons1} alt="Icon" /></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
