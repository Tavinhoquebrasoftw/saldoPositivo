// import { useEffect, useState } from 'react';
// import { View, Text, TextInput, Button, Alert, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
// import firebase from '../../../firebase';
// import * as DocumentPicker from 'expo-document-picker';
// import * as FileSystem from 'expo-file-system';
// import { decode } from 'base64-arraybuffer';
// import { supabase } from '../../lib/supabase';

// export default function Prof2() {
//   const [info, setInfo] = useState('');
//   const [link, setLink] = useState('');
//   const [docId, setDocId] = useState<string | null>(null);
//   const [modo, setModo] = useState('visualizar'); 
//   const [arquivos, setArquivos] = useState<any[]>([]);
//   const [uploadingPdf, setUploadingPdf] = useState(false);

//   useEffect(() => {
//     const unsubscribe = firebase.firestore().collection('Salas').onSnapshot((snapshot) => {
//       if (!snapshot.empty) {
//         const doc = snapshot.docs[0];
//         const data = doc.data();
//         setDocId(doc.id);
//         carregarArquivos();
//         setInfo(data.info || '');
//         setLink(data.link || '');
//       }
//     });
  
//     return () => unsubscribe();
//   }, []);

//   const carregarArquivos = async () => {
//     if (!docId) return;
  
//     const snapshot = await firebase
//       .firestore()
//       .collection('ArquivosSala')
//       .where('salaId', '==', docId)
//       .orderBy('createdAt', 'desc')
//       .get();
  
//     const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setArquivos(lista);
//   };

//   const atualizarSala = async () => {
//     if (docId) {
//       try {
//         await firebase.firestore().collection('Salas').doc(docId).update({
//           info,
//           link,
//         });
//         Alert.alert('Sucesso', 'Informações atualizadas com sucesso!');
//         setModo('visualizar');
//       } catch (error) {
//         Alert.alert('Erro', 'Não foi possível atualizar a sala.');
//         console.error(error);
//       }
//     }
//   };

//   const deletarSala = async () => {
//     if (docId) {
//       try {
//         await firebase.firestore().collection('Salas').doc(docId).delete();
//         setInfo('');
//         setLink('');
//         setDocId(null);
//         Alert.alert('Sucesso', 'Sala excluída com sucesso!');
//         setModo('visualizar');
//       } catch (error) {
//         Alert.alert('Erro', 'Não foi possível excluir a sala.');
//         console.error(error);
//       }
//     }
//   };

//   const deletarArquivo = async (arquivoId: string, fileName: string) => {
//     try {
//       // Remove do Firebase
//       await firebase.firestore().collection('ArquivosSala').doc(arquivoId).delete();
      
//       // Remove do Supabase Storage
//       const { error } = await supabase.storage
//         .from('filespdf')
//         .remove([fileName]);
      
//       if (error) throw error;
      
//       Alert.alert('Sucesso', 'Arquivo removido com sucesso!');
//       carregarArquivos();
//     } catch (error) {
//       Alert.alert('Erro', 'Não foi possível remover o arquivo');
//       console.error(error);
//     }
//   };

//   const uploadPdf = async () => {
//   if (!docId) {
//     Alert.alert('Erro', 'Nenhuma sala selecionada');
//     return;
//   }

//   try {
//     setUploadingPdf(true);
    
//     const result = await DocumentPicker.getDocumentAsync({
//       type: 'application/pdf',
//       copyToCacheDirectory: false, // Alterado para false
//     });

//     if (result.canceled || !result.assets[0]) return;

//     const file = result.assets[0];
//     console.log('Arquivo selecionado:', file);

//     // 1. Ler o arquivo diretamente como blob
//     const response = await fetch(file.uri);
//     const blob = await response.blob();
    
//     // 2. Configurar nome único para o arquivo
//     const fileExt = file.name.split('.').pop() || 'pdf';
//     const fileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
    
//     // 3. Upload para o Supabase
//     console.log('Iniciando upload para Supabase...');
//     const { error: uploadError } = await supabase.storage
//       .from('filespdf')
//       .upload(fileName, blob, {
//         contentType: 'application/pdf',
//         upsert: false,
//       });

//     if (uploadError) {
//       console.error('Erro no upload Supabase:', uploadError);
//       throw uploadError;
//     }

//     // 4. Obter URL pública
//     console.log('Obtendo URL pública...');
//     const { data: { publicUrl } } = supabase.storage
//       .from('filespdf')
//       .getPublicUrl(fileName);

//     // 5. Salvar no Firestore
//     console.log('Salvando no Firestore...');
//     await firebase.firestore().collection('ArquivosSala').add({
//       salaId: docId,
//       nomeArquivo: file.name,
//       nomeStorage: fileName,
//       url: publicUrl,
//       tipo: 'pdf',
//       createdAt: new Date(),
//     });

//     Alert.alert('Sucesso', 'PDF enviado com sucesso!');
//     carregarArquivos();
//   } catch (error) {
//     console.error('Erro completo no upload:', error);
//     Alert.alert(
//       'Erro no upload', 
//       error.message || 'Falha ao enviar o PDF. Verifique sua conexão.'
//     );
//   } finally {
//     setUploadingPdf(false);
//   }
// };
// // Adicione este teste no seu código
// const testSupabaseConnection = async () => {
//   try {
//     const { data, error } = await supabase
//       .storage
//       .from('filespdf')
//       .list();
    
//     if (error) throw error;
//     console.log('Conexão OK. Arquivos no bucket:', data);
//   } catch (error) {
//     console.error('Falha na conexão com Supabase:', error);
//   }
// };
//   return (
//     <View style={{ padding: 20, flex: 1 }}>
//       <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Painel do Professor</Text>

//       {modo === 'visualizar' && (
//         <>
//           <Text style={{ fontWeight: 'bold' }}>Informações:</Text>
//           <Text style={{ marginBottom: 15 }}>{info || 'Nenhuma informação cadastrada'}</Text>

//           <Text style={{ fontWeight: 'bold' }}>Link:</Text>
//           <Text style={{ marginBottom: 15 }}>{link || 'Nenhum link cadastrado'}</Text>

//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
//             <Button title="Editar Sala" onPress={() => setModo('editar')} />
//             <Button title="Excluir Sala" color="red" onPress={() => setModo('excluir')} />
//           </View>

//           <View style={{ marginTop: 20 }}>
//             <Button 
//               title="Adicionar PDF" 
//               onPress={uploadPdf} 
//               disabled={uploadingPdf}
//             />
            
//             {uploadingPdf && (
//               <View style={{ marginTop: 10 }}>
//                 <ActivityIndicator size="small" />
//                 <Text style={{ textAlign: 'center' }}>Enviando PDF...</Text>
//               </View>
//             )}

//             <Text style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Arquivos Enviados:</Text>
            
//             {arquivos.length === 0 ? (
//               <Text style={{ fontStyle: 'italic' }}>Nenhum arquivo enviado</Text>
//             ) : (
//               <ScrollView style={{ maxHeight: 200, marginBottom: 20 }}>
//                 {arquivos.map((arq, idx) => (
//                   <View key={arq.id} style={{ 
//                     flexDirection: 'row', 
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginVertical: 5,
//                     padding: 8,
//                     backgroundColor: '#f5f5f5',
//                     borderRadius: 5
//                   }}>
//                     <TouchableOpacity onPress={() => Alert.alert('Link do PDF', arq.url)}>
//                       <Text style={{ color: '#007AFF' }}>
//                         {arq.nomeArquivo}
//                       </Text>
//                     </TouchableOpacity>
//                     <Button 
//                       title="Excluir" 
//                       color="red" 
//                       onPress={() => deletarArquivo(arq.id, arq.nomeStorage)}
//                     />
//                   </View>
//                 ))}
//               </ScrollView>
//             )}
//           </View>
//         </>
//       )}

//       {modo === 'editar' && (
//         <>
//           <Text style={{ fontWeight: 'bold' }}>Editar Informações:</Text>
//           <TextInput
//             value={info}
//             onChangeText={setInfo}
//             placeholder="Digite as informações da sala"
//             multiline
//             numberOfLines={3}
//             style={{
//               borderWidth: 1,
//               borderColor: '#ccc',
//               padding: 10,
//               marginBottom: 15,
//               borderRadius: 5,
//               textAlignVertical: 'top'
//             }}
//           />

//           <Text style={{ fontWeight: 'bold' }}>Editar Link:</Text>
//           <TextInput
//             value={link}
//             onChangeText={setLink}
//             placeholder="Digite o link (opcional)"
//             style={{
//               borderWidth: 1,
//               borderColor: '#ccc',
//               padding: 10,
//               marginBottom: 20,
//               borderRadius: 5
//             }}
//           />

//           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             <Button title="Salvar Alterações" onPress={atualizarSala} />
//             <Button title="Cancelar" color="gray" onPress={() => setModo('visualizar')} />
//           </View>
//         </>
//       )}

//       {modo === 'excluir' && (
//         <>
//           <Text style={{ marginBottom: 20, color: 'red', textAlign: 'center' }}>
//             Tem certeza que deseja excluir esta sala? Esta ação não pode ser desfeita.
//           </Text>
          
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             <Button title="Confirmar Exclusão" color="red" onPress={deletarSala} />
//             <Button title="Cancelar" color="gray" onPress={() => setModo('visualizar')} />
//           </View>
//         </>
//       )}
//     </View>
//   );
// }