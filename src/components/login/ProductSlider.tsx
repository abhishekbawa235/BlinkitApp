import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC, useMemo } from 'react'
import { imageData } from '@utils/dummyData';
import AutoScroll from '@homielab/react-native-auto-scroll'
import { screenWidth } from '@utils/Scaling';
const ProductSlider = () => {
    const rows = useMemo(() => {
        const result = [];
        for (let i = 0; i < imageData.length; i += 4) {
            result.push(imageData.slice(i, i + 4))
        }
        console.log('resulttt', result)
        return result

    }, [])
    return (
        <View pointerEvents='none'>
            <AutoScroll style={styles.autoScroll}
                endPaddingWidth={0}
                duration={10000}
            >
                <View style={styles.gridStyle}>
                    {
                        rows?.map((row: any, index: number): any => {

                            return (
                                <MemorizedRow key={index} row={row} rowIndex={index} />
                            )
                        })
                    }
                </View>
            </AutoScroll>
        </View>
    )
}

const Row: FC<{ row: typeof imageData; rowIndex: number }> = ({ row, rowIndex }) => {
    return (
        <View style={styles.row}>
            {row.map((image, imageIndex) => {
                const horizantalShift = rowIndex % 2 === 0 ? -18 : 18;
                return (
                    <View key={imageIndex} style={[styles.itemContainer, { transform: [{ translateX: horizantalShift }] }]}>
                        <Image source={image} style={styles.image} />
                    </View>
                )
            })}
        </View>
    )
}

const MemorizedRow = React.memo(Row)

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 12,
        marginHorizontal: 10,
        width: screenWidth * 0.26,
        height: screenWidth * 0.26,
        backgroundColor: '#e9f7f8',
        justifyContent: 'center',
        borderRadius: 25,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: "100%",
        resizeMode: 'cover'
    },
    autoScroll: {
        position: 'absolute',
        zIndex: -2,
    },
    gridStyle: {
        justifyContent: 'center',
        overflow: 'visible',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    }
})
export default ProductSlider