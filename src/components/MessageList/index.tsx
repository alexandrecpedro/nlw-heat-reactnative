import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

export function MessageList() {
    return (
        // ScrollView activates scroll properties if messages don't fit enough space on screen
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.content} 
            // Determines when the keyboard should stay visible after a tap
            keyboardShouldPersistTaps="never"
        > 
            <Message data={{ id: '', text: '', user: { name: '', avatar_url: '' } }} />
        </ScrollView>
    )
}