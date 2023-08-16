import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import {
  Container,
  UserAvatar,
  User,
  UserProfile,
  UserNotification,
  TitleSession,
  ItemSession
} from './styles';

import avatar from '../../assets/images/avatar.svg';

import { FiBell } from 'react-icons/fi';

import { items } from '../../assets/resources/items';
import { pentaho } from '../../services/api';
import { parseCDF } from '../../utils/parseCDF';

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState('Home');
  const [user, setUser] = useState('');
  const [roles, setRoles] = useState('');

  useEffect(() => {
    (async () => {
      
      try {

        const response = await pentaho.get('plugin/pentaho-cdf/api/cdf-embed.js');
        const parsedResponse = await parseCDF(response.data);

        setUser(parsedResponse.user);
        setRoles(parsedResponse.roles);

      } catch(error) {
        console.log('$Error: ', error);
      }

    })();
  }, []);

  function handleSelectItem(name: string) {
    setSelectedItem(name);
  }

  const isAdmin = roles.includes('Administrator');

  return (
    <Container>

      <User>
        <UserAvatar src={avatar} />
        <UserProfile>
          <strong>{user}</strong>
          <span>GETIC-SIS</span>
        </UserProfile>
        <Link to='/notification'>
          <UserNotification>
            <FiBell />
          </UserNotification>
        </Link>
      </User>


      {items.map((item) => {

        const { session, sessionItems, isProtected } = item;

        return (

          <div key={session}>
            {isProtected === (isAdmin ? isProtected : false) &&  (
              <>
                <TitleSession>
                  <span>{session}</span>
                </TitleSession>

                {sessionItems.map((sessionItem) => {

                  const { name, path, Icon, dev } = sessionItem;

                  const isSelected = selectedItem === name;

                  return (
                    <Link key={name} to={path} onClick={() => handleSelectItem(name)}>
                      <ItemSession isSelected={isSelected ? true : false}>
                        <Icon />
                        <span>{sessionItem.name}</span>
                        {dev && (
                          <div className="dev">
                            <strong>Dev</strong>
                          </div>
                        )}
                      </ItemSession>
                    </Link>
                  );
                })}
              </>
            )}
          </div>

        );
      })}
    </Container>
  );
}
