import { View, StyleSheet, Pressable, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';
import { router } from "expo-router";

interface HeaderProps {
    title: string;
    showBackButton?: boolean;
}

export function LoginHeader({ title, showBackButton = true }: HeaderProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.headerContent}>
                    {showBackButton && (
                        <Pressable 
                            onPress={() => router.back()} 
                            style={styles.backButton}
                        >
                            <Feather name="arrow-left" size={24} color="#FFF" />
                        </Pressable>
                    )}
                    
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <View style={styles.decorativeLine} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001e57",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 20 : 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    content: {
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 15,
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF",
        marginBottom: 8,
    },
    decorativeLine: {
        height: 4,
        width: '40%',
        backgroundColor: '#FFF',
        borderRadius: 2,
        opacity: 0.7,
    },
});