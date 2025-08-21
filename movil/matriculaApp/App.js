import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function App() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    fetch("http://192.168.18.18:3000/alumnos/cursos")
      .then(res => res.json())
      .then(data => setAlumnos(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Alumnos</Text>
      <FlatList
        data={alumnos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.nombre} - {item.correo} - Cursos: {item.cursos_matriculados}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});
