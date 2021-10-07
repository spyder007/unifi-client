import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";
import { AlertMessageList } from '../components/AlertMessageList/AlertMessageList';
import { Footer } from '../components/Footer/Footer';
import { NavMenu } from '../components/NavMenu/NavMenu';
import { RootState } from '../store/rootReducer';


interface SimpleProps {
  component: any
  path?: string;
  exact?: boolean;
  isPrivate?: boolean;
}

export const SimplePage: React.FC<SimpleProps> = (props) => {
  const { component: Component, isPrivate: boolean, ...rest } = props;
  const user = useSelector((state: RootState) => state.user.user)

  const layoutRender = (matchProps: any) => (
    <React.Fragment>
      <NavMenu />
      <div className="container">
        <AlertMessageList />
        <Component {...matchProps} />
      </div>
      <Footer />
    </React.Fragment>
  );

  const renderRoute = () => {
    if (props.isPrivate) {

      return user
        ? (<Route {...rest} render={layoutRender} />)
        : (<Redirect to={'/login'} />)
    }

    return (<Route {...rest} render={layoutRender} />);
  };

  return renderRoute();
};

