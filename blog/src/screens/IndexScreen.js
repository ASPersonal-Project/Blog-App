import React,{useContext} from 'react'
import {View,Text,StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const IndexScreen = () => {
    const navigation = useNavigation();
   
    const {data,addBlogPost,deleteBlogPost} = useContext(BlogContext);
    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) =>{
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show',{id:item.id})}>
                    <View style={styles.row}> 
                        <Text style={styles.title}>{item.title}-{item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name="trash" style={styles.icon}/>
                        </TouchableOpacity>
                    </View> 
                    </TouchableOpacity>
                );
                }}
            />
        </View>
    )
};

// IndexScreen.navigationOption = () => {
//     return {
//         headerRight: <Feather name="plus"/>
//     }
// }

export const createScreen = () => {
    console.log('ji');
    const navigation = useNavigation();
    navigation.navigate('Show');
}


const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }
})

export default IndexScreen;
