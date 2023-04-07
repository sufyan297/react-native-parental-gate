import React, { useEffect, useState } from 'react';
import { Text, View, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getRandomNumbers } from './utils/common';


interface IParentalControl {
    isVisible: boolean;
    onClose?: () => void;
    onSuccess: () => void;
    onFailed: () => void;
}

interface IWordNumbers {
    name: string;
    value: string;
}

const ParentalControl: React.FC<IParentalControl> = ({ isVisible, onClose, onSuccess, onFailed }) => {

    const [randomNumbers, setrandomNumbers] = useState<IWordNumbers[]>([]);
    const [selectedNumbers, setSelectedNumbers] = useState<IWordNumbers[]>([]);

    const WordsNumbers: IWordNumbers[] = [
        {
            name: '1',
            value: 'One',
        },
        {
            name: '2',
            value: 'Two',
        },
        {
            name: '3',
            value: 'Three',
        },
        {
            name: '4',
            value: 'Four',
        },
        {
            name: '5',
            value: 'Five',
        },
        {
            name: '6',
            value: 'Six',
        },
        {
            name: '7',
            value: 'Seven',
        },

        {
            name: '8',
            value: 'Eight',
        },
        {
            name: '9',
            value: 'Nine',
        },
    ]

    useEffect(() => {
        RandomNumbers();
    }, [])

    useEffect(() => {
        if (selectedNumbers.length == 3) {
            if (randomNumbers[0] && selectedNumbers[0] && randomNumbers[0].name == selectedNumbers[0].name &&
                randomNumbers[1] && selectedNumbers[1] &&randomNumbers[1].name == selectedNumbers[1].name &&
                randomNumbers[2] && selectedNumbers[2] && randomNumbers[2].name == selectedNumbers[2].name) {
                onSuccess ? onSuccess() : null;
            } else {
                onFailed ? onFailed() : null;
            }
            //Reset Current Selection & Generate Random
            RandomNumbers();
            setSelectedNumbers([]);
        }
    }, [selectedNumbers]);


    const RandomNumbers = () => {
        const randNumbers = getRandomNumbers(3);
        convertNumericToWords(randNumbers);
    }

    const convertNumericToWords = (num: string) => {
        if (num) {
            const finalArray: IWordNumbers[] = [];
            num.split('').map((numeric) => {
                const word = WordsNumbers.find((item) => item.name == numeric);
                if (word) {
                    finalArray.push(word);
                }
            })
            setrandomNumbers(finalArray)

        }
    }

    const onCheckMatch = (item: IWordNumbers) => {
        const tmpSelectedNumbers = [...selectedNumbers];
        if (tmpSelectedNumbers.length <= 3) {
            tmpSelectedNumbers.push(item);
            setSelectedNumbers(tmpSelectedNumbers);
        }
        // for ( var i = 0; i < 3; i++ ){
        //     // const selectedNumbers : IWordNumbers[] = [];

        //     // selectedNumbers.push(item),

        // }

    }
    return (
        <View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => onClose ? onClose() : undefined}
            >
                <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                    <TouchableOpacity onPress={() => onClose ? onClose() : undefined}
                    style={{height:50 , width:50 , borderRadius:25, borderWidth:1, position:'absolute', top:40 , right:30, justifyContent:'center'}}>
                    
                        <Text style={{ fontWeight: 'bold', fontSize: 24, alignSelf:'center'}}>X</Text>
                    </TouchableOpacity>

                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                        <Text style={{ fontWeight: 'bold', fontSize: 24, paddingVertical: 20 }}>Ask your Parents!</Text>
                        <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: 20 }}>Match the numbers please</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        {
                            randomNumbers.map((item, index) =>
                                <View key={index} style={{ paddingVertical: 10 }}>
                                    <Text style={{ padding: 7, fontSize: 20, color: 'blue' }}>{item.value}</Text>
                                </View>
                            )
                        }

                    </View>

                    <FlatList
                        data={WordsNumbers}
                        numColumns={3}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity onPress={() => onCheckMatch(item)} key={index} style={{ ...styles.numberContainer, ...selectedNumbers.findIndex((selected) => selected.name == item.name) > -1 ? { backgroundColor: 'blue' } : null }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, color : selectedNumbers.findIndex((selected) => selected.name == item.name) > -1 ? 'white' : undefined }}>{item.name}</Text>
                            </TouchableOpacity>

                        }
                    />
                </View>

            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    numberContainer: {
        height: 50, width: 50, borderWidth: 1, borderRadius: 25,
        justifyContent: 'center', alignItems: 'center', margin: 7
    }
})
export default ParentalControl;