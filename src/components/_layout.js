import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCalculadora: {
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    inputText: {
        width: 200,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#bfbdbd',
        padding: 10,
        margin: 10,
    },
    inputTextNumber: {
        width: 200,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#bfbdbd',
        padding: 10,
        margin: 10,
        fontWeight: 'bold',
    },
    buttonColumn: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    buttonOperationsStyle: {
        width: 41,
        height: 40,
        margin: 5,
        backgroundColor: "#bfbdbd",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#bfbdbd',
    },
    othersButtons: {
        width: 100,
        height: 40,
        margin: 40,
        borderRadius: 15,
        backgroundColor: "#3492f6",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold',
    },
    textButton: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    textResult: {
        fontWeight: 'bold',
    },
});

export default styles;