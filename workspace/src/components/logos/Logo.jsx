import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const Logo = ({ logo }) => {
    const renderLogoContent = () => {
        switch (logo) {
            case 1:
                return (
                    <div style={styles.cleaningContainer}>
                        <div style={styles.dust}>Dust</div>
                        <div style={styles.busters}>Busters</div>
                    </div>
                );
            case 3:
                return <div style={styles.soleSoul}>SoleSoul.com</div>;
            case 4:
                return (
                    <div style={styles.chatContainer}>
                        <div style={styles.classChat}>Class</div>
                        <div style={styles.chatRow}>
                            <div style={{ ...styles.classChat, marginLeft: '55px' }}>Chat</div>
                            <FontAwesomeIcon style={styles.chatIcon} icon={faMessage} />
                        </div>
                    </div>
                );
            case 5:
                return <div style={styles.movieNight}>Movie Night</div>;
            default:
                return null;
        }
    };

    return <Container>{renderLogoContent()}</Container>;
};

export default Logo;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-family: 'Poppins';
`;

const styles = {
    cleaningContainer: {
        display: 'flex',
        width: '100%',
        padding: '10px',
        backgroundColor: 'var(--dark)',
    },
    dust: {
        fontSize: '1.1em',
        color: 'white',
        fontFamily: 'Poppins',
    },
    busters: {
        fontSize: '1.1em',
        color: '#FFD530',
        fontFamily: 'Poppins',
    },
    soleSoul: {
        fontSize: '1.2em',
        color: 'var(--bisque)',
        fontFamily: 'Righteous',
    },
    chatContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        borderRadius: '3px',
        marginRight: '30px',
    },
    classChat: {
        fontSize: '1.4em',
        color: '#F7ECE1',
        fontFamily: 'Arial',
    },
    chatRow: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-10px',
        gap: '5px',
    },
    chatIcon: {
        color: 'var(--neon-green)',
        marginTop: '12px',
        fontStyle: 'bold',
    },
    movieNight: {
        fontSize: '1.2em',
        fontFamily: 'Righteous',
        color: 'var(--bisque)',
        padding: '5px',
        border: '4px solid var(--bisque)',
        borderRadius: '10px',
        textShadow: `
            0 0 0.125em rgb(223, 58, 29),
            0 0 0.45em rgb(255, 42, 5)
        `,
        boxShadow: '0 0 0.2em',
    },
};
