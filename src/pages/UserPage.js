import React, { Component } from 'react';
import Layout from './LayOut';
class UserPage extends Component {
    render() {
        return (
            <Layout showTopbar={true} showBottomBar = {true} title='用户中心'>
                <div>
                    <h3>UserPage</h3>
                </div>
            </Layout>
        );
    }
}

export default UserPage;