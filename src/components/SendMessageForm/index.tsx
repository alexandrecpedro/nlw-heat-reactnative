import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from "./styles";

export function SendMessageForm() {
    const [message, setMessage] = useState(''); // focus = message content
    const [sendingMessage, setSendingMessage] = useState(false); // focus = message is being sent?

    return (
        <View style={styles.container}>
            <TextInput 
                keyboardAppearance="dark" // on iOS
                placeholder="Qual é a sua expectativa para o evento?"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                maxLength={140} // character limit
                onChangeText={setMessage}
                value={message}
                style={styles.input}
                editable={!sendingMessage} // editable only if its not sending
            />

            <Button 
                title="ENVIAR MENSAGEM" 
                backgroundColor={COLORS.PINK}
                color={COLORS.WHITE} 
                isLoading={false} 
            />
        </View>
    );
}
