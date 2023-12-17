import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { db } from '../config/FIREBASE/index';
import { ref, onValue } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

const Transaksi = () => {
    const [transactions, setTransactions] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const starCountRef = ref(db, 'transaksi/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const proccessedData = Object.keys(data).map((key) => ({
                id: key,
                makanan: data[key].makanan,
                jumlahMakanan: data[key].jumlah_makanan,
                minuman: data[key].minuman,
                jumlahMinuman: data[key].jumlah_minuman,
            }));
            setTransactions(proccessedData);
        });
    }, []);

    const handleDetail = async (id) => {
        try {
            navigation.navigate("Detail", { transactionId: id });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: '#D80032' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#F0DE36' }}>Daftar Transaksi</Text>

            {/* Tombol tambah transaksi */}
            <TouchableOpacity
                style={{
                    padding: 15,
                    backgroundColor: '#17B978',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    elevation: 5,
                }}
                onPress={() => {
                    // Logika tambah transaksi
                    console.log('Tambah Transaksi');
                }}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Tambah Transaksi</Text>
            </TouchableOpacity>

            {/* Daftar transaksi */}
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            marginBottom: 20,
                            borderRadius: 10,
                            backgroundColor: 'white',
                            padding: 15,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 4,
                            elevation: 3,
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>Pesanan: {item.id}</Text>
                        <Text style={{ fontSize: 16, color: '#666' }}>Makanan: {item.makanan}</Text>
                        <Text style={{ fontSize: 16, color: '#666' }}>Jumlah makanan: {item.jumlahMakanan}</Text>
                        <Text style={{ fontSize: 16, color: '#666' }}>Minuman: {item.minuman}</Text>
                        <Text style={{ fontSize: 16, color: '#666' }}>Jumlah minuman: {item.jumlahMinuman}</Text>

                        {/* Button untuk ke detail transaksi */}
                        <TouchableOpacity
                            onPress={() => handleDetail(item.id)}
                            style={{
                                marginTop: 10,
                                padding: 10,
                                backgroundColor: '#3498db',
                                borderRadius: 5,
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ color: 'white', fontSize: 14 }}>Detail Transaksi</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default Transaksi;
