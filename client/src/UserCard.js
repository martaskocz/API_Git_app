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
                        <span className='date'>Living in {this.props.city}</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='star' />
                        22 Followers
                    </a>
                    <br/>
                    <a>
                        <Icon name='user' />
                        22 Following
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='folder open' />
                        {this.props.publicrepos} Public repos
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default UserCard