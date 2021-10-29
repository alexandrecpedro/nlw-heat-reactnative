import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from "./styles";

export function SendMessageForm() {
    const [message, setMessage] = useState(''); // focus = message content
    const [sendingMessage, setSendingMessage] = useState(false); // focus = message is being sent?

    // async function to send messages to back-end
    async function handleMessageSubmit() {
        const messageFormatted = message.trim();

        // is there empty messages?
        if (messageFormatted.length > 0) {
            // a message is being sent
            setSendingMessage(true);
            await api.post('/messages', { message: messageFormatted });

            // clean message
            setMessage('');
            // close the keyboard
            Keyboard.dismiss();
            // message was sent
            setSendingMessage(false);
            Alert.alert("Mensagem enviada com sucesso!")
        } else {
            Alert.alert("Escreva a mensagem para enviar.")
        }
    }

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
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
            />
        </View>
    );
}
