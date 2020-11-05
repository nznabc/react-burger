import React, { Component } from 'react';
import axios from '../../../axios-order';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
class ContactData extends Component {
    state = {
        name: '',
        emial: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        alert('You continue');
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Nazi',
                address: {
                    street: 'Cedar',
                    zipCode: '23423',
                    country: 'UK'
                },
                email: 'testxdf'
            },
            deliveryMethod: 'sdfsd'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contract Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;