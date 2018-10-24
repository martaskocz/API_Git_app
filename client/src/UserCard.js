import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class UserCard extends React.Component {
    constructor (props) {
        super(props);
    }

    render(){
        return(
            <Card>
                <Image src={this.props.avatar} />
                <Card.Content>
                    <Card.Header>{this.props.user}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default UserCard