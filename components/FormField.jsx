import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import eye from '../assets/icons/eye.png';
import eyeHide from '../assets/icons/eye-hide.png';

const FormField = ({ title, placeholder, value, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={{ marginBottom: 16, ...otherStyles }}>
            <Text style={{ fontSize: 16, color: '#ccc', marginBottom: 8 }}>{title}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#333',
                borderWidth: 2,
                backgroundColor: '#222',
                borderRadius: 16,
                paddingHorizontal: 16,
                height: 64
            }}>
                <TextInput
                    style={{ flex: 1, color: '#fff', fontSize: 16 }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    {...props}
                />
                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={showPassword ? eyeHide : eye}
                            style={{ width: 24, height: 24 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;