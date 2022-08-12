import React from 'react';
import Frame_Container from '../containers/Frame_Container';
import styles from '../css/App.module.css';

export class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <Frame_Container />
            </div>
        );
    }
}