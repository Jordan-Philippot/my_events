import React, {useEffect, useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import { registerOrConnect } from "../service/axios";

function Facebook() {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');


    useEffect(() => {
        const name = localStorage.getItem('userName');
        const picture = localStorage.getItem('userPicture');
        const email = localStorage.getItem('userEmail');

        if (name) {
            setLogin(true);
            setData({name, email});
            setPicture(picture);
        }

    }, []);
    const responseFacebook = (response) => {

        // RESPONSE from Facebook
        // console.log(response);

        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
        console.log(response)
        localStorage.setItem('userName', response.name)
        localStorage.setItem('userEmail', response.email)
        localStorage.setItem('userPicture', response.picture.data.url)
        localStorage.setItem('userId', response.id)
        registerOrConnect(response);
    };
    return (
        <div className="facebook-view">
            <div className="container">
                <Card.Header>
                    {!login &&
                        <FacebookLogin
                            appId="1713722828786731"
                            autoLoad={true}
                            fields="name,email,picture"
                            scope="public_profile,user_friends,email"
                            callback={responseFacebook}
                            icon="fa-facebook" />
                    }
                    {login &&
                        <Image src={picture} roundedCircle />
                    }
                </Card.Header>


                {login &&
                    <Card.Body style={{ color: 'white' }}>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.email}
                        </Card.Text>
                    </Card.Body>
                }

            </div>
        </div>
    );
}

export default Facebook;
