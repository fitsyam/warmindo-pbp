import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

const DetailTransaksi = ({ transactionId }) => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    // Load data transaksi berdasarkan id
    const starCountRef = ref(db, `transaksi/${transactionId}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setTransaction(data);
    });
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Judul */}
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Detail Transaksi</Text>

      {/* Data transaksi */}
      {transaction && (
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ID: {transaction.id}</Text>
          <Text style={{ fontSize: 16 }}>Tanggal: {transaction.tanggal}</Text>
          <Text style={{ fontSize: 16 }}>Waktu: {transaction.waktu}</Text>
          <Text style={{ fontSize: 16 }}>Makanan: {transaction.makanan}</Text>
          <Text style={{ fontSize: 16 }}>Jumlah makanan: {transaction.jumlahMakanan}</Text>
          <Text style={{ fontSize: 16 }}>Minuman: {transaction.minuman}</Text>
          <Text style={{ fontSize: 16 }}>Jumlah minuman: {transaction.jumlahMinuman}</Text>
        </View>
      )}
    </View>
  );
};

export default DetailTransaksi;
