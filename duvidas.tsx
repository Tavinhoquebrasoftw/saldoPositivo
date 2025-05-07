import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    ScrollView,
} from 'react-native'

import { Header } from '../../components/header'
import {Input} from '../../components/input'

import {Schema, z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { router } from 'expo-router'
import {useDataStore} from '../../store/data'

const schema = z.object({
    duvida: z.string().min(1, {message: "Digite sua dúvida "})
})


type FormData = z.infer<typeof schema>

export default function Step(){
    const {control, handleSubmit, formState: { errors, isValid}} = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const setPageOne =useDataStore(state=> state.setPageOne)

    function handleCreate(data: FormData)
    {
 console.log("passando dados"); 

    setPageOne({
        duvida: data.duvida,
    })

 router.push("/create")
    }

    return(
        <View style={styles.container}>
            <Header
            step='Vamos la'
            title='Tire sua dúvida'
            />
        
        <ScrollView style={styles.content}>
            <Text style={styles.label}>Dúvida:</Text>
            <Input
                name="Dúvida"
                control={control}
                placeholder="Digite sua Dúvida"
                error={errors.duvida?.message}
                keyboardType="default"
            />
            

        <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}>
            <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
        </ScrollView>

        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "black"
    },
    content:{
        paddingLeft: 16,
        paddingRight:16,
    },
    label:{
        fontSize:16,
        color: "	#00BFFF",
        fontWeight:'bold',
        marginBottom: 8,
    },
    button:{
        backgroundColor: "#00BFFF",
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4, 
    },
    buttonText:{
        color: "#F5F5F5",
        fontSize: 16,
        fontWeight:'bold'
    }
})