import React, {Component} from 'react';
import { Col, Row } from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends Component {

    state = {
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        console.log('Error');
        this.setState({error: true});
    }

    onSelectedChar = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList onSelectedChar={this.onSelectedChar}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
          
        )
    }
}