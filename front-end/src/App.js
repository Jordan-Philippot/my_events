import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import {Card, Image} from 'react-bootstrap';
import './App.css';

function App() {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response)
        };
        fetch('/post', requestOptions);
    };
    return (
        <div className="App">
            <div className="container">
                <Card style={{width: '600px'}}>
                    <Card.Header>
                        {!login &&
                        <FacebookLogin
                            appId="1713722828786731"
                            autoLoad={true}
                            fields="name,email,picture"
                            scope="public_profile,user_friends,email"
                            callback={responseFacebook}
                            icon="fa-facebook"/>
                        }
                        {login &&
                        <Image src={picture} roundedCircle/>
                        }
                    </Card.Header>


                    {login &&
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.email}
                        </Card.Text>
                    </Card.Body>
                    }
                </Card>
            </div>
        </div>
    );
}

export default App;
