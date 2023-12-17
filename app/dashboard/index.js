import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Dashboard = () => {
    // Penggunaan data palsu sebagai contoh
    const userName = "Fa'iq Rindha Maulana";
    const userRole = "Admin";  
    
    const handleMasuk = async () => {
        try {
            navigation.navigate("transaksi");
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D80032' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, marginBottom: 12 }}>
                <Text style={{ color: '#333', fontSize: 18, fontWeight: 'bold', fontFamily: 'Arial' }}>Profil</Text>
                <Text style={{ color: '#333', marginTop: 5, fontSize: 16 }}>{`Nama: ${userName}`}</Text>
                <Text style={{ color: '#333', marginTop: 5, fontSize: 16, fontStyle: 'italic' }}>{`Role: ${userRole}`}</Text>
            </View>

            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D80032' }}>
                <TouchableOpacity
                    style={{
                        padding: 10,
                        backgroundColor: '#17B978',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={handleMasuk}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Masuk</Text>
                    
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Dashboard;
