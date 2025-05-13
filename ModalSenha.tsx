{/* Modal */}
     {showModal && (
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <Text style={styles.modalText}>{modalMessage}</Text>
      <Button
        mode="contained"
        onPress={() => setShowModal(false)}
        buttonColor="#00C20D"
        style={{ marginTop: 16 }}
      >
        OK
      </Button>
    </View>
  </View>
)}
modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
   
  },
  modalText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },