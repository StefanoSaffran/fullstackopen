import React, { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinkWrapper from '~/helpers/LinkWrapper';
import Menu from './Menu';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/react.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const [width, setWidth] = useState([0]);
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth]);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleSignout = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Content>
        {width < 768 ? (
          <nav>
            <Menu />
            <img src={logo} alt="" />
          </nav>
        ) : (
          <nav>
            <img src={logo} alt="" />
            <LinkWrapper to="/blogs">Blogs</LinkWrapper>
            <LinkWrapper to="/users">Users</LinkWrapper>
          </nav>
        )}

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <small>logged in</small>
            </div>
            <button type="button" onClick={handleSignout}>
              logout
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
