import { router } from "expo-router";
import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Image, Pressable, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
// import { supabase } from "../../lib/supabase";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const moedaCartola = require("../assets/moedaCartola.png");
const Invest = require("../assets/Invest.png");
const Saldo = require("../assets/Saldo13.png");
const retangle = require("../assets/Rectangle72.png");
const money = require("../assets/iconmoney.png");
const Elipse15 = require("../assets/Ellipse15.png");
const Maap = require("../assets/map.png");

const Frame = () => {
    const [score, setScore] = useState(0);
    const [nome, setNome] = useState('');
    const [professor, setProfessor] = useState<boolean | null>(null);
    const [jornada, setJornada] = useState(0);
    const [loading, setLoading] = useState(true);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    // const fetchProfilePictureUrl = async (path: string) => {
    //     if (!path) return null;
    //     const { data } = supabase.storage.from('files').getPublicUrl(path);
    //     return data?.publicUrl || null;
    // };

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         const { data: { user }, error } = await supabase.auth.getUser();
    //         if (error || !user) {
    //             console.error('Erro ao obter usuário:', error);
    //             return;
    //         }

    //         const { data: userData, error: fetchError } = await supabase
    //             .from('users')
    //             .select('score, profile_pictures')
    //             .eq('id', user.id)
    //             .single();

    //         if (fetchError) {
    //             console.error('Erro ao buscar dados do usuário:', fetchError);
    //         } else {
    //             setScore(userData.score);
    //             setNome(user.user_metadata?.name || 'Usuário');

    //             if (userData.profile_pictures) {
    //                 const publicUrl = await fetchProfilePictureUrl(userData.profile_pictures);
    //                 setAvatarUrl(publicUrl);
    //             }
    //         }
    //     };

    //     Jornada();
    //     fetchUserData();
    // }, []);

    // const Jornada = () => {
    //     setJornada(1);
    // };

    const ProfileHeader = () => {
        const [currentTime, setCurrentTime] = useState('');
        const [currentDay, setCurrentDay] = useState('');

        useEffect(() => {
            const updateDateTime = () => {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                setCurrentTime(`${hours}.${minutes}`);

                const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
                setCurrentDay(days[now.getDay()]);
            };

            updateDateTime();
            const interval = setInterval(updateDateTime, 60000);
            return () => clearInterval(interval);
        }, []);

        return (
            <View style={styles.headerContainer}>
                <View style={styles.mainContent}>
                    <View style={styles.profileInfo}>
                        {avatarUrl ? (
                            <Image source={{ uri: avatarUrl }} style={styles.profileImage} />
                        ) : (
                            <View style={styles.profileImagePlaceholder}>
                                <Ionicons name="person" size={24} color="#fff" />
                            </View>
                        )}
                        <View>
                            <Text style={styles.title}>01. {nome}</Text>
                            <Text style={styles.subtitle}>Potencial Investidor: {score} pts</Text>
                        </View>
                    </View>

                    <View style={styles.progressContainer}>
                        <View style={styles.progressInfo}>
                            <Text style={styles.progressLabel}>Jornada</Text>
                            <Text style={styles.progressValue}>{jornada}%</Text>
                        </View>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: `${jornada}%` }]} />
                        </View>
                        <Text style={styles.progressText}>PERCORRIDA</Text>
                    </View>
                </View>


            </View>
        );
    };

    return (
       <View style={{ flex: 1}}>
  <ScrollView style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.profileRow}>
        <View style={styles.profileLeft}>
          <Ionicons name="person-circle-outline" size={30} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.title}>Olá, {nome || 'Erick'}</Text>
        </View>
        <Text style={styles.subtitle}>Potencial investidor</Text>
      </View>
    </View>

    <View style={styles.content}>
      <View style={styles.buttonsContainer}>
        {/* Jornada */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconCircleBlue}>
            <Text style={styles.iconText}>3 de 3</Text>
          </View>
          <View>
            <Text style={styles.cardTitle}>Jornada</Text>
            <Text style={styles.cardSubtitle}>Dica: não gaste atoa</Text>
          </View>
        </TouchableOpacity>

        {/* Entrar em uma sala */}
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconCircle, { backgroundColor: '#00FFBF' }]}>
            <Ionicons name="log-in-outline" size={24} color="#000" />
          </View>
          <Text style={styles.cardTitle}>Entrar em uma sala</Text>
        </TouchableOpacity>

        {/* Conceitos */}
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconCircle, { backgroundColor: '#00FF57' }]}>
            <Text style={{ fontSize: 24, color: '#000', fontWeight: 'bold' }}>$</Text>
          </View>
          <Text style={styles.cardTitle}>Conceitos</Text>
        </TouchableOpacity>

        {/* Investimentos */}
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconCircle, { backgroundColor: '#FFA500' }]}>
            <Ionicons name="stats-chart" size={24} color="#000" />
          </View>
          <Text style={styles.cardTitle}>Investimentos</Text>
        </TouchableOpacity>
      </View>
    </View>

    
  </ScrollView>
{/* Navegação inferior */}
    <View style={styles.bottomNav}>
      <TouchableOpacity>
        <Ionicons name="home-outline" size={24} color="#fff" />
        <Text style={styles.navText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="person-outline" size={24} color="#fff" />
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="help-circle-outline" size={24} color="#fff" />
        <Text style={styles.navText}>Dúvida?</Text>
      </TouchableOpacity>
    </View>
  </View>
);

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001e57',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    section:
     { marginTop: 30, 
      paddingHorizontal: 20 },

    headerContainer: {
        backgroundColor: '#00C20D', 
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },
    profileImagePlaceholder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#001e57',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },
    mainContent: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '600',
    },
    progressContainer: {
        marginTop: 15,
        backgroundColor: '#001e57',
        borderRadius: 10,
        padding: 12,
    },
    progressInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    progressLabel: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    progressValue: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    progressBar: {
        height: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 5,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#4caf50',
    },
    progressText: {
        fontSize: 10,
        color: '#dbd8d8',
        textAlign: 'right',
    },
    buttonsContainer: {
        marginTop: 30,
    },
    menuButton: {
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        alignItems: 'center',
    },
    menuButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#001e57',
    },
    card: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#002f7a',
  padding: 15,
  borderRadius: 15,
  marginBottom: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 6,
},

iconCircleBlue: {
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: '#0038ff',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 15,
},

iconText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 14,
},

cardTitle: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},

cardSubtitle: {
  color: '#cfd3d6',
  fontSize: 14,
},
bottomNav: {
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor: "#00C20D",
  paddingVertical: 10,
  position: "absolute",
  bottom: 0,
  width: "100%",
  // borderTopLeftRadius: 15,
  // borderTopRightRadius: 15,
  zIndex: 10,
 
},
  navText: { color: "#fff", textAlign: "center", fontSize: 12 },

  profileRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10,
},

profileLeft: {
  flexDirection: 'row',
  alignItems: 'center',
},

iconCircle: {
  width: 60,
  height: 60,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 15,
},


});

export default Frame;
