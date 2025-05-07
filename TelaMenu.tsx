import { router } from "expo-router";
import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Image, Pressable, Text, ScrollView, TouchableOpacity, ImageBackground, Button } from "react-native";
import { supabase } from "../../lib/supabase";

const moedaCartola = require("../../assets/moedaCartola.png");
const Invest = require("../../assets/Invest.png");
const Saldo = require("../../assets/Saldo13.png");
const retangle = require("../../assets/Rectangle72.png");
const money = require("../../assets/iconmoney.png");
const Elipse15 = require("../../assets/Ellipse15.png");
const Maap = require("../../assets/map.png");

const Frame = () => {
    const [score, setScore] = useState(0);
    const [nome, setNome] = useState('');
    const [professor, setProfessor] = useState<boolean | null>(null);
    const [jornada, setJornada] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const fetchUserData = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error || !data?.user) {
                console.error('Erro ao obter usuário:', error);
                return;
            }
    
            const { data: userData, error: fetchError } = await supabase
                .from('users')
                .select('score')
                .eq('id', data.user.id)
                .single();
    
            if (fetchError) {
                console.error('Erro ao buscar dados do usuário:', fetchError);
            } else {
                setScore(userData.score);
				
            }
        };
        Jornada();
        fetchUserData();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
          const { data: userData, error } = await supabase.auth.getUser();
          const user = userData?.user;
    
          if (error || !user) {
            console.error('Erro ao obter usuário:', error);
            return;
          }
    
          setNome(user.user_metadata?.name);
          setLoading(false);
        };
    
        fetchUserData();
      }, []);

      const Jornada=()=>{
        setJornada(1);
      }

   

    return (
        <ScrollView style={styles.telaDeMenuJuniorParent}> 
       
            <View style={styles.telaDeMenuJunior}>
                <View style={[styles.telaDeMenuJuniorChild, styles.telaChildLayout2]} />
                <View style={styles.telaLayout} />
                <View style={styles.telaPosition} />
                <View style={styles.rectangleViewPosition} />
                <View style={[styles.telaDeMenuJuniorChild1, styles.telaChildLayout2]} />
                <View style={styles.telaChildLayout1} />
                <View style={[styles.telaDeMenuJuniorChild3, styles.telaChildShadowBox2]} />
                <View style={[styles.telaDeMenuJuniorChild4, styles.telaChildShadowBox2]} />
                
            <ImageBackground source={Elipse15} style={[styles.telaDeMenuJuniorChild10, styles.telaChildLayout]}>
                <Image source={Maap} style={[styles.telaChildLayout11]}/>
            </ImageBackground>
          
                <Image source={retangle} style={[styles.rectangleIcon, styles.iconLayout]} width={98} height={27}>
                     </Image>
                     
                <Text style={styles.erick}>{nome}</Text>
                <Image source={money} style={[styles.iconAttachMoneyIcon, styles.iconLayout1]}/>
 <Image style={styles.saldo22}resizeMode="cover" source={Saldo}></Image>
                <Text style={styles.text1}>Cash: {score}</Text>
              
                <Text style={[styles.jornada, styles.missesTypo]}>Jornada</Text>
              
                <Text style={[styles.text2, styles.r000Typo]}>{}%</Text>
                <Text style={styles.percorrida}>PERCORRIDA</Text>
                
               
            </View>   
            
            <View style={styles.telaDeMenuJunior}>
                <View style={[styles.telaDeMenuJuniorChild12, styles.telaChildLayout2]} />
                <View style={styles.telaLayout} />
                <View style={styles.telaPosition} />
                <View style={styles.rectangleViewPosition} />
                <View style={styles.telaChildLayout1} />
               
               <TouchableOpacity style={[styles.button2]}
               onPress={()=> router.push('duvidas')}>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.button2]}
               onPress={()=> router.push('/Prof2/page1')}>
               </TouchableOpacity>

                <TouchableOpacity
                style={[styles.button2, styles.buttonPosition]}
                onPress={()=> router.push('NivelIC')}>
                   
                    <Image source={moedaCartola}/>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.button, styles.buttonLayout]}
                onPress={()=> router.push('NivelIC2')}>
                    <Image source={Invest}/>
                </TouchableOpacity>

                
                 <Text style={[styles.conceitos, styles.missesTypo]}>Gestão</Text>
                <Text style={[styles.investimentos, styles.missesTypo]}>Investimentos</Text>
              
            </View>
             
            
        </ScrollView>
        );
};

const styles = StyleSheet.create({
    telaChildLayout2: {
        transform: [
            {
                rotate: "-45.6deg"
            }
        ],
        height: 238,
        width: 394,
        borderRadius: 20,
        position: "absolute"
    },
    teste:{
        backgroundColor:"green",
        width:213,
        height:31231,

    },
    telaChildShadowBox2: {
        opacity: 0.75,
        height: 49,
        width: 332,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderStyle: "solid",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        borderRadius: 8,
        position: "absolute",
    },
    userLayout: {
        height: 24,
        width: 24,
        top: 810,
        position: "absolute"
    },
    iconLayout2: {
        height: "100%",
        width: "100%"
    },
    iconLayout1: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden"
    },
    lvlTypo: {
        fontFamily: "Poppins-Bold",
        fontWeight: "700",
        fontSize: 16,
        top: 14,
        textAlign: "center",
        lineHeight: 99,
        letterSpacing: 0,
        position: "absolute"
    },
    iconLayout: {
        borderRadius: 34,
        position: "absolute"
    },
    missesTypo: {
        textAlign: "left",
        fontWeight: "700",
        letterSpacing: 0,
        position: "absolute"
    },
    r000Typo: {
        fontSize: 13,
        textAlign: "left",
        lineHeight: 30,
        color: "#fff",
        fontFamily: "Poppins-Bold",
        fontWeight: "700",
        letterSpacing: 0,
        position: "absolute"
    },
    poupadoTypo: {
        fontFamily: "system-ui",
        height: 29,
        alignItems: "center",
        display: "flex",
        color: "#dbd8d8",
        fontSize: 10,
        textAlign: "left",
        lineHeight: 30,
        letterSpacing: 0,
        position: "absolute"
    },
    telaChildLayout: {
        height: 50,
        width: 50,
        position: "absolute",
        alignItems:"center",
    },
    telaChildLayout11: {
        top:10,
        height: 30,
        width: 30,
        position: "absolute"
    },
    buttonLayout: {
        justifyContent: "center",
        width: 268,
        borderRadius: 43,
        left: 64,
        top: 500,
        height: 340,
        alignItems: "center",
        borderStyle: "solid",
        position: "absolute",
        overflow: "hidden"
    },
    buttonShadowBox: {
        borderWidth: 3,
        borderColor: "#00c20d",
        backgroundColor: "rgba(245, 245, 245, 0.82)",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    buttonPosition: {
        top: 133,
        justifyContent: "center",
        width: 268,
        borderRadius: 43,
        alignItems: "center",
        borderStyle: "solid",
        position: "absolute",
        overflow: "hidden"
    },
    telaDeMenuJuniorChild: {
        backgroundColor: "rgba(16, 112, 180, 0.47)",
        left: -43,
        top: 83,
        transform: [
            {
                rotate: "-45.6deg"
            }
        ],
        height: 238,
        width: 394,
        borderRadius: 20
    },
    telaLayout: {
        height: 479,
        width: 591,
        left: -374,
        top: 699,
        backgroundColor: "rgba(16, 112, 180, 0.47)",
        borderRadius: 20,
        position: "absolute"
    },
    copySaldoIcon: {
        top: -228,
        left: -520,
        width: 2160,
        height: 1080,
        position: "absolute"
    },
    telaPosition: {
        backgroundColor: "rgba(0, 30, 87, 0.44)",
        top: 209,
        left: 42,
        transform: [
            {
                rotate: "-45.6deg"
            }
        ],
        height: 238,
        width: 394,
        borderRadius: 20,
        position: "absolute"
    },
    rectangleViewPosition: {
        left: 92,
        top: 245,
        backgroundColor: "rgba(0, 30, 87, 0.44)",
        transform: [
            {
                rotate: "-45.6deg"
            }
        ],
        height: 238,
        width: 394,
        borderRadius: 20,
        position: "absolute"
    },
    telaDeMenuJuniorChild1: {
        top: 450,
        left: 158,
        backgroundColor: "rgba(0, 30, 87, 0.48)",
        transform: [
            {
                rotate: "-45.6deg"
            }
        ],
        height: 238,
        width: 394,
        borderRadius: 20
    },
    telaChildLayout1: {
        height: 127,
        backgroundColor: "rgba(0, 30, 87, 0.78)",
        left: 79,
        top: 817,
        width: 394,
        borderRadius: 20,
        position: "absolute"
    },
    telaDeMenuJuniorChild3: {
        top: 37,
        left: 32
    },
    telaDeMenuJuniorChild4: {
        top: 411,
        left: 42,
        opacity: 0.75,
        height: 49,
        width: 332,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderStyle: "solid",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    telaDeMenuJuniorChild5: {
        top: 505,
        left: 42,
        opacity: 0.75,
        height: 49,
        width: 332,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderStyle: "solid",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    telaDeMenuJuniorChild6: {
        top: 590,
        left: 42,
        opacity: 0.75,
        height: 49,
        width: 332,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderStyle: "solid",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    telaDeMenuJuniorChild7: {
        left: 0,
        backgroundColor: "rgba(16, 112, 180, 0.95)",
        height: 72,
        top: 794,
        width: 394,
        position: "absolute"
    },
    telaChildShadowBox1: {
        width: 393,
        borderColor: "rgba(129, 199, 132, 0.5)",
        borderRadius: 2,
        left: -1,
        height: 72,
        top: 794,
        opacity: 0.75,
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute"
    },
    telaChildShadowBox: {
        height: 12,
        width: 401,
        backgroundColor: "#00c20d",
        borderRadius: 12,
        left: -4,
        top: 788,
        borderColor: "rgba(129, 199, 132, 0.5)",
        opacity: 0.75,
        borderWidth: 1,
        borderStyle: "solid",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute"
    },
    icon: {
        
        overflow: "hidden"
    },
    user: {
        left: 130
    },
    barChart: {
        left: 227
    },
    ellipseIcon: {
        top: 803,
        left: 26,
        position: "absolute"
    },
    ellipseIcon1: {
        flex: 1,
        width: "100%",
        height: 50
        },
    homeIcon: {
        left: 33,
        overflow: "hidden"
    },
    icon2: {
        height: "100%",
        width: "100%"
    },
    iconHelpOutline: {
        left: "82.44%",
        top: "95.07%",
        right: "8.4%",
        bottom: "0.7%",
        width: "9.16%",
        height: "4.23%",
        position: "absolute"
    },
    erick: {
        top: 15,
        left: 46,
        fontSize: 20,
        fontWeight: "800",
        fontFamily: "system-ui",
        color: "#f5f5f5",
        textAlign: "center",
        lineHeight: 99,
        letterSpacing: 0,
        position: "absolute"
    },
    erick1: {
        top: 15,
        left: 23,
        fontSize: 20,
        fontWeight: "800",
        fontFamily: "SofiaSans-ExtraBold",
        color: "#f5f5f5",
        textAlign: "center",
        lineHeight: 99,
        letterSpacing: 0,
        position: "absolute"
    },
    lvl: {
        color: "#00c20d",
        left: 130
    },
    text: {
        left: 170,
        color: "#ffc107"
    },
    rectangleIcon: {
        top: 40,
        left: 200
    },
    saldo22: {
        top: 36,
        left: 303,
        width: 63,
        height: 63,
        position: "absolute"
    },
    text1: {
        top: 13,
        left: 243,
        color: "#fff",
        fontFamily: "system-ui",
        fontWeight: "700",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 99,
        letterSpacing: 0,
        position: "absolute"
    },
    receitaIcon: {
        top: 174,
        width: 324,
        height: 179,
        left: 33
    },
    jornada: {
        top: 418,
        lineHeight: 30,
        fontSize: 24,
        textAlign: "left",
        color: "#fff",
        fontFamily: "system-ui",
        left: 90
    },
    cofrinhos: {
        top: 516,
        lineHeight: 30,
        fontSize: 24,
        textAlign: "left",
        color: "#fff",
        fontFamily: "system-ui",
        left: 90
    },
    misses: {
        top: 600,
        left: 95,
        lineHeight: 30,
        fontSize: 24,
        textAlign: "left",
        color: "#fff",
        fontFamily: "system-ui"
    },
    text2: {
        top: 417,
        left: 300
    },
    r150000: {
        top: 510,
        left: 279
    },
    r000: {
        top: 593,
        left: 289
    },
    percorrida: {
        top: 433,
        left: 282,
        fontWeight: "600",
        fontFamily: "system-ui",
        height: 29,
        alignItems: "center",
        display: "flex",
        color: "#dbd8d8",
        fontSize: 10,
        width: 66,
        textAlign: "left",
        lineHeight: 30,
        letterSpacing: 0,
        position: "absolute"
    },
    poupado: {
        top: 525,
        left: 292,
        width: 66,
        fontFamily: "system-ui"
    },
    conquistado: {
        top: 608,
        left: 277,
        width: 92,
    },
    groupIcon: {
        top: 589,
        left: 16
    },
    telaDeMenuJuniorChild10: {
        left: 17,
        top: 411
    },
    iconAttachMoneyIcon: {
        height: "2.49%",
        width: "5.39%",
        top: "6.08%",
        right: "40.64%",
        bottom: "91.43%",
        left: "54%",
        position: "absolute"
    },
    telaDeMenuJuniorChild11: {
        top: 504,
        left: 16
    },
    telaDeMenuJunior: {
        alignSelf: "stretch",
        backgroundColor: "#001e57",
        height: 852,
        overflow: "hidden"
    },
    telaDeMenuJuniorChild12: {
        backgroundColor: "rgba(16, 112, 180, 0.47)",
        left: -43,
        top: 83,
        transform: [
            {
                rotate: "-45.6deg"
            }
        ],
        height: 238,
        width: 394,
        borderRadius: 20
    },
    button: {
        borderWidth: 1.3,
        borderColor: "#2c2c2c",
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        width: 268,
        borderRadius: 43,
        left: 64,
        top: 544
    },
    button1: {
        shadowColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        width: 268,
        borderRadius: 43,
        left: 64,
        top: 544,
        height: 340,
        alignItems: "center",
        borderStyle: "solid",
        position: "absolute",
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#00c20d",
        backgroundColor: "rgba(245, 245, 245, 0.82)"
    },
    icon3: {
        borderRadius: 18,
        
    },
    saldo64: {
        left: 86,
        top: 562,
        width: 223,
        height: 260,
        position: "absolute"
    },
    button2: {
        left: 57,
        height: 340,
        top: 133,
        borderWidth: 1.3,
        borderColor: "#2c2c2c",
        backgroundColor: "#f5f5f5"
    },
    button3: {
        left: 58,
        shadowColor: "rgba(0, 0, 0, 0.75)",
        height: 357,
        borderWidth: 3,
        borderColor: "#00c20d",
        backgroundColor: "rgba(245, 245, 245, 0.82)",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    conceitos: {
        marginTop:-17,
        flexShrink:1,
        top: 450,
        left: 140,
        fontSize: 32,
        fontFamily: "system-ui",
        color: "#001e57",
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: {
            width: 0,
            height: 4
        },
        textShadowRadius: 4,
       
    },

    investimentos: {
        flexShrink:1,
        marginTop:-17,
        top: 810,
        left: 99,
        fontSize: 32,
        fontFamily: "system-ui",
        color: "#001e57",
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: {
            width: 0,
            height: 4,
    },
},
    designSemNome1: {
        top: 152,
        width: 209,
        height: 274,
        borderRadius: 8,
        left: 92,
        position: "absolute"
    },
    telaDeMenuJuniorParent: {
        flex: 1,
        width: "100%"
    }
});

export default Frame;
























// import { router } from "expo-router";
// import * as React from "react";
// import { useState, useEffect } from "react";
// import { StyleSheet, View, Image, Pressable, Text, ScrollView, TouchableOpacity } from "react-native";
// import { supabase } from "../../lib/supabase";


// const User = require("../../assets/user.png");
// const Grafico = require("../../assets/user.png");
// const Ajuda = require("../../assets/user.png");
// const moedaCartola = require("../../assets/moedaCartola.png");
// const Invest = require("../../assets/Invest.png");
// const Saldo = require("../../assets/Saldo3.png");

// /*Saldo2 = SaldoLogo*/ 

// const Frame = () => {
//     const [score, setScore] = useState(0);
//     const [nome, setNome] = useState('');
//     const [level, setLevel] = useState(0);
//     const [modulo, setModulo] = useState(0);
//     const [cashIn, setCashIn] = useState(0);
//     const [missoes, setMissoes] = useState('');
//     const [vMissoes, setVMissoes] = useState(0);
// 	const [cash, setCash] = useState(0);
//   const [cofrinho, setCofrinho] = useState(0);
//   const [deposito, setDeposito] = useState('');
//   const [progresso, setProgresso] = useState({ gerais: 0, consorcio: 0, afins: 0 });
//   const [missao, setMissao] = useState<Missao | null>(null);
//     useEffect(() => {
//         const fetchUserData = async () => {
//             const { data, error } = await supabase.auth.getUser();
//             if (error || !data?.user) {
//                 console.error('Erro ao obter usuário:', error);
//                 return;
//             }
    
//             const { data: userData, error: fetchError } = await supabase
//                 .from('users')
//                 .select('name, score')
//                 .eq('id', data.user.id)
//                 .single();
    
//             if (fetchError) {
//                 console.error('Erro ao buscar dados do usuário:', fetchError);
//             } else {
//                 setNome(userData.name);
//                 setScore(userData.score);
//             }
//         };
    
//         fetchUserData();
//     }, []);

// 	  useEffect(() => {
//     buscarDadosUsuario();
//     const intervalo = setInterval(aplicarRendimento, 600000);
//     return () => clearInterval(intervalo);
//   }, []);

//   const buscarDadosUsuario = async () => {
//     const { data: userData, error } = await supabase
//       .from('users')
//       .select('cash, cofrinho, progresso, missao, name, score')
//       .eq('id', data.user.id)
//       .single();

//     if (error) {
//       console.error("Erro ao buscar dados:", error);
//       return;
//     }

//     if (data) {
//       setCash(data.cash);
//       setCofrinho(data.cofrinho);
//       setProgresso(data.progresso);
//       setNome(data.name);
//       setScore(data.score);

//       if (data.missao && typeof data.missao === "object") {
//         setMissao({
//           descricao: data.missao.descricao || "Missão desconhecida",
//           recompensa: data.missao.recompensa || 0,
//           concluida: data.missao.concluida ?? false
//         });
//       } else {
//         setMissao(null);
//       }
//     }
//   };

//   type Missao = {
//     descricao: string;
//     recompensa: number;
//     concluida: boolean;
//   };

//   const concluirMissao = useCallback(async () => {
//     if (missao && missao.concluida) {
//       const novoCash = cash + missao.recompensa;
//       setCash(novoCash);
//       setMissao(null);
//       await supabase.from('users').update({ cash: novoCash, missao: null }).eq('id', userId);
//     }
//   }, [missao, cash, userId]);

//   const depositarNoCofrinho = async () => {
//     const valor = parseFloat(deposito);
//     if (valor > 0 && valor <= cash) {
//       const novoCofrinho = cofrinho + valor;
//       const novoCash = cash - valor;
//       setCofrinho(novoCofrinho);
//       setCash(novoCash);
//       await supabase.from('users').update({ cash: novoCash, cofrinho: novoCofrinho }).eq('id', userId);
//     }
//   };

//   const aplicarRendimento = async () => {
//     const taxa = 0.01;
//     const rendimento = cofrinho * taxa;
//     const novoCofrinho = cofrinho + rendimento;
//     setCofrinho(novoCofrinho);
//     await supabase.from('users').update({ cofrinho: novoCofrinho }).eq('id', userId);
//   };
    


//     return (
//         <ScrollView style={styles.telaDeMenuJuniorParent}>
//             <View style={styles.telaDeMenuJunior}>
//                 <View style={[styles.telaDeMenuJuniorChild, styles.telaChildLayout2]} />
//                 <View style={styles.telaLayout} />
//                 <Image style={styles.copySaldoIcon} resizeMode="cover" source={Saldo} />
//                 <View style={styles.telaPosition} />
//                 <View style={styles.rectangleViewPosition} />
//                 <View style={[styles.telaDeMenuJuniorChild1, styles.telaChildLayout2]} />
//                 <View style={styles.telaChildLayout1} />
//                 <View style={[styles.telaDeMenuJuniorChild3, styles.telaChildShadowBox2]} />
//                 <View style={[styles.telaDeMenuJuniorChild4, styles.telaChildShadowBox2]} />
//                 <View style={[styles.telaDeMenuJuniorChild5, styles.telaChildShadowBox2]} />
//                 <View style={[styles.telaDeMenuJuniorChild6, styles.telaChildShadowBox2]} />
            
//                 <Text style={styles.erick}>{nome}</Text>

//                 <Text style={styles.text1}>Cash: {score}</Text>
//                 {/* <Image style={[styles.receitaIcon, styles.iconLayout]} resizeMode="cover" source="receita.png" /> */}
//                 <Text style={[styles.jornada, styles.missesTypo]}>Jornada</Text>
//                 <Text style={[styles.cofrinhos, styles.missesTypo]}>Cofrinhos</Text>
//                 <Text style={[styles.misses, styles.missesTypo]}>Missões</Text>
//                 <Text style={[styles.text2, styles.r000Typo]}>100%</Text>
//                 <Text style={[styles.r150000, styles.r000Typo]}>R$ 1500,00</Text>
//                 <Text style={[styles.r000, styles.r000Typo]}>R$ 0,00</Text>
//                 <Text style={styles.percorrida}>PERCORRIDA</Text>
//                 <Text style={[styles.poupado, styles.poupadoTypo]}>POUPADO</Text>
//                 <Text style={[styles.conquistado, styles.poupadoTypo]}>CONQUISTADO</Text>
//                 {/* <Group4 style={[styles.groupIcon, styles.telaChildLayout]} width={50} height={50} />
//                 <Group2 style={[styles.telaDeMenuJuniorChild10, styles.telaChildLayout]} width={50} height={50} />
//                 <Iconattachmoneyicon style={[styles.iconAttachMoneyIcon, styles.iconLayout1]} />
//                 <Group3 style={[styles.telaDeMenuJuniorChild11, styles.telaChildLayout]} width={50} height={50} /> */}
//             </View>
//             <View style={styles.telaDeMenuJunior}>
//                 <View style={[styles.telaDeMenuJuniorChild12, styles.telaChildLayout2]} />
//                 <View style={styles.telaLayout} />
//                 <View style={styles.telaPosition} />
//                 <View style={styles.rectangleViewPosition} />
//                 <View style={styles.telaChildLayout1} />
                
            

//                 <TouchableOpacity
//                 style={[styles.button2, styles.buttonPosition]}
//                 onPress={()=> router.push('NivelIC')}>
//                     <Image source={moedaCartola}/>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                 style={[styles.button, styles.buttonLayout]}
//                 onPress={()=> router.push('NivelIC2')}>
//                     <Image source={Invest}/>
//                 </TouchableOpacity>

                
//                 <Text style={[styles.conceitos, styles.missesTypo]}>Conceitos</Text>
//                 <Text style={[styles.investimentos, styles.missesTypo]}>Investimentos</Text>
              
//             </View>
//         </ScrollView>
//         );
// };

// const styles = StyleSheet.create({
//     telaChildLayout2: {
//         transform: [
//             {
//                 rotate: "-45.6deg"
//             }
//         ],
//         height: 238,
//         width: 394,
//         borderRadius: 20,
//         position: "absolute"
//     },
//     telaChildShadowBox2: {
//         opacity: 0.75,
//         height: 49,
//         width: 332,
//         borderWidth: 1,
//         borderColor: "rgba(0, 0, 0, 0.5)",
//         borderStyle: "solid",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         shadowOpacity: 1,
//         elevation: 4,
//         shadowRadius: 4,
//         shadowOffset: {
//             width: 0,
//             height: 4
//         },
//         shadowColor: "rgba(0, 0, 0, 0.25)",
//         borderRadius: 8,
//         position: "absolute",
//     },
//     userLayout: {
//         height: 24,
//         width: 24,
//         top: 810,
//         position: "absolute"
//     },
//     iconLayout2: {
//         height: "100%",
//         width: "100%"
//     },
//     iconLayout1: {
//         maxHeight: "100%",
//         maxWidth: "100%",
//         overflow: "hidden"
//     },
//     lvlTypo: {
//         fontFamily: "Poppins-Bold",
//         fontWeight: "700",
//         fontSize: 16,
//         top: 14,
//         textAlign: "center",
//         lineHeight: 99,
//         letterSpacing: 0,
//         position: "absolute"
//     },
//     iconLayout: {
//         borderRadius: 34,
//         position: "absolute"
//     },
//     missesTypo: {
//         textAlign: "left",
//         fontWeight: "700",
//         letterSpacing: 0,
//         position: "absolute"
//     },
//     r000Typo: {
//         fontSize: 13,
//         textAlign: "left",
//         lineHeight: 30,
//         color: "#fff",
//         fontFamily: "Poppins-Bold",
//         fontWeight: "700",
//         letterSpacing: 0,
//         position: "absolute"
//     },
//     poupadoTypo: {
//         fontFamily: "Poppins-Regular",
//         height: 29,
//         alignItems: "center",
//         display: "flex",
//         color: "#dbd8d8",
//         fontSize: 10,
//         textAlign: "left",
//         lineHeight: 30,
//         letterSpacing: 0,
//         position: "absolute"
//     },
//     telaChildLayout: {
//         height: 50,
//         width: 50,
//         position: "absolute"
//     },
//     buttonLayout: {
//         justifyContent: "center",
//         width: 268,
//         borderRadius: 43,
//         left: 64,
//         top: 500,
//         height: 340,
//         alignItems: "center",
//         borderStyle: "solid",
//         position: "absolute",
//         overflow: "hidden"
//     },
//     buttonShadowBox: {
//         borderWidth: 3,
//         borderColor: "#00c20d",
//         backgroundColor: "rgba(245, 245, 245, 0.82)",
//         shadowOpacity: 1,
//         elevation: 4,
//         shadowRadius: 4,
//         shadowOffset: {
//             width: 0,
//             height: 4
//         }
//     },
//     buttonPosition: {
//         top: 133,
//         justifyContent: "center",
//         width: 268,
//         borderRadius: 43,
//         alignItems: "center",
//         borderStyle: "solid",
//         position: "absolute",
//         overflow: "hidden"
//     },
//     telaDeMenuJuniorChild: {
//         backgroundColor: "rgba(16, 112, 180, 0.47)",
//         left: -43,
//         top: 83,
//         transform: [
//             {
//                 rotate: "-45.6deg"
//             }
//         ],
//         height: 238,
//         width: 394,
//         borderRadius: 20
//     },
//     telaLayout: {
//         height: 479,
//         width: 591,
//         left: -374,
//         top: 699,
//         backgroundColor: "rgba(16, 112, 180, 0.47)",
//         borderRadius: 20,
//         position: "absolute"
//     },
//     copySaldoIcon: {
//         top: -228,
//         left: -520,
//         width: 2160,
//         height: 1080,
//         position: "absolute"
//     },
//     telaPosition: {
//         backgroundColor: "rgba(0, 30, 87, 0.44)",
//         top: 209,
//         left: 42,
//         transform: [
//             {
//                 rotate: "-45.6deg"
//             }
//         ],
//         height: 238,
//         width: 394,
//         borderRadius: 20,
//         position: "absolute"
//     },
//     rectangleViewPosition: {
//         left: 92,
//         top: 245,
//         backgroundColor: "rgba(0, 30, 87, 0.44)",
//         transform: [
//             {
//                 rotate: "-45.6deg"
//             }
//         ],
//         height: 238,
//         width: 394,
//         borderRadius: 20,
//         position: "absolute"
//     },
//     telaDeMenuJuniorChild1: {
//         top: 450,
//         left: 158,
//         backgroundColor: "rgba(0, 30, 87, 0.48)",
//         transform: [
//             {
//                 rotate: "-45.6deg"
//             }
//         ],
//         height: 238,
//         width: 394,
//         borderRadius: 20
//     },
//     telaChildLayout1: {
//         height: 127,
//         backgroundColor: "rgba(0, 30, 87, 0.78)",
//         left: 79,
//         top: 817,
//         width: 394,
//         borderRadius: 20,
//         position: "absolute"
//     },
//     telaDeMenuJuniorChild3: {
//         top: 37,
//         left: 32
//     },
//     telaDeMenuJuniorChild4: {
//         top: 411,
//         left: 42,
//         opacity: 0.75,
//         height: 49,
//         width: 332,
//         borderWidth: 1,
//         borderColor: "rgba(0, 0, 0, 0.5)",
//         borderStyle: "solid",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         shadowOpacity: 1,
//         elevation: 4,
//         shadowRadius: 4,
//         shadowOffset: {
//             width: 0,
//             height: 4
//         },
//         shadowColor: "rgba(0, 0, 0, 0.25)"
//     },
//     telaDeMenuJuniorChild5: {
//         top: 505,
//         left: 42,
//         opacity: 0.75,
//         height: 49,
//         width: 332,
//         borderWidth: 1,
//         borderColor: "rgba(0, 0, 0, 0.5)",
//         borderStyle: "solid",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         shadowOpacity: 1,
//         elevation: 4,
//         shadowRadius: 4,
//         shadowOffset: {
//             width: 0,
//             height: 4
//         },
//         shadowColor: "rgba(0, 0, 0, 0.25)"
//     },
//     telaDeMenuJuniorChild6: {
//         top: 590,
//         left: 42,
//         opacity: 0.75,
//         height: 49,
//         width: 332,
//         borderWidth: 1,
//         borderColor: "rgba(0, 0, 0, 0.5)",
//         borderStyle: "solid",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         shadowOpacity: 1,
//         elevation: 4,
//         shadowRadius: 4,
//         shadowOffset: {
//             width: 0,
//             height: 4
//         },
//         shadowColor: "rgba(0, 0, 0, 0.25)"
//     },
//     telaDeMenuJuniorChild7: {
//         left: 0,
//         backgroundColor: "rgba(16, 112, 180, 0.95)",
//         height: 72,
//         top: 794,
//         width: 394,
//         position: "absolute"
//     },
//     telaChildShadowBox1: {
//         width: 393,
//         borderColor: "rgba(129, 199, 132, 0.5)",
//         borderRadius: 2,
//         left: -1,
//         height: 72,
//         top: 794,
//         opacity: 0.75,
//         borderWidth: 1,
//         borderStyle: "solid",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         shadowOpacity: 1,
//         elevation: 4,
//         shadowRadius: 4,
//         shadowOffset: {
//             width: 0,
//             height: 4
//         },
//         shadowColor: "rgba(0, 0, 0, 0.25)",
//         position: "absolute"
//     },
//     telaChildShadowBox: {
//         height: 12,
//         width: 401,
//         backgroundColor: "#00c20d",
//         borderRadius: 12,
//         left: -4,
//         top: 788,
//         borderColor: "rgba(129, 199, 132, 0.5)",
//         opacity: 0.75,
//         borderWidth: 1,
//         borderStyle: "solid",
//         shadowOpacity: 1,
//         elevation: 4,
//         shadowRadius: 4,
//         shadowOffset: {
//             width: 0,
//             height: 4
//         },
//         shadowColor: "rgba(0, 0, 0, 0.25)",
//         position: "absolute"
//     },
//     icon: {
        
//         overflow: "hidden"
//     },
//     user: {
//         left: 130
//     },
//     barChart: {
//         left: 227
//     },
//     ellipseIcon: {
//         top: 803,
//         left: 26,
//         position: "absolute"
//     },
//     homeIcon: {
//         left: 33,
//         overflow: "hidden"
//     },
//     icon2: {
//         height: "100%",
//         width: "100%"
//     },
//     iconHelpOutline: {
//         left: "82.44%",
//         top: "95.07%",
//         right: "8.4%",
//         bottom: "0.7%",
//         width: "9.16%",
//         height: "4.23%",
//         position: "absolute"
//     },
//     erick: {
//         top: 15,
//         left: 46,
//         fontSize: 20,
//         fontWeight: "800",
//         fontFamily: "SofiaSans-ExtraBold",
//         color: "#f5f5f5",
//         textAlign: "center",
//         lineHeight: 99,
//         letterSpacing: 0,
//         position: "absolute"
//     },
//     erick1: {
//         top: 15,
//         left: 23,
//         fontSize: 20,
//         fontWeight: "800",
//         fontFamily: "SofiaSans-ExtraBold",
//         color: "#f5f5f5",
//         textAlign: "center",
//         lineHeight: 99,
//         letterSpacing: 0,
//         position: "absolute"
//     },
//     lvl: {
//         color: "#00c20d",
//         left: 130
//     },
//     text: {
//         left: 170,
//         color: "#ffc107"
//     },
//     rectangleIcon: {
//         top: 49,
//         left: 200
//     },
//     saldo22: {
//         top: 36,
//         left: 303,
//         width: 63,
//         height: 63,
//         position: "absolute"
//     },
//     text1: {
//         top: 13,
//         left: 243,
//         color: "#fff",
//         fontFamily: "Poppins-Bold",
//         fontWeight: "700",
//         fontSize: 16,
//         textAlign: "center",
//         lineHeight: 99,
//         letterSpacing: 0,
//         position: "absolute"
//     },
//     receitaIcon: {
//         top: 174,
//         width: 324,
//         height: 179,
//         left: 33
//     },
//     jornada: {
//         top: 418,
//         lineHeight: 30,
//         fontSize: 24,
//         textAlign: "left",
//         color: "#fff",
//         fontFamily: "Poppins-Bold",
//         left: 90
//     },
//     cofrinhos: {
//         top: 516,
//         lineHeight: 30,
//         fontSize: 24,
//         textAlign: "left",
//         color: "#fff",
//         fontFamily: "Poppins-Bold",
//         left: 90
//     },
//     misses: {
//         top: 600,
//         left: 95,
//         lineHeight: 30,
//         fontSize: 24,
//         textAlign: "left",
//         color: "#fff",
//         fontFamily: "Poppins-Bold"
//     },
//     text2: {
//         top: 417,
//         left: 300
//     },
//     r150000: {
//         top: 510,
//         left: 279
//     },
//     r000: {
//         top: 593,
//         left: 289
//     },
//     percorrida: {
//         top: 433,
//         left: 282,
//         fontWeight: "600",
//         fontFamily: "Poppins-SemiBold",
//         height: 29,
//         alignItems: "center",
//         display: "flex",
//         color: "#dbd8d8",
//         fontSize: 10,
//         width: 66,
//         textAlign: "left",
//         lineHeight: 30,
//         letterSpacing: 0,
//         position: "absolute"
//     },
//     poupado: {
//         top: 525,
//         left: 292,
//         width: 66,
//         fontFamily: "Poppins-Regular"
//     },
//     conquistado: {
//         top: 608,
//         left: 277,
//         width: 92
//     },
//     groupIcon: {
//         top: 589,
//         left: 16
//     },
//     telaDeMenuJuniorChild10: {
//         left: 17,
//         top: 411
//     },
//     iconAttachMoneyIcon: {
//         height: "2.49%",
//         width: "5.39%",
//         top: "6.08%",
//         right: "40.64%",
//         bottom: "91.43%",
//         left: "53.97%",
//         position: "absolute"
//     },
//     telaDeMenuJuniorChild11: {
//         top: 504,
//         left: 16
//     },
//     telaDeMenuJunior: {
//         alignSelf: "stretch",
//         borderRadius: 6,
//         backgroundColor: "#001e57",
//         height: 852,
//         overflow: "hidden"
//     },
//     telaDeMenuJuniorChild12: {
//         backgroundColor: "rgba(16, 112, 180, 0.47)",
//         left: -43,
//         top: 83,
//         transform: [
//             {
//                 rotate: "-45.6deg"
//             }
//         ],
//         height: 238,
//         width: 394,
//         borderRadius: 20
//     },
//     button: {
//         borderWidth: 1.3,
//         borderColor: "#2c2c2c",
//         backgroundColor: "#f5f5f5",
//         justifyContent: "center",
//         width: 268,
//         borderRadius: 43,
//         left: 64,
//         top: 544
//     },
//     button1: {
//         shadowColor: "rgba(0, 0, 0, 0.5)",
//         justifyContent: "center",
//         width: 268,
//         borderRadius: 43,
//         left: 64,
//         top: 544,
//         height: 340,
//         alignItems: "center",
//         borderStyle: "solid",
//         position: "absolute",
//         overflow: "hidden",
//         borderWidth: 3,
//         borderColor: "#00c20d",
//         backgroundColor: "rgba(245, 245, 245, 0.82)"
//     },
//     icon3: {
//         borderRadius: 18,
        
//     },
//     saldo64: {
//         left: 86,
//         top: 562,
//         width: 223,
//         height: 260,
//         position: "absolute"
//     },
//     button2: {
//         left: 57,
//         height: 340,
//         top: 133,
//         borderWidth: 1.3,
//         borderColor: "#2c2c2c",
//         backgroundColor: "#f5f5f5"
//     },
//     button3: {
//         left: 58,
//         shadowColor: "rgba(0, 0, 0, 0.75)",
//         height: 357,
//         borderWidth: 3,
//         borderColor: "#00c20d",
//         backgroundColor: "rgba(245, 245, 245, 0.82)",
//         shadowOpacity: 1,
//         elevation: 4,
//         shadowRadius: 4,
//         shadowOffset: {
//             width: 0,
//             height: 4
//         }
//     },
//     conceitos: {
//         top: 450,
//         left: 108,
//         fontSize: 32,
//         lineHeight: 20,
//         fontFamily: "Sitara",
//         color: "#001e57",
//         textShadowColor: "rgba(0, 0, 0, 0.25)",
//         textShadowOffset: {
//             width: 0,
//             height: 4
//         },
//         textShadowRadius: 4
//     },

//     investimentos: {
//         top: 810,
//         left: 99,
//         fontSize: 32,
//         lineHeight: 20,
//         fontFamily: "Sitara",
//         color: "#001e57",
//         textShadowColor: "rgba(0, 0, 0, 0.25)",
//         textShadowOffset: {
//             width: 0,
//             height: 4,
//     },
// },
//     designSemNome1: {
//         top: 152,
//         width: 209,
//         height: 274,
//         borderRadius: 8,
//         left: 92,
//         position: "absolute"
//     },
//     telaDeMenuJuniorParent: {
//         flex: 1,
//         width: "100%"
//     }
// });

// export default Frame;











// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, Button, TextInput, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
// import ProgressBarAndroid from '@react-native-community/progress-bar-android';
// import { supabase } from '../../lib/supabase';
// import { router } from "expo-router";

// const moedaCartola = require("../../assets/moedaCartola.png");
// const Invest = require("../../assets/Invest.png");
// const Saldo = require("../../assets/Saldo3.png");

// export function Menu({ userId }: { userId: string }) {
//   const [cash, setCash] = useState(0);
//   const [cofrinho, setCofrinho] = useState(0);
//   const [deposito, setDeposito] = useState('');
//   const [progresso, setProgresso] = useState({ gerais: 0, consorcio: 0, afins: 0 });
//   const [missao, setMissao] = useState<Missao | null>(null);
//   const [nome, setNome] = useState('');
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     buscarDadosUsuario();
//     const intervalo = setInterval(aplicarRendimento, 600000);
//     return () => clearInterval(intervalo);
//   }, []);

//   const buscarDadosUsuario = async () => {
//     const { data, error } = await supabase
//       .from('users')
//       .select('cash, cofrinho, progresso, missao, name, score')
//       .eq('id', userId)
//       .single();

//     if (error) {
//       console.error("Erro ao buscar dados:", error);
//       return;
//     }

//     if (data) {
//       setCash(data.cash);
//       setCofrinho(data.cofrinho);
//       setProgresso(data.progresso);
//       setNome(data.name);
//       setScore(data.score);

//       if (data.missao && typeof data.missao === "object") {
//         setMissao({
//           descricao: data.missao.descricao || "Missão desconhecida",
//           recompensa: data.missao.recompensa || 0,
//           concluida: data.missao.concluida ?? false
//         });
//       } else {
//         setMissao(null);
//       }
//     }
//   };

//   type Missao = {
//     descricao: string;
//     recompensa: number;
//     concluida: boolean;
//   };

//   const concluirMissao = useCallback(async () => {
//     if (missao && missao.concluida) {
//       const novoCash = cash + missao.recompensa;
//       setCash(novoCash);
//       setMissao(null);
//       await supabase.from('users').update({ cash: novoCash, missao: null }).eq('id', userId);
//     }
//   }, [missao, cash, userId]);

//   const depositarNoCofrinho = async () => {
//     const valor = parseFloat(deposito);
//     if (valor > 0 && valor <= cash) {
//       const novoCofrinho = cofrinho + valor;
//       const novoCash = cash - valor;
//       setCofrinho(novoCofrinho);
//       setCash(novoCash);
//       await supabase.from('users').update({ cash: novoCash, cofrinho: novoCofrinho }).eq('id', userId);
//     }
//   };

//   const aplicarRendimento = async () => {
//     const taxa = 0.01;
//     const rendimento = cofrinho * taxa;
//     const novoCofrinho = cofrinho + rendimento;
//     setCofrinho(novoCofrinho);
//     await supabase.from('users').update({ cofrinho: novoCofrinho }).eq('id', userId);
//   };

//   return (
//     <ScrollView style={styles.telaDeMenuJuniorParent}>
//       <View style={styles.telaDeMenuJunior}>
//         <View style={[styles.telaDeMenuJuniorChild, styles.telaChildLayout2]} />
//         <View style={styles.telaLayout} />
//         <Image style={styles.copySaldoIcon} resizeMode="cover" source={Saldo} />
//         <View style={styles.telaPosition} />
//         <View style={styles.rectangleViewPosition} />
//         <View style={[styles.telaDeMenuJuniorChild1, styles.telaChildLayout2]} />
//         <View style={styles.telaChildLayout1} />
//         <View style={[styles.telaDeMenuJuniorChild3, styles.telaChildShadowBox2]} />
//         <View style={[styles.telaDeMenuJuniorChild4, styles.telaChildShadowBox2]} />
//         <View style={[styles.telaDeMenuJuniorChild5, styles.telaChildShadowBox2]} />
//         <View style={[styles.telaDeMenuJuniorChild6, styles.telaChildShadowBox2]} />

//         <Text style={styles.erick}>{nome}</Text>
//         <Text style={styles.text1}>Cash: {cash}</Text>
//         <Text style={[styles.jornada, styles.missesTypo]}>Jornada</Text>
//         <Text style={[styles.cofrinhos, styles.missesTypo]}>Cofrinhos</Text>
//         <Text style={[styles.misses, styles.missesTypo]}>Missões</Text>
//         <Text style={[styles.text2, styles.r000Typo]}>100%</Text>
//         <Text style={[styles.r150000, styles.r000Typo]}>{cofrinho}</Text>
//         <Text style={[styles.r000, styles.r000Typo]}>R$ 0,00</Text>
//         <Text style={styles.percorrida}>PERCORRIDA</Text>
//         <Text style={[styles.poupado, styles.poupadoTypo]}>POUPADO</Text>
//         <Text style={[styles.conquistado, styles.poupadoTypo]}>CONQUISTADO</Text>

//         <TextInput
//           style={styles.input}
//           placeholder='Guardar no Cofrinho'
//           keyboardType='numeric'
//           value={deposito}
//           onChangeText={setDeposito}
//         />
//         <Button title='Depositar' onPress={depositarNoCofrinho} />

//         <Text>Jornada:</Text>
//         <Text>Conceitos Gerais</Text>
//         {/* <ProgressBarAndroid styleAttr='Horizontal' progress={progresso.gerais} /> */}
//         <Text>Consórcio</Text>
//         {/* <ProgressBarAndroid styleAttr='Horizontal' progress={progresso.consorcio} /> */}
//         <Text>Afins</Text>
//         {/* <ProgressBarAndroid styleAttr='Horizontal' progress={0.5} indeterminate={false} /> */}

//         {missao && (
//           <View>
//             <Text>Missão: {missao.descricao}</Text>
//             <Text>Recompensa: {missao.recompensa}</Text>
//             <Button title='Coletar Recompensa' onPress={concluirMissao} />
//           </View>
//         )}

//         <TouchableOpacity
//           style={[styles.button2, styles.buttonPosition]}
//           onPress={() => router.push('NivelIC')}>
//           <Image source={moedaCartola} />
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.button, styles.buttonLayout]}
//           onPress={() => router.push('NivelIC2')}>
//           <Image source={Invest} />
//         </TouchableOpacity>

//         <Text style={[styles.conceitos, styles.missesTypo]}>Conceitos</Text>
//         <Text style={[styles.investimentos, styles.missesTypo]}>Investimentos</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   telaChildLayout2: {
//     transform: [
//       {
//         rotate: "-45.6deg"
//       }
//     ],
//     height: 238,
//     width: 394,
//     borderRadius: 20,
//     position: "absolute"
//   },
//   telaChildShadowBox2: {
//     opacity: 0.75,
//     height: 49,
//     width: 332,
//     borderWidth: 1,
//     borderColor: "rgba(0, 0, 0, 0.5)",
//     borderStyle: "solid",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     borderRadius: 8,
//     position: "absolute",
//   },
//   userLayout: {
//     height: 24,
//     width: 24,
//     top: 810,
//     position: "absolute"
//   },
//   iconLayout2: {
//     height: "100%",
//     width: "100%"
//   },
//   iconLayout1: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden"
//   },
//   lvlTypo: {
//     fontFamily: "Poppins-Bold",
//     fontWeight: "700",
//     fontSize: 16,
//     top: 14,
//     textAlign: "center",
//     lineHeight: 99,
//     letterSpacing: 0,
//     position: "absolute"
//   },
//   iconLayout: {
//     borderRadius: 34,
//     position: "absolute"
//   },
//   missesTypo: {
//     textAlign: "left",
//     fontWeight: "700",
//     letterSpacing: 0,
//     position: "absolute"
//   },
//   r000Typo: {
//     fontSize: 13,
//     textAlign: "left",
//     lineHeight: 30,
//     color: "#fff",
//     fontFamily: "Poppins-Bold",
//     fontWeight: "700",
//     letterSpacing: 0,
//     position: "absolute"
//   },
//   poupadoTypo: {
//     fontFamily: "Poppins-Regular",
//     height: 29,
//     alignItems: "center",
//     display: "flex",
//     color: "#dbd8d8",
//     fontSize: 10,
//     textAlign: "left",
//     lineHeight: 30,
//     letterSpacing: 0,
//     position: "absolute"
//   },
//   telaChildLayout: {
//     height: 50,
//     width: 50,
//     position: "absolute"
//   },
//   buttonLayout: {
//     justifyContent: "center",
//     width: 268,
//     borderRadius: 43,
//     left: 64,
//     top: 500,
//     height: 340,
//     alignItems: "center",
//     borderStyle: "solid",
//     position: "absolute",
//     overflow: "hidden"
//   },
//   buttonShadowBox: {
//     borderWidth: 3,
//     borderColor: "#00c20d",
//     backgroundColor: "rgba(245, 245, 245, 0.82)",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4
//     }
//   },
//   buttonPosition: {
//     top: 133,
//     justifyContent: "center",
//     width: 268,
//     borderRadius: 43,
//     alignItems: "center",
//     borderStyle: "solid",
//     position: "absolute",
//     overflow: "hidden"
//   },
//   telaDeMenuJuniorChild: {
//     backgroundColor: "rgba(16, 112, 180, 0.47)",
//     left: -43,
//     top: 83,
//     transform: [
//       {
//         rotate: "-45.6deg"
//       }
//     ],
//     height: 238,
//     width: 394,
//     borderRadius: 20
//   },
//   telaLayout: {
//     height: 479,
//     width: 591,
//     left: -374,
//     top: 699,
//     backgroundColor: "rgba(16, 112, 180, 0.47)",
//     borderRadius: 20,
//     position: "absolute"
//   },
//   copySaldoIcon: {
//     top: -228,
//     left: -520,
//     width: 2160,
//     height: 1080,
//     position: "absolute"
//   },
//   telaPosition: {
//     backgroundColor: "rgba(0, 30, 87, 0.44)",
//     top: 209,
//     left: 42,
//     transform: [
//       {
//         rotate: "-45.6deg"
//       }
//     ],
//     height: 238,
//     width: 394,
//     borderRadius: 20,
//     position: "absolute"
//   },
//   rectangleViewPosition: {
//     left: 92,
//     top: 245,
//     backgroundColor: "rgba(0, 30, 87, 0.44)",
//     transform: [
//       {
//         rotate: "-45.6deg"
//       }
//     ],
//     height: 238,
//     width: 394,
//     borderRadius: 20,
//     position: "absolute"
//   },
//   telaDeMenuJuniorChild1: {
//     top: 450,
//     left: 158,
//     backgroundColor: "rgba(0, 30, 87, 0.48)",
//     transform: [
//       {
//         rotate: "-45.6deg"
//       }
//     ],
//     height: 238,
//     width: 394,
//     borderRadius: 20
//   },
//   telaChildLayout1: {
//     height: 127,
//     backgroundColor: "rgba(0, 30, 87, 0.78)",
//     left: 79,
//     top: 817,
//     width: 394,
//     borderRadius: 20,
//     position: "absolute"
//   },
//   telaDeMenuJuniorChild3: {
//     top: 37,
//     left: 32
//   },
//   telaDeMenuJuniorChild4: {
//     top: 411,
//     left: 42,
//     opacity: 0.75,
//     height: 49,
//     width: 332,
//     borderWidth: 1,
//     borderColor: "rgba(0, 0, 0, 0.5)",
//     borderStyle: "solid",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)"
//   },
//   telaDeMenuJuniorChild5: {
//     top: 505,
//     left: 42,
//     opacity: 0.75,
//     height: 49,
//     width: 332,
//     borderWidth: 1,
//     borderColor: "rgba(0, 0, 0, 0.5)",
//     borderStyle: "solid",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)"
//   },
//   telaDeMenuJuniorChild6: {
//     top: 590,
//     left: 42,
//     opacity: 0.75,
//     height: 49,
//     width: 332,
//     borderWidth: 1,
//     borderColor: "rgba(0, 0, 0, 0.5)",
//     borderStyle: "solid",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)"
//   },
//   telaDeMenuJuniorChild7: {
//     left: 0,
//     backgroundColor: "rgba(16, 112, 180, 0.95)",
//     height: 72,
//     top: 794,
//     width: 394,
//     position: "absolute"
//   },
//   telaChildShadowBox1: {
//     width: 393,
//     borderColor: "rgba(129, 199, 132, 0.5)",
//     borderRadius: 2,
//     left: -1,
//     height: 72,
//     top: 794,
//     opacity: 0.75,
//     borderWidth: 1,
//     borderStyle: "solid",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     position: "absolute"
//   },
//   telaChildShadowBox: {
//     height: 12,
//     width: 401,
//     backgroundColor: "#00c20d",
//     borderRadius: 12,
//     left: -4,
//     top: 788,
//     borderColor: "rgba(129, 199, 132, 0.5)",
//     opacity: 0.75,
//     borderWidth: 1,
//     borderStyle: "solid",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     position: "absolute"
//   },
//   icon: {
//     overflow: "hidden"
//   },
//   user: {
//     left: 130
//   },
//   barChart: {
//     left: 227
//   },
//   ellipseIcon: {
//     top: 803,
//     left: 26,
//     position: "absolute"
//   },
//   homeIcon: {
//     left: 33,
//     overflow: "hidden"
//   },
//   icon2: {
//     height: "100%",
//     width: "100%"
//   },
//   iconHelpOutline: {
//     left: "82.44%",
//     top: "95.07%",
//     right: "8.4%",
//     bottom: "0.7%",
//     width: "9.16%",
//     height: "4.23%",
//     position: "absolute"
//   },
//   erick: {
//     top: 15,
//     left: 46,
//     fontSize: 20,
//     fontWeight: "800",
//     fontFamily: "SofiaSans-ExtraBold",
//     color: "#f5f5f5",
//     textAlign: "center",
//     lineHeight: 99,
//     letterSpacing: 0,
//     position: "absolute"
//   },
//   erick1: {
//     top: 15,
//     left: 23,
//     fontSize: 20,
//     fontWeight: "800",
//     fontFamily: "SofiaSans-ExtraBold",
//     color: "#f5f5f5",
//     textAlign: "center",
//     lineHeight: 99,
//     letterSpacing: 0,
//     position: "absolute"
//   },
//   lvl: {
//     color: "#00c20d",
//     left: 130
//   },
//   text: {
//     left: 170,
//     color: "#ffc107"
//   },
//   rectangleIcon: {
//     top: 49,
//     left: 200
//   },
//   saldo22: {
//     top: 36,
//     left: 303,
//     width: 63,
//     height: 63,
//     position: "absolute"
//   },
//   text1: {
//     top: 13,
//     left: 243,
//     color: "#fff",
//     fontFamily: "Poppins-Bold",
//     fontWeight: "700",
//     fontSize: 16,
//     textAlign: "center",
//     lineHeight: 99,
//     letterSpacing: 0,
//     position: "absolute"
//   },
//   receitaIcon: {
//     top: 174,
//     width: 324,
//     height: 179,
//     left: 33
//   },
//   jornada: {
//     top: 418,
//     lineHeight: 30,
//     fontSize: 24,
//     textAlign: "left",
//     color: "#fff",
//     fontFamily: "Poppins-Bold",
//     left: 90
//   },
//   cofrinhos: {
//     top: 516,
//     lineHeight: 30,
//     fontSize: 24,
//     textAlign: "left",
//     color: "#fff",
//     fontFamily: "Poppins-Bold",
//     left: 90
//   },
//   misses: {
//     top: 600,
//     left: 95,
//     lineHeight: 30,
//     fontSize: 24,
//     textAlign: "left",
//     color: "#fff",
//     fontFamily: "Poppins-Bold"
//   },
//   text2: {
//     top: 417,
//     left: 300
//   },
//   r150000: {
//     top: 510,
//     left: 279
//   },
//   r000: {
//     top: 593,
//     left: 289
//   },
//   percorrida: {
//     top: 433,
//     left: 282,
//     fontWeight: "600",
//     fontFamily: "Poppins-SemiBold",
//     height: 29,
//     alignItems: "center",
//     display: "flex",
//     color: "#dbd8d8",
//     fontSize: 10,
//     width: 66,
//     textAlign: "left",
//     lineHeight: 30,
//     letterSpacing: 0,
//     position: "absolute"
//   },
//   poupado: {
//     top: 525,
//     left: 292,
//     width: 66,
//     fontFamily: "Poppins-Regular"
//   },
//   conquistado: {
//     top: 608,
//     left: 277,
//     width: 92
//   },
//   groupIcon: {
//     top: 589,
//     left: 16
//   },
//   telaDeMenuJuniorChild10: {
//     left: 17,
//     top: 411
//   },
//   iconAttachMoneyIcon: {
//     height: "2.49%",
//     width: "5.39%",
//     top: "6.08%",
//     right: "40.64%",
//     bottom: "91.43%",
//     left: "53.97%",
//     position: "absolute"
//   },
//   telaDeMenuJuniorChild11: {
//     top: 504,
//     left: 16
//   },
//   telaDeMenuJunior: {
//     alignSelf: "stretch",
//     borderRadius: 6,
//     backgroundColor: "#001e57",
//     height: 852,
//     overflow: "hidden"
//   },
//   telaDeMenuJuniorChild12: {
//     backgroundColor: "rgba(16, 112, 180, 0.47)",
//     left: -43,
//     top: 83,
//     transform: [
//       {
//         rotate: "-45.6deg"
//       }
//     ],
//     height: 238,
//     width: 394,
//     borderRadius: 20
//   },
//   button: {
//     borderWidth: 1.3,
//     borderColor: "#2c2c2c",
//     backgroundColor: "#f5f5f5",
//     justifyContent: "center",
//     width: 268,
//     borderRadius: 43,
//     left: 64,
//     top: 544
//   },
//   button1: {
//     shadowColor: "rgba(0, 0, 0, 0.5)",
//     justifyContent: "center",
//     width: 268,
//     borderRadius: 43,
//     left: 64,
//     top: 544,
//     height: 340,
//     alignItems: "center",
//     borderStyle: "solid",
//     position: "absolute",
//     overflow: "hidden",
//     borderWidth: 3,
//     borderColor: "#00c20d",
//     backgroundColor: "rgba(245, 245, 245, 0.82)"
//   },
//   icon3: {
//     borderRadius: 18,
//   },
//   saldo64: {
//     left: 86,
//     top: 562,
//     width: 223,
//     height: 260,
//     position: "absolute"
//   },
//   button2: {
//     left: 57,
//     height: 340,
//     top: 133,
//     borderWidth: 1.3,
//     borderColor: "#2c2c2c",
//     backgroundColor: "#f5f5f5"
//   },
//   button3: {
//     left: 58,
//     shadowColor: "rgba(0, 0, 0, 0.75)",
//     height: 357,
//     borderWidth: 3,
//     borderColor: "#00c20d",
//     backgroundColor: "rgba(245, 245, 245, 0.82)",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4
//     }
//   },
//   conceitos: {
//     top: 450,
//     left: 108,
//     fontSize: 32,
//     lineHeight: 20,
//     fontFamily: "Sitara",
//     color: "#001e57",
//     textShadowColor: "rgba(0, 0, 0, 0.25)",
//     textShadowOffset: {
//       width: 0,
//       height: 4
//     },
//     textShadowRadius: 4
//   },
//   investimentos: {
//     top: 810,
//     left: 99,
//     fontSize: 32,
//     lineHeight: 20,
//     fontFamily: "Sitara",
//     color: "#001e57",
//     textShadowColor: "rgba(0, 0, 0, 0.25)",
//     textShadowOffset: {
//       width: 0,
//       height: 4,
//     },
//   },
//   designSemNome1: {
//     top: 152,
//     width: 209,
//     height: 274,
//     borderRadius: 8,
//     left: 92,
//     position: "absolute"
//   },
//   telaDeMenuJuniorParent: {
//     flex: 1,
//     width: "100%"
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginTop: 10,
//     paddingHorizontal: 10,
//     color: '#fff',
//   },
// });

// export default Menu;