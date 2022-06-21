import { Text, View } from "@tarojs/components";
import Taro, { FC, useDidShow, useRouter } from "@tarojs/taro";

const TodoDetail: FC<any> = () => {
    const router = useRouter()
    useDidShow(()=>{
        Taro.setNavigationBarTitle({
            title:'详情'
        })
    })
    return (
        <View>
            <Text>{router.params.value}</Text>
        </View>
    )
}
export default TodoDetail