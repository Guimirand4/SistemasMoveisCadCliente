import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5", // Cor de fundo leve
  },
  input: {
    width: "50%",
    marginBottom: 15,
    backgroundColor: "#fff", // Fundo branco para campos de entrada
  },
  button: {
    width: "50%",
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#000", // Canto arredondado para botões
  },
  header: {
    backgroundColor: "#6200ee", // Cor de fundo da barra superior
  },
  title: {
    color: "#fff", // Cor do texto da barra superior
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Foto circular
    backgroundColor: "#ddd", // Cor de fundo para área de foto
  },
});
