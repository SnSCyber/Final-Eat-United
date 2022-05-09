import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';
import { UserProps } from '../../../../shared/prop-types/ReducerProps';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

const ProfileMain = ({ user }) => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody className="profile__card">
        <div className="profile__information">
          <div className="profile__avatar">
            <img src={Ava} alt="avatar" />
          </div>
          <div className="profile__data">
            <p className="topbar__avatar-name">
              {user && user.fullName}
            </p>
            <p className="profile__work">Administrator</p>
            <p className="profile__contact">admin@gmail.com</p>
            <p className="profile__contact" dir="ltr">+264-123-743-23-21</p>
          </div>
        </div>        
      </CardBody>
    </Card>
  </Col>
);

ProfileMain.propTypes = {
  user: UserProps.isRequired,
};

export default ProfileMain;
